// app/page.tsx

"use client";

import Metrics from "../components/common/Metrics";
import Banner from "../components/sections/Home/Banner";
import Hero from "../components/sections/Home/Hero";
import Services from "../components/sections/Home/Services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Banner />
      <Services />
      <Metrics />
    </>
  );
}
