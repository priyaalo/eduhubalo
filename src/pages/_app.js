import React, { Fragment, useEffect } from "react";
import Head from "next/head";  
import "@/styles/global.css";
import WebLayout from "@/layout/WebLayout";
import { useRouter } from "next/router";


const App = ({ Component, pageProps }) => {
  
  return (
    <Fragment>
      <WebLayout>
        <Head>
          <title>IT Training Institute | ALO Educational Hub | Nagercoil</title>
           {/* <link rel="icon" href="/Logo/alo hub white.png" /> */}
    
        </Head>
        
        <Component {...pageProps} />
      </WebLayout>
    </Fragment>
  );
};

export default App;
