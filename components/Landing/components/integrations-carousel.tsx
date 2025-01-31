'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Swiper, { Navigation } from 'swiper'
import 'swiper/swiper.min.css'
import IntegrationImg04 from '@/public/images/integrations-04.svg'
import IntegrationsImg08 from '@/public/images/integrations-08.svg'
import IntegrationsImg20 from '@/public/images/integrations-20.svg'
import IntegrationsImg21 from '@/public/images/integrations-21.svg'
import IntegrationsImg23 from '@/public/images/integrations-23.svg'
import Star from '@/public/images/star.svg'
import Avatar01 from '@/public/images/avatar-01.jpg'
import Avatar02 from '@/public/images/avatar-02.jpg'
import Avatar03 from '@/public/images/avatar-03.jpg'
import Avatar04 from '@/public/images/avatar-04.jpg'
import Avatar05 from '@/public/images/avatar-05.jpg'
import Avatar06 from '@/public/images/avatar-06.jpg'
import Avatar07 from '@/public/images/avatar-07.jpg'
import Avatar08 from '@/public/images/avatar-08.jpg'
import Avatar09 from '@/public/images/avatar-09.jpg'
import Avatar10 from '@/public/images/avatar-10.jpg'
import Avatar11 from '@/public/images/avatar-11.jpg'
import Avatar12 from '@/public/images/avatar-12.jpg'
import Avatar13 from '@/public/images/avatar-13.jpg'
import Avatar14 from '@/public/images/avatar-14.jpg'
import Avatar15 from '@/public/images/avatar-15.jpg'
import Avatar16 from '@/public/images/avatar-16.jpg'
import Avatar17 from '@/public/images/avatar-17.jpg'
import Avatar18 from '@/public/images/avatar-18.jpg'
import Avatar19 from '@/public/images/avatar-19.jpg'

Swiper.use([Navigation])
const integrationItems = [
  {
    image: IntegrationsImg21,
    title: "Google Workspace",
    description: "Google Workspace is a suite of cloud computing, productivity and collaboration tools, software and products developed by Google.",
    avatars: [Avatar01, Avatar02, Avatar03, Avatar04],
    likes: "2.3K",
    link: "/apps",
  },
  {
    image: IntegrationsImg20,
    title: "Microsoft Office",
    description: "Microsoft Office is a suite of productivity applications that includes Microsoft Word, Excel, PowerPoint, and Outlook.",
    avatars: [Avatar05, Avatar06, Avatar07],
    likes: "4.5K",
    link: "/apps",
  },
  {
    image: IntegrationsImg23,
    title: "WeTransfer",
    description: "WeTransfer is a file transfer service that allows users to send large files to others;hare files without the need for a login or account.",
    avatars: [Avatar08, Avatar09, Avatar10, Avatar11],
    likes: "4.7K",
    link: "/apps",
  },
  {
    image: IntegrationImg04,
    title: "Jira",
    description: "Jira is a project management tool developed by Atlassian. It is used for bug tracking, issue tracking, and project management.",
    avatars: [Avatar12, Avatar13, Avatar14, Avatar15],
    likes: "4.4K",
    link: "/apps",
  },
  {
    image: IntegrationsImg08,
    title: "GitHub",
    description: "GitHub is a web-based platform for version control using Git; source code management and collaboration.",
    avatars: [Avatar16, Avatar17, Avatar18, Avatar19],
    likes: "3.4K",
    link: "/apps",
  },
]

export default function IntegrationsCarousel() {

  const [swiperInitialized, setSwiperInitialized] = useState<boolean>(false)

  useEffect(() => {
    const carousel = new Swiper('.altan-carousel', {
      breakpoints: {
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      navigation: {
        nextEl: '.carousel-next',
        prevEl: '.carousel-prev',
      },
    })
    setSwiperInitialized(true)
  }, [])

  return (
    <>
      <div className="altan-carousel swiper-container group">
        <div className="swiper-wrapper w-fit">
          {integrationItems.map((item, index) => (
            <div key={index} className="swiper-slide h-auto bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative">
              <div className="flex flex-col p-5 h-full">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="relative">
                    <Image src={item.image} width={40} height={40} alt={`Icon ${index + 1}`} />
                    <Image className="absolute top-0 -right-1" src={Star} width={16} height={16} alt="Star" aria-hidden="true" />
                  </div>
                  <Link className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0" href={item.link}>
                    {item.title}
                  </Link>
                </div>
                <div className="grow mb-4">
                  <div className="text-sm text-slate-400">{item.description}</div>
                </div>
                <div className="flex justify-between">
                  <div className="flex -space-x-3 -ml-0.5">
                    {item.avatars.map((avatar, avatarIndex) => (
                      <Image key={avatarIndex} className="rounded-full border-2 border-slate-800 box-content" src={avatar} width={24} height={24} alt={`Avatar ${avatarIndex + 1}`} />
                    ))}
                  </div>
                  <button className="flex items-center space-x-2 font-medium text-sm text-slate-300 hover:text-white transition-colors">
                    <span className="sr-only">Like</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                      <path className="fill-slate-500" d="M11.86 15.154 8 13.125l-3.86 2.03c-.726.386-1.591-.236-1.45-1.055l.737-4.299L.303 6.757a1 1 0 0 1 .555-1.706l4.316-.627L7.104.512c.337-.683 1.458-.683 1.794 0l1.93 3.911 4.317.627a1.001 1.001 0 0 1 .555 1.706l-3.124 3.045.737 4.3c.14.822-.726 1.435-1.452 1.053ZM8.468 11.11l2.532 1.331-.483-2.82a1 1 0 0 1 .287-.885l2.049-1.998-2.831-.41a.996.996 0 0 1-.753-.548L8 3.214 6.734 5.78a1 1 0 0 1-.753.547l-2.831.411 2.049 1.998a1 1 0 0 1 .287.885l-.483 2.82 2.532-1.33a.998.998 0 0 1 .932 0Z" />
                    </svg>
                    <span>{item.likes}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex py-8 justify-end">
        <button className="carousel-prev relative z-20 w-12 h-12 flex items-center justify-center group">
          <span className="sr-only">Previous</span>
          <svg className="w-4 h-4 fill-slate-500 group-hover:fill-purple-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
          </svg>
        </button>
        <button className="carousel-next relative z-20 w-12 h-12 flex items-center justify-center group">
          <span className="sr-only">Next</span>
          <svg className="w-4 h-4 fill-slate-500 group-hover:fill-purple-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
          </svg>
        </button>
      </div>
    </>
  )
}
