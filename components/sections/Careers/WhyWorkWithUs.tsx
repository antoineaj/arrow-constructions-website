import styles from "./WhyWorkWithUs.module.scss";

export default function WhyWorkWithUs() {
  const reasons = [
    {
      title: "Innovation & Excellence",
      description:
        "Work on cutting-edge MEP projects that push the boundaries of construction technology and sustainable building practices.",
    },
    {
      title: "Professional Growth",
      description:
        "We invest in our team's development through continuous training, certifications, and career advancement opportunities.",
    },
    {
      title: "Collaborative Culture",
      description:
        "Join a supportive team environment where your ideas are valued and collaboration drives our collective success.",
    },
    {
      title: "Impactful Projects",
      description:
        "Contribute to landmark projects that shape Lebanon's infrastructure and make a lasting impact on communities.",
    },
  ];

  return (
    <section className={styles.whyWorkWithUs}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Why Work With Us</h2>
        <p className={styles.sectionSubtitle}>
          At Arrow Constructions, we believe our people are our greatest asset.
          Here's what sets us apart:
        </p>
        <div className={styles.reasonsGrid}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.reasonCard}>
              <div className={styles.iconWrapper}>
                <div className={styles.icon}>{index + 1}</div>
              </div>
              <h3 className={styles.reasonTitle}>{reason.title}</h3>
              <p className={styles.reasonDescription}>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
