import React from 'react'
import { Fragment } from 'react'
import '@/styles/global.css'
import WebLayout from '@/layout/WebLayout'

const App = ({Component,pageProps}) => {
  return (
    <Fragment>
      <WebLayout>
        <Component {...pageProps} />
      </WebLayout>
    </Fragment>
  )
}

export default App