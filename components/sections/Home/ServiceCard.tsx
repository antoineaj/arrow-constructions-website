// components/ProductCard/ProductCard.tsx
import Image from "next/image";
import styles from "./ServiceCard.module.scss";
import { IconType } from "react-icons";

interface ServiceCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  bulletPoints?: string[]; // Optional bullet points array
  icon?: IconType; // Optional icon prop
  iconColor?: string; // Optional icon background color
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  bulletPoints,
  icon: Icon, // Rename to Icon for component usage
  iconColor = "rgba(0, 0, 0, 0.7)", // Default background color
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          className={styles.cardImage}
          priority // Consider adding priority if this card is above the fold
        />
        {Icon && (
          <div
            className={styles.iconOverlay}
            style={{ backgroundColor: iconColor }}
          >
            <Icon />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        {bulletPoints && (
          <ul className={styles.bulletPoints}>
            {bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
