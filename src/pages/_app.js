
"use client";
import React, { Fragment, useEffect } from "react";
import Head from "next/head";  
import "@/styles/global.css";
import WebLayout from "@/layout/WebLayout";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'react-phone-input-2/lib/style.css'

const App = ({ Component, pageProps }) => {
  
  return (
    <Fragment>
      <ToastContainer />
      <WebLayout>
        <Head>
          <title>IT Training Institute | ALO Educational Hub | Nagercoil</title>
            <link rel="icon" href="/Logo/hub cap logo.png" />
    
        </Head>
        
        <Component {...pageProps} />
      </WebLayout>
    </Fragment>
  );
};

export default App;
