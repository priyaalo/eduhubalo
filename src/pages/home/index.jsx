import React, { Fragment } from "react";
import Head from "next/head";
import HomeHeroSection from "@/sections/homeSection/HomeHeroSection";
import HomeSecondSection from "@/sections/homeSection/secondsection/HomeSecondSection";
import HomeThirdSection from "@/sections/homeSection/thirdsection/HomeThirdSection";
import HomeFourthSection from "@/sections/homeSection/fourthsection/HomeFourthSection";
import HomeFifthSection from "@/sections/homeSection/fifthSection/HomeFifthSection";
import HomeSixthSection from "@/sections/homeSection/sixthsection/HomeSixthSection";
import HomeSeventhSection from "@/sections/homeSection/seventhsection/HomeSeventhSection";
import HomeFormSection from "@/sections/homeSection/formsection/HomeFormSection";

const Home = () => {
  return (
    <Fragment>
      {/* <Head>
        <title>Home - Boiler Code</title> */}
        {/* enter seo here */}
      {/* </Head> */}
      <HomeHeroSection />
      <HomeSecondSection/>
      <HomeThirdSection/>
      <HomeFourthSection/>
      <HomeFifthSection/>
      <HomeSixthSection/>
      <HomeSeventhSection/>
      <HomeFormSection />
    </Fragment>
  );
};

export default Home;
