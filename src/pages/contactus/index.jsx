import ContactAddress from '@/sections/contactSection/contactAddress/ContactAddress'
import ContactBannerSection from '@/sections/contactSection/contactBannersection/ContactBannerSection'
import ContactFormSection from '@/sections/contactSection/contactformsection/ContactFormSection'
import Head from 'next/head'
import React from 'react'

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <ContactBannerSection />
      <ContactFormSection />
      <ContactAddress />
    </>
  )
}

export default Contact