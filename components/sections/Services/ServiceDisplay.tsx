// components/ServiceDisplay/ServiceDisplay.tsx
import React from "react";
import styles from "./ServiceDisplay.module.scss";
import { IconType } from "react-icons";
import ServiceCard from "./ServiceCard";

interface ServiceItem {
  icon: IconType;
  title: string;
  description: string;
  features: string[];
}

interface ServiceDisplayProps {
  sectionTitle: string;
  services: ServiceItem[];
}

const ServiceDisplay: React.FC<ServiceDisplayProps> = ({
  sectionTitle,
  services,
}) => {
  return (
    <section className={styles.ServiceDisplay}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>{sectionTitle}</h2>
        <div className={styles.cardsGrid}>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDisplay;
