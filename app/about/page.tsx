import React from "react";
import AboutHero from "../../components/sections/About/AboutHero";
import WhoWeAreSection from "../../components/sections/About/WhoWeAreSection";
import VisionMissionSection from "../../components/sections/About/VisionMissionSection";
import OurValuesSection from "../../components/sections/About/OurValuesSection";
import Metrics from "../../components/common/Metrics";

export default function About() {
  return (
    <>
      <AboutHero />
      <WhoWeAreSection />
      <VisionMissionSection />
      <OurValuesSection />
      <Metrics />
    </>
  );
}
