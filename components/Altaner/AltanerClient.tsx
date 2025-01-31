'use client';

import React from 'react';
import ReactPlayer from 'react-player';
import styles from './style.module.scss';
import HeroSection from './sections/HeroSection';
// import PricingSection from './sections/PricingSection';
import FinalCTASection from './sections/FinalCTASection';

interface AltanerClientProps {
  altanerData: any;
  locale: string;
}

const AltanerClient: React.FC<AltanerClientProps> = ({ altanerData, locale }) => {
  const landingLocales = altanerData?.template?.details?.landing?.locales || [];
  const defaultContent = {};

  const content =
    landingLocales.find((l) => l.language === locale)?.content ||
    landingLocales.find((l) => l.language === 'en')?.content ||
    defaultContent;

  console.log('altanerData', altanerData);

  return (
    <div className={styles.altanerWrapper}>
      <main className={styles.main}>
        <HeroSection
          content={content}
          publicName={altanerData?.template?.public_name || altanerData?.template?.name || 'Default Name'}
          templateId={altanerData?.template.selected_version_id}
        />

        {content?.video_demo_url && (
          <div className={styles.videoWrapper}>
            <ReactPlayer
              url={content.video_demo_url}
              width="100%"
              height="100%"
              controls
            />
          </div>
        )}

        {/* <PricingSection altanerData={altanerData} /> */}

        {/* <FinalCTASection
          content={content}
          templateId={altanerData?.template?.id || 'default-id'}
        /> */}
      </main>
    </div>
  );
};

export default AltanerClient;
