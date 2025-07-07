import React from "react";
import styles from "./VissionMissionCard.module.scss"; // Adjust the path as necessary
import { IconType } from "react-icons"; // For typing react-icons components

interface VisionMissionCardProps {
  icon: IconType; // The icon component from react-icons
  title: string;
  description: string;
  iconBorderColor: string; // To allow different border colors for the icon circle
}

const VisionMissionCard: React.FC<VisionMissionCardProps> = ({
  icon: Icon, // Destructure with a capital 'I' for React component rendering
  title,
  description,
  iconBorderColor,
}) => {
  return (
    <div className={styles.vmCard}>
      <div
        className={styles.iconWrapper}
        style={{ borderColor: iconBorderColor }}
      >
        <Icon className={styles.cardIcon} />
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default VisionMissionCard;
