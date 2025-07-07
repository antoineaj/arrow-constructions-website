import React from "react";
import styles from "./ServiceCard.module.scss";
import { IconType } from "react-icons"; // Recommended for type-checking icons

interface ServiceCardProps {
  icon: IconType; // This type allows us to pass a react-icons component directly
  title: string;
  description: string;
  features: string[]; // Array of strings for the bullet points
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon, // Destructure with a capital 'I' for React component naming
  title,
  description,
  features,
}) => {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.iconWrapper}>
        <Icon className={styles.cardIcon} />
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <ul className={styles.featuresList}>
        {features.map((feature, index) => (
          <li key={index} className={styles.featureItem}>
            {/* The image uses a simple bullet point or a small dash, not a checkmark here */}
            {/* You could add a specific icon here if desired, e.g., '• ' or '– ' */}
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
