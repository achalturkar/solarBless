

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
        <title>Brainhunt Ventures</title>
        <meta
          name="description"
          content="Established in 2003, BrainHunt is a trusted HR services provider based in Nagpur, offering comprehensive recruitment, payroll, and compliance solutions. With a dynamic team of HR professionals, recruiters, consultants, and trainers, we bring deep industry expertise to deliver tailored solutions for both IT and non-IT sectors."
        />
        <meta
          name="keywords"
          content="Brainhunt Ventures, recruitment company, global hiring, staffing agency, IT recruitment, contractual, freelancing, permanent job, HR consultancy, Non-IT recruitment"
        />
        <meta name="author" content="Brainhunt Ventures" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="nOsKnp2OQ6Tya7_prZ-Qp9yJhlcZbPlmwrxOJt-nhck" />
        <link rel="canonical" href="https://www.brainhuntventures.com/" />

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
