import styles from "./ServiceHero.module.scss";
import Image from "next/image";
import Link from "next/link";

interface ServiceHeroProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}

export default function ServiceHero({
  title,
  description,
  imageSrc,
  imageAlt = "Service image",
}: ServiceHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className={styles.buttons}>
            <Link href="/contact" className={styles.primaryBtn}>
              Get Service Quote
            </Link>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={400}
            className={styles.image}
            priority
          />
        </div>
      </div>
    </section>
  );
}
