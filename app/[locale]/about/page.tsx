export const metadata = {
  title: 'About - Altan',
  description: 'Page description',
}

import Hero from '@/components/Landing/components/hero-about'
import Story from '@/components/Landing/components/story'
import Team from '@/components/Landing/components/team'
import Recruitment from '@/components/Landing/components/recruitment'
import Testimonials from '@/components/Landing/components/testimonials-02'
import Cta from '@/components/Landing/components/cta-02'

export default function About() {
  return (
    <>
      <Hero />
      {/* <Story /> */}
      {/* <Team /> */}
      <Recruitment />
      {/* <Testimonials /> */}
      {/* <Cta /> */}
    </>
  )
}
