// components/layout/Header.tsx
"use client";

import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <Image
            src="/assets/images/Logo AC.jpeg"
            alt="Company Logo"
            width={200}
            height={80}
          />
        </div>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}
