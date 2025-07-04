import styles from "./AboutHero.module.scss";

export default function AboutHero() {
  return (
    <section className={styles.aboutHero}>
      <div className={styles.container}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.subtitle}>
          Building excellence through innovative MEP solutions and unwavering
          commitment to quality.
        </p>
      </div>
    </section>
  );
}
