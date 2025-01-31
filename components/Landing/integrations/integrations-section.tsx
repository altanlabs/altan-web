'use client'

import Image from 'next/image'
import Particles from '../components/particles'
import IntegrationsCarousel from '../components/integrations-carousel'
import { useTranslation } from 'react-i18next'
import Illustration from '@/public/images/page-illustration.svg'
import Illustration02 from '@/public/images/page-illustration-02.svg'

export default function IntegrationsSection() {
  const { t } = useTranslation(["common", "home"])

  return (
    <section className="relative">

      {/* Illustration 02 */}
      <div className="md:block absolute left-1/2 -translate-x-1/2 bottom-0 -mb-16 blur-2xl opacity-90 pointer-events-none -z-10" aria-hidden="true">
        <Image src={Illustration02} className="max-w-none" width={1440} height={427} alt={t('home:integrations.illustrationAlt')} />
      </div>

      {/* Opacity layer */}
      <div className="absolute inset-0 bg-slate-900 opacity-60 -z-10" aria-hidden="true"></div>

      {/* Radial gradient */}
      <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square" aria-hidden="true">
        <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute w-64 h-64 translate-z-0 bg-purple-400 rounded-full blur-[80px] opacity-70"></div>
      </div>

      {/* Particles animation */}
      <Particles className="absolute inset-0 h-96 -z-10" quantity={15} />

      {/* Illustration */}
      <div className="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10" aria-hidden="true">
        <Image src={Illustration} className="max-w-none" width={1440} height={427} alt={t('home:integrations.illustrationAlt')} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-20">
            <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">
              {t('home:integrations.sectionHeader')}
            </div>
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3">
              {t('home:integrations.sectionTitle')}
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-slate-400">
                {t('home:integrations.description')}
              </p>
            </div>
          </div>
          
          <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4" data-aos="fade-down" data-aos-delay="400">
            <div>
              <a className="btn text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white w-full transition duration-150 ease-in-out group" href="/apps">
                {t('home:integrations.exploreApps')} <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
              </a>
            </div>
            <div>
              <a className="btn text-slate-200 hover:text-white bg-slate-900 bg-opacity-25 hover:bg-opacity-30 w-full transition duration-150 ease-in-out" href="https://dashboard.altan.ai/" target="_blank" rel="noopener noreferrer">
                <span>{t('home:integrations.createYourOwn')}</span>
              </a>
            </div>
          </div>

          <IntegrationsCarousel />

        </div>
      </div>
    </section>
  )
}
