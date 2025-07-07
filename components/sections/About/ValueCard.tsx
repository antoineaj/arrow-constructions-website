import React from "react";
import styles from "./ValueCard.module.scss";
import { IconType } from "react-icons"; // For typing react-icons components

interface ValueCardProps {
  icon: IconType; // The icon component from react-icons
  title: string;
  description: string;
  iconBackgroundColor: string; // To allow different background colors for the icon circle
}

const ValueCard: React.FC<ValueCardProps> = ({
  icon: Icon, // Destructure with a capital 'I' for React component rendering
  title,
  description,
  iconBackgroundColor,
}) => {
  return (
    <div className={styles.valueCard}>
      <div
        className={styles.iconWrapper}
        style={{ backgroundColor: iconBackgroundColor }}
      >
        <Icon className={styles.cardIcon} />
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default ValueCard;
