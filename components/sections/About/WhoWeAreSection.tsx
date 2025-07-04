import React from "react";
import styles from "./WhoWeAreSection.module.scss";
export default function WhoWeAreSection() {
  return (
    <section className={styles.whoWeAreSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Who We Are</h2>
        <p className={styles.paragraph}>
          Founded in 2012 in Lebanon, Arrow Constructions began as a dedicated
          electrical contracting company. By 2017, we expanded our capabilities
          to include mechanical contracting, broadening our in-house service
          offerings. Guided by the vision of our founding leaders and supported
          by a team of seasoned professionals, Arrow Constructions has
          experienced steady growth marked by a continual rise in quality
          standards. We are committed to fostering a safe and productive work
          environment, optimizing our operations, and embracing a culture of
          continuous improvement to enhance both efficiency and profitability.
        </p>
        <p className={styles.paragraph}>
          Today, Arrow Constructions continues its gradual expansion, with a
          focus on offering a wider range of integrated in-house services. Our
          goal is to deliver comprehensive, turn-key construction solutions
          tailored to meet our clients' evolving needs. Above all, we remain
          dedicated to upholding the highest standards of professionalism and
          cultivating strong, lasting client relationships in every project we
          undertake.
        </p>
      </div>
    </section>
  );
}
