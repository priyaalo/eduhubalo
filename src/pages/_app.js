import React, { Fragment } from "react";
import Head from "next/head";  
import "@/styles/global.css";
import WebLayout from "@/layout/WebLayout";


const App = ({ Component, pageProps }) => {
  return (
   <Fragment>
  <Head>
    <title>IT Training Institute | ALO Educational Hub | Nagercoil</title>
  </Head>
 
 
  <WebLayout>
    <Component {...pageProps} />
  </WebLayout>
</Fragment>

  );
};

export default App;
