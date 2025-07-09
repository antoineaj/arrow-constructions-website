import Image from "next/image";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  industry: string;
  title: string;
  image: string;
  description: string;
  location: string;
  dateCompleted: string;
  isOngoing?: boolean;
  priority?: boolean; // Add priority prop for above-the-fold optimization
}

export default function ProjectCard({
  industry,
  title,
  image,
  description,
  location,
  dateCompleted,
  isOngoing = false,
  priority = false,
}: ProjectCardProps) {
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
      case "commercial":
        return "#fd7e14";
      case "miscellaneous":
        return "#6c757d";
      default:
        return "#448bf2";
    }
  };

  return (
    <div className={styles.projectCard}>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          className={styles.projectImage}
          priority={priority}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAQABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAECA//EACUQAAIBAwMDBQEAAAAAAAAAAAECEQADIQQSMWEFQVFxEyKBkfD/xAAVAQEBAAAAAAAAAAAAAAAAAAABA//EABkRAAMBAQEAAAAAAAAAAAAAAAABAhEhMf/aAAwDAQACEQMRAD8A2ltrTi7cZA4UkwSDgjsQZNLWONLGFmNsTwK9Jj2I4Pb41w1HqGnwYJHt5qvaGmkEltwfEAmT+K5YSEbVjSs8QNhBMdxWXa0T7u3ckgLjAGBRRVJMc1n/9k="
        />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <span
            className={styles.industryTag}
            style={{ backgroundColor: getIndustryColor(industry) }}
          >
            {industry}
          </span>
          <span className={styles.date}>
            {isOngoing ? "On Going" : dateCompleted}
          </span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
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
          {location}
        </div>
      </div>
    </div>
  );
}
