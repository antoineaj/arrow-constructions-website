import React from "react";
import Link from "next/link";
import styles from "./CallToActionSection.module.scss";
import { FaPhoneAlt, FaDownload } from "react-icons/fa"; // Icons for the buttons

const CallToActionSection: React.FC = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2 className={styles.ctaTitle}>Ready to Optimize Your Facility?</h2>
        <p className={styles.ctaDescription}>
          Contact our maintenance experts to develop a customized solution for
          your facility&apos;s needs.
        </p>
        <div className={styles.buttonsContainer}>
          <Link href="/contact" className={styles.buttonPrimary}>
            <FaPhoneAlt className={styles.buttonIcon} />
            Schedule Consultation
          </Link>
          <Link
            href="/assets/brochure.pdf"
            download
            className={styles.buttonSecondary}
          >
            <FaDownload className={styles.buttonIcon} />
            Download Brochure
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
