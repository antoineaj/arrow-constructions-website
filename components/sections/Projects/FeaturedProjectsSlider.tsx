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
  dateCompleted: string;
  isOngoing?: boolean;
}

interface FeaturedProjectsSliderProps {
  projects: Project[];
}

export default function FeaturedProjectsSlider({
  projects,
}: FeaturedProjectsSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Filter for featured projects (recent ones and ongoing projects)
  const featuredProjects = projects.filter(
    (project) => project.isOngoing || project.dateCompleted === "2024"
  );

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || featuredProjects.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredProjects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Touch handlers for swipe functionality
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && featuredProjects.length > 1) {
      nextSlide();
    }
    if (isRightSwipe && featuredProjects.length > 1) {
      prevSlide();
    }
  };

  // Mouse handlers for desktop swipe-like functionality
  const onMouseDown = (e: React.MouseEvent) => {
    setTouchEnd(null);
    setTouchStart(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (touchStart === null) return;
    setTouchEnd(e.clientX);
  };

  const onMouseUp = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && featuredProjects.length > 1) {
      nextSlide();
    }
    if (isRightSwipe && featuredProjects.length > 1) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

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
            Showcasing our most recent and ongoing projects
          </p>
        </div>

        <div
          className={styles.sliderContainer}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => {
            setIsAutoPlaying(true);
            onMouseUp();
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
        >
          <div className={styles.slider}>
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`${styles.slide} ${
                  index === currentSlide ? styles.active : ""
                }`}
              >
                <div className={styles.slideContent}>
                  <div className={styles.imageSection}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className={styles.projectImage}
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
                      <span className={styles.statusTag}>
                        {project.isOngoing ? "On Going" : "Completed"}
                      </span>
                    </div>
                  </div>
                  <div className={styles.textSection}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDescription}>
                      {project.description}
                    </p>
                    <div className={styles.projectDetails}>
                      <div className={styles.location}>
                        <svg
                          width="16"
                          height="16"
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
                      <div className={styles.date}>
                        {project.isOngoing
                          ? "In Progress"
                          : `Completed ${project.dateCompleted}`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          {featuredProjects.length > 1 && (
            <div className={styles.dotsContainer}>
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${
                    index === currentSlide ? styles.activeDot : ""
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
