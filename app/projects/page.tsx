"use client";

import { useState } from "react";
import ProjectsHero from "../../components/sections/Projects/ProjectsHero";
import FeaturedProjectsSlider from "../../components/sections/Projects/FeaturedProjectsSlider";
import ProjectsFilter from "../../components/sections/Projects/ProjectsFilter";
import ProjectsDisplay from "../../components/sections/Projects/ProjectsDisplay";
import { useProjects } from "../../hooks/useProjects";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const { projects, loading, error } = useProjects();

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  // Show loading state
  if (loading) {
    return (
      <main>
        <ProjectsHero />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "400px",
            fontSize: "18px",
            color: "#666",
          }}
        >
          Loading projects...
        </div>
      </main>
    );
  }

  // Show error state
  if (error) {
    return (
      <main>
        <ProjectsHero />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "400px",
            fontSize: "18px",
            color: "#dc3545",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <p>Error loading projects: {error}</p>
          <p style={{ fontSize: "14px", color: "#666", marginTop: "10px" }}>
            Please check your Google Sheets configuration and try again.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <ProjectsHero />
      <FeaturedProjectsSlider projects={projects} />
      <ProjectsFilter
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />
      <ProjectsDisplay
        activeFilter={activeFilter}
        projects={projects}
        loading={loading}
      />
    </main>
  );
}
