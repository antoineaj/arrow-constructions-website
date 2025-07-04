// components/layout/Header.tsx
"use client";

import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const serviceLinks = [
    { href: "/services/pre-construction", label: "Pre-construction" },
    { href: "/services/construction", label: "Construction" },
    {
      href: "/services/maintenance-facilityManagement",
      label: "Maintenance & Facility Management",
    },
  ];

  const handleMouseEnter = () => {
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    setIsServicesOpen(false);
  };

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
          <div
            className={styles.dropdown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className={styles.dropdownButton}>
              Services
              <span
                className={`${styles.arrow} ${
                  isServicesOpen ? styles.arrowOpen : ""
                }`}
              >
                ▼
              </span>
            </span>
            <div
              className={`${styles.dropdownContent} ${
                isServicesOpen ? styles.dropdownOpen : ""
              }`}
            >
              {serviceLinks.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className={styles.dropdownItem}
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}
