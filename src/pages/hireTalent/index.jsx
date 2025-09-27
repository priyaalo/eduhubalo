import React,{Fragment} from 'react'
import Head from 'next/head'
import HireHeroSection from '@/sections/hireTalentSection/HeroSection/HireHeroSection'
import { HubSection } from '@/sections/hireTalentSection/HubSection/HubSection'
import {ValueSection} from '@/sections/hireTalentSection/ValueSection/ValueSection'
import WhySection from '@/sections/hireTalentSection/WhySection/WhySection'


const HireTalent = () => {
  return (
    <Fragment>
      <Head>
        <title>hireTalent - Boiler Code</title>
        {/* enter seo here */}
      </Head>
      <HireHeroSection/>
      <HubSection/>
      <ValueSection/>
      <WhySection/>
    
    </Fragment>
  )
}

export default HireTalent