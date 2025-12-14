

import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import CoreSection from "@/components/CoreSection/CoreSection";
import Gallery from "@/components/Gallery/Gallery";
import HeroSection from "@/components/HeroSection/HeroSection";
import HeroVideo from "@/components/HeroVideo/HeroVideo";
import Map from "@/components/Map/Map";
import ProjectsCompleted from "@/components/ProjectsCompleted/ProjectsCompleted";
import Service from "@/components/Service/Service";
import StatsCounter from "@/components/StatsCounter/StatsCounter";
import Head from "next/head";

export default function Home() {


  return (

    <>
       <Head>
        {/* Basic SEO */}
        <title>SunBless Solar Systems</title>
        <meta name="description" content="SunBless Solar Systems offers high-quality solar panels, solar water heaters, and solar pumps in Pune. Save energy, reduce bills, and go green today!" />
        <meta name="keywords" content="solar panels Pune, solar water heater Pune, solar pump Pune, solar energy solutions Pune, SunBless Solar" />
        <meta name="author" content="SunBless Solar Systems" />

         {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <HeroVideo/> */}
  <HeroSection/>
        <About />
        <CoreSection/>

        <Service/>

                <StatsCounter/>


        {/* <Gallery/> */}

        <ProjectsCompleted/>


        <Contact />

        <Map/>



      </main>

    </>

  );
}
