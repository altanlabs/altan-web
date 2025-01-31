"use client"
import { useTranslation } from 'react-i18next';
import Logo from './logo'
import { Icon } from '@iconify/react';

export default function Footer() {
  const { t } = useTranslation(["common", "footer"]);

  const socialLinks = [
    { name: 'discord', url: 'https://discord.gg/2zPbKuukgx', icon: 'mdi:discord' },
    { name: 'instagram', url: 'https://www.instagram.com/altanlabs/', icon: 'mdi:instagram' },
    { name: 'x', url: 'https://x.com/altan_ai', icon: 'ri:twitter-x-line' },
    { name: 'linkedin', url: 'https://www.linkedin.com/company/altanlabs', icon: 'mdi:linkedin' },
    { name: 'facebook', url: 'https://www.facebook.com/altanlabs', icon: 'mdi:facebook' },

  ];
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-4 order-1 lg:order-none">
            <div className="h-full flex flex-col sm:flex-row lg:flex-col justify-between">
              <div className="mb-4 sm:mb-0">
                <div className="mb-4">
                  <Logo />
                </div>
                <div className="text-sm text-slate-300">© Altan <span className="text-slate-500">-</span> All rights reserved.</div>
                <p className="text-sm text-slate-300">contact@altan.ai</p>
              </div>
              {/* Social links */}
              <ul className="flex items-center gap-5">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.url} aria-label={`${link.name} icon`} target="_blank" rel="noopener noreferrer">
                      <Icon
                        icon={link.icon}
                        className="text-[#D1D8E0] transition-all duration-300 hover:text-primary"
                        width="24"
                        height="24"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-50 font-medium mb-2">Product</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="/marketplace">Marketplace</a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="/apps">Integrations</a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="/pricing">Pricing & Plans</a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="/changelog">Changelog</a>
              </li>
              
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-50 font-medium mb-2">Company</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="/about">About us</a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="#0">Blog</a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="mailto:money@altan.ai">Investors</a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-50 font-medium mb-2">Resources</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="https://docs.altan.ai/" target="_blank" rel="noopener noreferrer">Docs</a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="https://status.altan.ai/" target="_blank" rel="noopener noreferrer">Status</a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="https://www.altan.ai/roi" target="_blank" rel="noopener noreferrer">ROI Calculator</a>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-slate-50 font-medium mb-2">Legals</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="/terms">Terms & Conditions</a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-slate-200 transition duration-150 ease-in-out" href="/privacy">Privacy policy</a>
              </li>

            </ul>
          </div>

        </div>

      </div>
    </footer>
  )
}
