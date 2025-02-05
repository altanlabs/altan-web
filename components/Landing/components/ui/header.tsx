"use client"
import Link from 'next/link'
import Logo from './logo'
import MobileMenu from './mobile-menu'
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { useTranslation } from 'react-i18next';

export default function Header({locale}) {
  const { t } = useTranslation(["common", "home"]);

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-1">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">

            {/* Desktop menu links */}
            <ul className="flex grow justify-center flex-wrap items-center">
              {/* <li>
                <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/marketplace">Marketplace</Link>
              </li> */}
              <li>
                <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/apps">Integrations</Link>
              </li>
              <li>
                <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/about">About</Link>
              </li>
              <li>
                <Link className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" href="/referrals">Referrals</Link>
              </li>
            </ul>

          </nav>

          {/* Desktop sign in links */}
          <ul className="flex-1 flex justify-end items-center">
            <LocaleSwitcher locale={locale}/>
            {/* <li>
              <Link className="font-medium text-sm text-slate-300 hover:text-white whitespace-nowrap transition duration-150 ease-in-out" href="/signin">Sign in</Link>
            </li> */}
            <li className="ml-6">
              <Link className="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none" 
                href="https://dashboard.altan.ai/" target="_blank" rel="noopener noreferrer">
                <span className="relative inline-flex items-center">
                 {t("common:access")} <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                </span>
              </Link>
            </li>
          </ul>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
