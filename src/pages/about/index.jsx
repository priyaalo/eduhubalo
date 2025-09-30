import React,{Fragment, useEffect} from 'react'
import Head from 'next/head'
import AboutHeroSection from '@/sections/aboutSection/HeroSection/AboutHeroSection'
import VisionSection from '@/sections/aboutSection/VisionSection/VisionSection'
import ChiefSection from '@/sections/aboutSection/ChiefSection/ChiefSection'
import { HistorySection } from '@/sections/aboutSection/HistorySection/HistorySection'
import { WhyUsSection } from '@/sections/aboutSection/WhySection/WhySection'
import  { TeamSection } from '@/sections/aboutSection/MeetTeam/MeetTeam'
import { TrainerSection } from '@/sections/aboutSection/Trainers/Trainers'



const About = () => {

  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Fragment>
      
      <AboutHeroSection/>
      <VisionSection/>
      <ChiefSection/>
      <HistorySection/>
      <WhyUsSection/>
      <TeamSection/>
      <TrainerSection/>
    </Fragment>
  )
}

export default About