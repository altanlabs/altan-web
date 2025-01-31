'use client'

import { useState, useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'
import { Transition } from '@headlessui/react'
import { useTranslation } from 'react-i18next'

interface DemoItem {
  name: string
  icon: string
  video: string
  copy: string
}


export default function Demos() {
  const { t } = useTranslation(["common", "home"])
  const sectionsData: Record<string, DemoItem[]> = {
    
    noCodeAutomation: [
      {
        name: t("home:demos.noCodeAutomation.builder.name"),
        icon: "mdi:tools",
        video: "/demos/noCodeAutomation/builder.mp4",
        copy: t("home:demos.noCodeAutomation.builder.copy")
      },
      {
        name: t("home:demos.noCodeAutomation.conditions.name"),
        icon: "mdi:filter-outline",
        video: "/demos/noCodeAutomation/condition.mp4",
        copy: t("home:demos.noCodeAutomation.conditions.copy")
      },
      {
        name: t("home:demos.noCodeAutomation.code.name"),
        icon: "mdi:code-tags",
        video: "/demos/noCodeAutomation/code.mp4",
        copy: t("home:demos.noCodeAutomation.code.copy")
      },
      {
        name: t("home:demos.noCodeAutomation.invoke.name"),
        icon: "mdi:play-circle-outline",
        video: "/demos/noCodeAutomation/invoke.mp4",
        copy: t("home:demos.noCodeAutomation.invoke.copy")
      },
      {
        name: t("home:demos.noCodeAutomation.retrigger.name"),
        icon: "mdi:replay",
        video: "/demos/noCodeAutomation/retrigger.mp4",
        copy: t("home:demos.noCodeAutomation.retrigger.copy")
      },
    ],
    beyondWorkflows: [
      {
        name: t("home:demos.beyondWorkflows.holisticSolutions.name"),
        icon: "ic:baseline-all-inclusive",
        video: "/demos/beyondWorkflows/create_whole_apps.mp4",
        copy: t("home:demos.beyondWorkflows.holisticSolutions.copy")
      },
      {
        name: t("home:demos.beyondWorkflows.customComponents.name"),
        icon: "ic:outline-all-out",
        video: "/demos/beyondWorkflows/workflows_into_single_component.mp4",
        copy: t("home:demos.beyondWorkflows.customComponents.copy")
      },
    ],
  }


  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [progress, setProgress] = useState<number>(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const allDemos: DemoItem[] = Object.values(sectionsData).flat()
  const currentDemo = allDemos[activeIndex]

  // Advance to the next video when the current one ends
  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const handleEnded = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % allDemos.length)
      }
      const handleError = () => {
        console.error('Video failed to play')
        setActiveIndex((prevIndex) => (prevIndex + 1) % allDemos.length)
      }
      video.addEventListener('ended', handleEnded)
      video.addEventListener('error', handleError)
      return () => {
        video.removeEventListener('ended', handleEnded)
        video.removeEventListener('error', handleError)
      }
    }
  }, [activeIndex])

  // Update progress bar based on video playback
  useEffect(() => {
    const updateProgress = () => {
      const video = videoRef.current
      if (video) {
        const currentTime = video.currentTime
        const duration = video.duration
        setProgress((currentTime / duration) * 100 || 0)
      }
    }

    const video = videoRef.current
    video?.addEventListener('timeupdate', updateProgress)

    // Reset progress when activeIndex changes
    setProgress(0)

    return () => video?.removeEventListener('timeupdate', updateProgress)
  }, [activeIndex])

  const handleDemoClick = (index: number) => {
    setActiveIndex(index)
  }

  const sectionKeys = Object.keys(sectionsData)

  return (
    <section className="flex flex-col items-center max-w-6xl mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-1">
          {t("home:demos.platformDescription")}
        </div>
        <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3">
          {t("home:demos.title")}
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          {t("home:demos.description")}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0 w-full">
        {/* Demo Selector */}
        <div className="lg:w-1/3 flex flex-col space-y-4">
          {sectionKeys.map((category) => (
            <div key={category}>
              <h3 className="text-lg font-semibold text-gray-300 mb-2">{t(`home:demos.${category}.title`)}</h3>
              <div className="flex flex-wrap gap-4">
                {sectionsData[category].map((item, index) => {
                  const absoluteIndex = sectionKeys
                    .slice(0, sectionKeys.indexOf(category))
                    .reduce((acc, curr) => acc + sectionsData[curr].length, 0) + index

                  const isActive = activeIndex === absoluteIndex

                  return (
                    <div key={item.name} className="relative m-1">
                      <button
                        className={`flex items-center p-2 rounded-lg transition ${isActive
                          ? 'bg-purple-700 text-white shadow-lg border-b-2 border-purple-500'
                          : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                          }`}
                        onClick={() => handleDemoClick(absoluteIndex)}
                      >
                        <Icon icon={item.icon} className="mr-2 w-5 h-5" />
                        <span>{item.name}</span>
                      </button>
                      {/* Progress Bar on the active button */}
                      {isActive && (
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-700 rounded-b-lg overflow-hidden">
                          <div
                            className="h-1 bg-purple-500 transition-all"
                            style={{ width: `${progress}%` }}
                          ></div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Video Display */}
        <div className="lg:w-2/3 flex flex-col items-center lg:pl-8">
          <Transition
            as="div"
            appear
            show={true}
            key={activeIndex}
            className="w-full rounded-lg overflow-hidden shadow-lg bg-gray-900"
            enter="transition-opacity duration-700"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-700"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <video
              ref={videoRef}
              key={currentDemo.video}
              src={currentDemo.video}
              autoPlay
              muted
              playsInline
              preload="auto"
              className="w-full rounded-lg"
            />
          </Transition>
          <p className="mt-4 text-center text-gray-300">{currentDemo.copy}</p>
        </div>
      </div>
    </section>
  )
}
