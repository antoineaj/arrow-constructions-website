"use client";

import styles from "./Hero.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Professional MEP Solutions for Modern Buildings</h1>
          <p>
            Expert mechanical, electrical, and plumbing services delivering
            innovative solutions for commercial and residential projects.
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
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
}
