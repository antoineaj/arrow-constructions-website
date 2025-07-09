"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./FeaturedProjectsSlider.module.scss";

interface Project {
  id: string;
  industry: string;
  title: string;
  image: string;
  description: string;
  location: string;
  // dateCompleted: string;
  isOngoing?: boolean;
}

interface FeaturedProjectsSliderProps {
  projects: Project[];
}

// HARDCODED FEATURED PROJECTS CONFIGURATION
// Edit this section to change which projects are featured
const FEATURED_PROJECTS_CONFIG = {
  // Feature by project names (partial matches work)
  featuredProjectNames: [
    "Coral Fuel Terminal",
    "Liquigas Terminal",
    "RKAJ Villa",
    "Zuhair Murad HQ",
    "Porche Service Center",
    "Karantina Hospital - Intesive Care Building for Children",
    "Pierre Y Amigos",
    "First National Bank",
    "Depeche Mode",
    "Converse",
  ],

  // Maximum number of featured projects to show
  maxFeatured: 10,

  // Whether to prioritize ongoing projects
  prioritizeOngoing: true,
};

export default function FeaturedProjectsSlider({
  projects,
}: FeaturedProjectsSliderProps) {
  const [currentOffset, setCurrentOffset] = useState(0);

  // Filter projects based on hardcoded featured criteria
  const getFeaturedProjects = () => {
    const { featuredProjectNames, maxFeatured, prioritizeOngoing } =
      FEATURED_PROJECTS_CONFIG;

    let filtered: Project[] = [];

    // Filter by project names
    if (featuredProjectNames && featuredProjectNames.length > 0) {
      filtered = projects.filter((project) =>
        featuredProjectNames.some((name) =>
          project.title.toLowerCase().includes(name.toLowerCase())
        )
      );
    } else {
      // If no specific selection, take all projects
      filtered = [...projects];
    }

    // Prioritize ongoing projects if requested
    if (prioritizeOngoing) {
      filtered.sort((a, b) => {
        if (a.isOngoing && !b.isOngoing) return -1;
        if (!a.isOngoing && b.isOngoing) return 1;
        return 0;
      });
    }

    // Ensure we don't exceed maxFeatured
    return filtered.slice(0, maxFeatured);
  };

  const featuredProjects = getFeaturedProjects();

  // Duplicate projects for seamless infinite scroll
  const displayProjects = [...featuredProjects, ...featuredProjects];

  // Auto-scroll functionality
  useEffect(() => {
    if (featuredProjects.length === 0) return;

    const interval = setInterval(() => {
      setCurrentOffset((prevOffset) => {
        const cardWidth = 300; // Width of each card including gap
        const newOffset = prevOffset + 1;

        // Reset when we've scrolled through all original cards
        if (newOffset >= featuredProjects.length * cardWidth) {
          return 0;
        }

        return newOffset;
      });
    }, 30); // Smooth continuous movement

    return () => clearInterval(interval);
  }, [featuredProjects.length]);

  const getIndustryColor = (industry: string) => {
    switch (industry.toLowerCase()) {
      case "residential":
        return "#28a745";
      case "banking":
        return "#448bf2";
      case "offices":
        return "#9333ea";
      case "restaurants-hotels":
        return "#dc3545";
      case "retail":
        return "#fd7e14";
      case "miscellaneous":
        return "#6c757d";
      default:
        return "#448bf2";
    }
  };

  if (featuredProjects.length === 0) {
    return null;
  }

  return (
    <section className={styles.featuredSlider}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <p className={styles.sectionSubtitle}>
            Showcasing our recent work across various industries
          </p>
        </div>

        <div className={styles.sliderContainer}>
          <div
            className={styles.slider}
            style={{ transform: `translateX(-${currentOffset}px)` }}
          >
            {displayProjects.map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className={styles.projectCard}
              >
                <div className={styles.cardImage}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={600}
                    sizes="(max-width: 768px) 100vw, 80vw"
                    style={{ objectFit: "cover" }}
                    className={styles.image}
                    priority={index < 3} // Prioritize first 3 featured images
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAQABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAECA//EACUQAAIBAwMDBQEAAAAAAAAAAAECEQADIQQSMWEFQVFxEyKBkfD/xAAVAQEBAAAAAAAAAAAAAAAAAAABA//EABkRAAMBAQEAAAAAAAAAAAAAAAABAhEhMf/aAAwDAQACEQMRAD8A2ltrTi7cZA4UkwSDgjsQZNLWONLGFmNsTwK9Jj2I4Pb41w1HqGnwYJHt5qvaGmkEltwfEAmT+K5YSEbVjSs8QNhBMdxWXa0T7u3ckgLjAGBRRVJMc1n/9k="
                  />
                  <div className={styles.overlay}>
                    <span
                      className={styles.industryTag}
                      style={{
                        backgroundColor: getIndustryColor(project.industry),
                      }}
                    >
                      {project.industry}
                    </span>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <div className={styles.projectDetails}>
                    <div className={styles.location}>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={styles.locationIcon}
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {project.location}
                    </div>
                    {/* <div className={styles.date}>
                      {project.isOngoing ? "Ongoing" : project.dateCompleted}
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
