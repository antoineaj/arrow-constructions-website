// components/ProductCard/ProductCard.tsx
import Image from "next/image";
import styles from "./ServiceCard.module.scss";
import { IconType } from "react-icons";

interface ServiceCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  icon?: IconType; // Optional icon prop
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  icon: Icon, // Rename to Icon for component usage
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
          <div className={styles.iconOverlay}>
            <Icon />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
