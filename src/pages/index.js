import React from 'react'
import Home from './home'
import About from './about'
import Course from './course'
import HireTalent from './hireTalent'
import Contact from './contactus'
import Certificate from './certificates'
import { Fragment } from 'react'

const BoilerCode = () => {
  return (
    <Fragment>
        <Home />
        <About />
        <Course/>
        <HireTalent/>
        <Contact/>
        <Certificate/>
       

        
    </Fragment>
  )
}

export default BoilerCode