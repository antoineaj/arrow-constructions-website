import React from "react";
import styles from "./ServiceOverview.module.scss";
import { FaCheckCircle, FaCalendarAlt, FaTools } from "react-icons/fa"; // Icons for benefits and highlight cards

// Interface for a single benefit item
interface ServiceBenefit {
  text: string;
}

// Interface for a single highlight card
interface HighlightCard {
  icon: React.ElementType; // Using React.ElementType to pass component like FaCalendarAlt
  title: string;
  description: string;
}

// Main component props interface
interface ServiceOverviewProps {
  overviewTitle?: string;
  mainDescriptionParagraph1: string;
  mainDescriptionParagraph2: string;
  benefitsTitle?: string;
  benefits: ServiceBenefit[];
  highlightCards: HighlightCard[];
}

const ServiceOverview: React.FC<ServiceOverviewProps> = ({
  overviewTitle = "Service Overview", // Default title
  mainDescriptionParagraph1,
  mainDescriptionParagraph2,
  benefitsTitle = "Service Benefits", // Default title
  benefits,
  highlightCards,
}) => {
  return (
    <section className={styles.serviceOverview}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.mainContent}>
            <h2 className={styles.overviewTitle}>{overviewTitle}</h2>
            <p className={styles.descriptionParagraph}>
              {mainDescriptionParagraph1}
            </p>
            <p className={styles.descriptionParagraph}>
              {mainDescriptionParagraph2}
            </p>
          </div>

          <div className={styles.benefitsSection}>
            <h3 className={styles.benefitsTitle}>{benefitsTitle}</h3>
            <ul className={styles.benefitsList}>
              {benefits.map((benefit, index) => (
                <li key={index} className={styles.benefitItem}>
                  <FaCheckCircle className={styles.checkIcon} />
                  <span>{benefit.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.highlightCardsContainer}>
          {highlightCards.map((card, index) => (
            <div key={index} className={styles.highlightCard}>
              <div className={styles.highlightIconWrapper}>
                <card.icon className={styles.highlightIcon} />
              </div>
              <h4 className={styles.highlightTitle}>{card.title}</h4>
              <p className={styles.highlightDescription}>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
