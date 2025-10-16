import styles from "./CareersHero.module.scss";

export default function CareersHero() {
  return (
    <section className={styles.careersHero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Join Our Team</h1>
        <p className={styles.subtitle}>
          Build your future with Arrow Constructions. We're looking for
          passionate professionals to join our team of innovators and
          excellence-driven experts.
        </p>
      </div>
    </section>
  );
}
