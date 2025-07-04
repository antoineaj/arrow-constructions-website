import styles from "./ContactHero.module.scss";

export default function ContactHero() {
  return (
    <section className={styles.contactHero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>
          Ready to start your next project? Get in touch with our team of MEP
          experts today.
        </p>
      </div>
    </section>
  );
}
