"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectsDisplay.module.scss";

interface Project {
  id: string;
  industry: string;
  title: string;
  image: string;
  description: string;
  location: string;
  dateCompleted: string;
  isOngoing?: boolean;
}

interface ProjectsDisplayProps {
  activeFilter: string;
  projects: Project[];
  loading?: boolean;
}

export default function ProjectsDisplay({
  activeFilter,
  projects,
  loading = false,
}: ProjectsDisplayProps) {
  const [visibleProjects, setVisibleProjects] = useState(12); // Load 12 initially

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.industry.toLowerCase().replace(/\s+/g, "-") === activeFilter;
  });

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 12);
  };

  if (loading) {
    return (
      <section className={styles.projectsDisplay}>
        <div className={styles.container}>
          <div className={styles.loadingState}>
            <p>Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.projectsDisplay}>
      <div className={styles.container}>
        {filteredProjects.length === 0 ? (
          <div className={styles.noProjects}>
            <p>No projects found for the selected category.</p>
          </div>
        ) : (
          <>
            <div className={styles.projectsGrid}>
              {displayedProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  industry={project.industry}
                  title={project.title}
                  image={project.image}
                  description={project.description}
                  location={project.location}
                  dateCompleted={project.dateCompleted}
                  isOngoing={project.isOngoing}
                  priority={index < 6} // Prioritize first 6 images for faster loading
                />
              ))}
            </div>
            {visibleProjects < filteredProjects.length && (
              <button onClick={loadMoreProjects} className={styles.loadMoreBtn}>
                Load More Projects ({filteredProjects.length - visibleProjects}{" "}
                remaining)
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
}
