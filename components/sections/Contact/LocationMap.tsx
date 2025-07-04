"use client";

import styles from "./LocationMap.module.scss";

export default function LocationMap() {
  return (
    <section className={styles.locationSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Find Us</h2>
          <p className={styles.subtitle}>
            Located in the heart of Lebanon for easy access
          </p>
        </div>

        <div className={styles.mapContainer}>
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3310.881644904508!2d35.587745675710764!3d33.91844557320769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDU1JzA2LjQiTiAzNcKwMzUnMjUuMiJF!5e0!3m2!1sen!2slb!4v1751633162104!5m2!1sen!2slb"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Arrow Constructions Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
