import styles from "./ProjectsHero.module.scss";

export default function ProjectsHero() {
  return (
    <section className={styles.projectsHero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Our Projects</h1>
        <p className={styles.subtitle}>
          Discover our portfolio of successful MEP installations across various
          industries and building types.
        </p>
      </div>
    </section>
  );
}
