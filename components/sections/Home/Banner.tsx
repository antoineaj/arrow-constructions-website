"use client";

import styles from "./Banner.module.scss";
import Image from "next/image";

const clients = [
  { src: "/assets/images/clients/bankaudi.png", alt: "Bank Audi" },
  { src: "/assets/images/clients/bclbank.png", alt: "BCL Bank" },
  { src: "/assets/images/clients/converse.png", alt: "Converse" },
  { src: "/assets/images/clients/ericsson.jpg", alt: "Ericsson" },
  { src: "/assets/images/clients/fnb.png", alt: "FNB" },
  {
    src: "/assets/images/clients/librarieantoine.png",
    alt: "Librarie Antoine",
  },
  { src: "/assets/images/clients/medtronic.jpg", alt: "Medtronic" },
  { src: "/assets/images/clients/sgbl.png", alt: "SGBL" },
  { src: "/assets/images/clients/tinol.jpg", alt: "Tinol" },
  { src: "/assets/images/clients/zaarourclub.png", alt: "Zaarour Club" },
  { src: "/assets/images/clients/zuhairmurad.png", alt: "Zuhair Murad" },
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
                priority={index < 10}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
