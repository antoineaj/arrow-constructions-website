"use client";

import styles from "./Banner.module.scss";
import Image from "next/image";

const clients = [
  { src: "/assets/images/sgbl.png", alt: "SGBL" },
  { src: "/assets/images/bankaudi.png", alt: "Bank Audi" },
  { src: "/assets/images/converse.png", alt: "Converse" },
  { src: "/assets/images/tinol.png", alt: "Tinol" },
  { src: "/assets/images/bankaudi.png", alt: "Bank Audi" },
  { src: "/assets/images/sgbl.png", alt: "SGBL" },
  { src: "/assets/images/tinol.png", alt: "Tinol" },
  { src: "/assets/images/zaarour.png", alt: "Zaarour Club" },
  { src: "/assets/images/zaarour.png", alt: "Zaarour Club" },
  { src: "/assets/images/converse.png", alt: "Converse" },
  { src: "/assets/images/zaarour.png", alt: "Zaarour Club" },
];

export default function Banner() {
  // Duplicate the list for seamless looping
  const logos = [...clients, ...clients];

  return (
    <section className={styles.banner}>
      <div className={styles.text}>
        <h2>Trusted by Industry Leaders</h2>
        <p>We've successfully completed projects for leading companies</p>
      </div>

      <div className={styles.slider}>
        <div className={styles.track}>
          {logos.map((client, index) => (
            <div key={index} className={styles.logo}>
              <Image
                src={client.src}
                alt={client.alt}
                width={120}
                height={120}
                priority={index < 5}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
