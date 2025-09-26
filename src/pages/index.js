import React from 'react'
import Home from './home'
import About from './about'
import Course from './course'
import { Fragment } from 'react'

const BoilerCode = () => {
  return (
    <Fragment>
        <Home />
        <About />
        <Course/>
    </Fragment>
  )
}

export default BoilerCode