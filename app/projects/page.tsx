"use client";

import { useState } from "react";
import ProjectsHero from "../../components/sections/Projects/ProjectsHero";
import ProjectsFilter from "../../components/sections/Projects/ProjectsFilter";
import ProjectsDisplay from "../../components/sections/Projects/ProjectsDisplay";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  // Sample project data - replace with your actual data
  const projects = [
    {
      id: "1",
      industry: "Residential",
      title: "Luxury Apartment Complex",
      image: "/assets/images/homeHeroImage.png", // Replace with actual project image
      description:
        "Complete MEP installation for 200-unit residential complex with energy-efficient systems.",
      location: "Downtown District",
      dateCompleted: "2024",
      isOngoing: false,
    },
    {
      id: "2",
      industry: "Banking",
      title: "Regional Bank Headquarters",
      image: "/assets/images/bankaudi.png", // Replace with actual project image
      description:
        "Advanced security and climate control systems for 15-story banking facility.",
      location: "Financial District",
      dateCompleted: "2024",
      isOngoing: false,
    },
    {
      id: "3",
      industry: "Offices",
      title: "Corporate Office Tower",
      image: "/assets/images/ericsson.jpg", // Replace with actual project image
      description:
        "Smart building systems integration for 25-floor corporate headquarters.",
      location: "Business Park",
      dateCompleted: "2023",
      isOngoing: false,
    },
    {
      id: "4",
      industry: "Retail",
      title: "Shopping Mall Complex",
      image: "/assets/images/zaarour.png", // Replace with actual project image
      description:
        "Comprehensive MEP systems for large-scale retail development.",
      location: "City Center",
      dateCompleted: "2024",
      isOngoing: false,
    },
    {
      id: "5",
      industry: "Restaurants-Hotels",
      title: "Luxury Hotel Resort",
      image: "/assets/images/tinol.png", // Replace with actual project image
      description:
        "Full hospitality MEP installation with advanced climate control.",
      location: "Tourist District",
      dateCompleted: "Ongoing",
      isOngoing: true,
    },
    {
      id: "6",
      industry: "Miscellaneous",
      title: "Industrial Facility",
      image: "/assets/images/sgbl.png", // Replace with actual project image
      description:
        "Specialized MEP systems for manufacturing and industrial operations.",
      location: "Industrial Zone",
      dateCompleted: "2023",
      isOngoing: false,
    },
  ];

  return (
    <main>
      <ProjectsHero />
      <ProjectsFilter
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />
      <ProjectsDisplay activeFilter={activeFilter} projects={projects} />
    </main>
  );
}
