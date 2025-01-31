import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import fetch from 'node-fetch';
import path from 'path';

const hostname = 'https://altan.ai';
const locales = ['en', 'es', 'ru', 'zh', 'ja', 'it', 'fr', 'de', 'pt', 'ar'];
const appLocales = ['en'];
const staticPaths = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/apps', changefreq: 'monthly', priority: 0.8 },
  { url: '/automators', changefreq: 'monthly', priority: 0.8 },
  { url: '/interfaces', changefreq: 'monthly', priority: 0.8 },
  { url: '/marketplace', changefreq: 'monthly', priority: 0.8 },
  { url: '/privacy', changefreq: 'monthly', priority: 0.8 },
  { url: '/solutions', changefreq: 'monthly', priority: 0.8 },
  { url: '/terms', changefreq: 'monthly', priority: 0.8 },
];


const getDynamicAppPaths = async (locale) => {
  const response = await fetch(`https://api.altan.ai/platform/marketplace/app`);
  const apps = await response.json();
  return apps.products.map(app => ({ url: `${locale !== 'en' ? `/${locale}`: ''}/apps/${app.name.toLowerCase().trim().replace(/\s+/g, '-')}`, changefreq: 'weekly', priority: 0.7 }));
};

const getDynamicActionPaths = async (locale, appName) => {
  try {
    const response = await fetch(`https://api.altan.ai/platform/marketplace/app?name=${appName.toLowerCase().replace(/-/g, ' ').trim()}&relationships=${true}`);
    const app = await response.json();
    const actions = app.products[0]?.actions?.items ?? [];
    return actions.map(action => ({ url: `${locale !== 'en' ? `/${locale}`: ''}/apps/${appName.toLowerCase().trim().replace(/\s+/g, '-')}/actions/${action.name.toLowerCase().trim().replace(/\s+/g, '-')}`, changefreq: 'weekly', priority: 0.6 }));
  } catch (e) {
    console.error(`getDynamicActionPaths (${locale} - ${appName}): ${e.toString()}`)
    return [];
  }
};

function removeXMLInvalidChars(str, removeDiscouragedChars) {
  // remove everything forbidden by XML 1.0 specifications, plus the unicode replacement character U+FFFD
  var regex = /((?:[\0-\x08\x0B\f\x0E-\x1F\uFFFD\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]))/g;
  // ensure we have a string
  str = String(str || '').replace(regex, '');
  if (removeDiscouragedChars) {
      // remove everything discouraged by XML 1.0 specifications
      regex = new RegExp(
          '([\\x7F-\\x84]|[\\x86-\\x9F]|[\\uFDD0-\\uFDEF]|(?:\\uD83F[\\uDFFE\\uDFFF])|(?:\\uD87F[\\uDF' +
          'FE\\uDFFF])|(?:\\uD8BF[\\uDFFE\\uDFFF])|(?:\\uD8FF[\\uDFFE\\uDFFF])|(?:\\uD93F[\\uDFFE\\uD' +
          'FFF])|(?:\\uD97F[\\uDFFE\\uDFFF])|(?:\\uD9BF[\\uDFFE\\uDFFF])|(?:\\uD9FF[\\uDFFE\\uDFFF])' +
          '|(?:\\uDA3F[\\uDFFE\\uDFFF])|(?:\\uDA7F[\\uDFFE\\uDFFF])|(?:\\uDABF[\\uDFFE\\uDFFF])|(?:\\' +
          'uDAFF[\\uDFFE\\uDFFF])|(?:\\uDB3F[\\uDFFE\\uDFFF])|(?:\\uDB7F[\\uDFFE\\uDFFF])|(?:\\uDBBF' +
          '[\\uDFFE\\uDFFF])|(?:\\uDBFF[\\uDFFE\\uDFFF])(?:[\\0-\\t\\x0B\\f\\x0E-\\u2027\\u202A-\\uD7FF\\' +
          'uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|' +
          '(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF]))', 'g');
      str = str.replace(regex, '');
  }
  return str;
}

const generateSitemap = async (paths, filename) => {
  if (!paths?.length) {
    return false;
  }
  const sitemapStream = new SitemapStream({ hostname });
  const xmlString = await streamToPromise(Readable.from(paths).pipe(sitemapStream)).then(data => data.toString());
  
  // Create directories if they don't exist
  const dir = path.join(process.cwd(), 'public', 'sitemaps');
  if (!existsSync(dir)){
    mkdirSync(dir, { recursive: true });
  }
  
  writeFileSync(path.join(dir, filename), removeXMLInvalidChars(xmlString.replaceAll("&", "&amp;"), true));
  return true;
};

const generateSitemapIndex = async (paths, filename) => {
  const localeSitemapIndexContent = paths.map(entry => `<sitemap><loc>${entry.url}</loc><lastmod>${entry.lastmod}</lastmod></sitemap>`).join('');
  const localeSitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${localeSitemapIndexContent}</sitemapindex>`;
  
  // Create directories if they don't exist
  const dir = path.join(process.cwd(), 'public', 'sitemap-indexes');
  if (!existsSync(dir)){
    mkdirSync(dir, { recursive: true });
  }
  
  writeFileSync(path.join(dir, filename), removeXMLInvalidChars(localeSitemapIndexXml.replaceAll("&", "&amp;"), true));
}

const generateSitemaps = async () => {
  console.log('generateSitemaps: START');

  const staticSitemaps = [];

  const localeTasks = locales.map(async (locale) => {
    const appsSitemaps = [];
    const actionsSitemaps = [];

    // Generate sitemaps for static paths
    const staticLocalePaths = staticPaths.map(staticPath => ({
      ...staticPath,
      url: `${locale !== 'en' ? `/${locale}` : ''}${staticPath.url}`,
      lastmod: new Date().toISOString(),
    }));
    const staticFilename = `sitemap-${locale}-static.xml`;

    const staticSitemapGenerated = await generateSitemap(staticLocalePaths, staticFilename);
    if (staticSitemapGenerated) {
      staticSitemaps.push({ url: `${hostname}/sitemaps/${staticFilename}`, lastmod: new Date().toISOString() });
    }

    if (appLocales.includes(locale)) {
      // Generate sitemaps for dynamic app and action paths
      const appPaths = await getDynamicAppPaths(locale);
      console.log(`TOTAL APPS (${locale}): ${appPaths.length}`);
      const appTasks = appPaths.map(async (appPath) => {
        const appName = appPath.url.split('/')[locale === "en" ? 2 : 3];
        const actionPaths = await getDynamicActionPaths(locale, appName);
  
        // Generate sitemap for each app
        const appFilename = `sitemap-${locale}-apps-${appName}.xml`;
        const appPathProcessed = appPath.url.startsWith("/en") ? { ...appPath, url: appPath.url.substr(3) } : appPath;
  
        const appSitemapGenerated = await generateSitemap([appPathProcessed], appFilename);
        if (appSitemapGenerated) {
          appsSitemaps.push({ url: `${hostname}/sitemaps/${appFilename}`, lastmod: new Date().toISOString() });
        }
  
        // Generate sitemap for actions of each app
        const actionFilename = `sitemap-${locale}-apps-${appName}-actions.xml`;
  
        const actionSitemapGenerated = await generateSitemap(actionPaths, actionFilename);
        if (actionSitemapGenerated) {
          actionsSitemaps.push({ url: `${hostname}/sitemaps/${actionFilename}`, lastmod: new Date().toISOString() });
        }
      });
      await Promise.all(appTasks);
  
      await generateSitemapIndex(appsSitemaps, `sitemap-index-${locale}-apps.xml`);
      await generateSitemapIndex(actionsSitemaps, `sitemap-index-${locale}-actions.xml`);
    }
  });

  await Promise.all(localeTasks);

  await generateSitemapIndex(staticSitemaps, `sitemap-index-statics.xml`);
  console.log('generateSitemaps: END');
};


generateSitemaps().catch(console.error);
