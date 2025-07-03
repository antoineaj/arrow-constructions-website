// components/home/Hero.tsx
"use client";

import styles from "./Hero.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Reliable MEP Solutions for Every Project</h1>
          <p>
            From planning to execution, we deliver high-quality Mechanical,
            Electrical, and Plumbing services tailored to your needs.
          </p>
          <div className={styles.buttons}>
            <Link href="/contact" className={styles.primaryBtn}>
              Get Quote
            </Link>
            <Link href="/projects" className={styles.secondaryBtn}>
              View Projects
            </Link>
          </div>
        </div>
        <div className={styles.image}>
          <Image
            src="/assets/images/homeHeroImage.png"
            alt="MEP Construction"
            width={500}
            height={400}
            priority
          />
        </div>
      </div>
    </section>
  );
}
