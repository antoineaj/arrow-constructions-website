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
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.industry.toLowerCase().replace(/\s+/g, "-") === activeFilter;
  });

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
          <div className={styles.projectsGrid}>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                industry={project.industry}
                title={project.title}
                image={project.image}
                description={project.description}
                location={project.location}
                dateCompleted={project.dateCompleted}
                isOngoing={project.isOngoing}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
