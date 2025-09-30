import React, { Fragment, useEffect } from "react";
import Head from "next/head";  
import "@/styles/global.css";
import WebLayout from "@/layout/WebLayout";
import { useRouter } from "next/router";

const App = ({ Component, pageProps }) => {
  //  const router = useRouter();

  // useEffect(() => {
  //   const handleRouteChange = () => {
  //    window.scrollTo(0, 0); // scroll to top
  //   };

  //   router.events.on("routeChangeComplete", handleRouteChange);

  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);
  return (
    <Fragment>
      <WebLayout>
        <Head>
          <title>IT Training Institute | ALO Educational Hub | Nagercoil</title>
    
        </Head>
        
        <Component {...pageProps} />
      </WebLayout>
    </Fragment>
  );
};

export default App;
