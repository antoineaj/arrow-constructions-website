import React from "react";
import styles from "./OurValuesSection.module.scss";

// Import necessary icons from react-icons/fa
import { FaMedal, FaHandshake, FaLightbulb, FaShieldAlt } from "react-icons/fa";
import ValueCard from "./ValueCard";

const OurValuesSection: React.FC = () => {
  // Approximate HEX colors from the image
  const qualityColor = "#DFF0FF"; // Light blue
  const integrityColor = "#E6FFEB"; // Light green
  const innovationColor = "#F2E6FF"; // Light purple
  const safetyColor = "#FFEBED"; // Light red/pink

  return (
    <section className={styles.ourValuesSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Values</h2>
        <p className={styles.sectionSubtitle}>
          The principles that guide everything we do
        </p>
        <div className={styles.cardsGrid}>
          <ValueCard
            icon={FaMedal}
            title="Quality"
            description="We never compromise on quality, ensuring every installation meets the highest industry standards."
            iconBackgroundColor={qualityColor}
          />
          <ValueCard
            icon={FaHandshake}
            title="Integrity"
            description="Honest communication and transparent practices build the foundation of our client relationships."
            iconBackgroundColor={integrityColor}
          />
          <ValueCard
            icon={FaLightbulb}
            title="Innovation"
            description="We embrace new technologies and methods to deliver more efficient and sustainable solutions."
            iconBackgroundColor={innovationColor}
          />
          <ValueCard
            icon={FaShieldAlt}
            title="Safety"
            description="The safety of our team and clients is paramount in every project we undertake."
            iconBackgroundColor={safetyColor}
          />
        </div>
      </div>
    </section>
  );
};

export default OurValuesSection;
