import React from "react";
import styles from "./VisionMissionSection.module.scss";

// Import icons from react-icons/fa
import { FaRegEye, FaBullseye } from "react-icons/fa"; // FaBullseye looks like a good match for the target/mission icon
import VisionMissionCard from "./VissionMissionCard";

const VisionMissionSection: React.FC = () => {
  return (
    <section className={styles.visionMissionSection}>
      <div className={styles.container}>
        <div className={styles.cardsGrid}>
          <VisionMissionCard
            icon={FaRegEye} // Icon for Vision
            title="Our Vision"
            description="To consistently exceed customer expectations through responsive, caring, and financially responsible service. We achieve facility excellence via innovative engineering solutions and collaborative expertise, delivering superior results through creative problem-solving and effective project management."
            iconBorderColor="#2a60f1" // Blue border color
          />
          <VisionMissionCard
            icon={FaBullseye} // Icon for Mission
            title="Our Mission"
            description="We uphold the highest standards of professional accountability and effective communication. Through sustainable development practices and value-added engineering solutions, we enhance facility performance and deliver lasting impact."
            iconBorderColor="#28a745" // Green border color
          />
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
