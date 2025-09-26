import React,{Fragment} from 'react'
import Head from 'next/head'
import CoursesHeroSection from '@/sections/CoursesSection/coursehero/CoursesHeroSection'
import CoursesImageSection from '@/sections/CoursesSection/imagesection/CoursesImageSection'
import CoursesCardSection from '@/sections/CoursesSection/cardsection/CoursesCardSection'
import StudentSection from '@/sections/CoursesSection/studentsection/StudentSection'
import CoursesQnSection from '@/sections/CoursesSection/qnsection/CoursesQnSection'




const Course = () => {
  return (
    <Fragment>
      <Head>
        <title>Courses - Boiler Code</title>
        {/* enter seo here */}
      </Head>
      <CoursesHeroSection/>
      <CoursesImageSection/>
      <CoursesCardSection/>
      <StudentSection/>
      <CoursesQnSection/>
    
    </Fragment>
  )
}

export default Course