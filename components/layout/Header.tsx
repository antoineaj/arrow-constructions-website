// components/layout/Header.tsx
"use client";

import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

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

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const isServicesActive = () => {
    return serviceLinks.some(service => pathname.startsWith(service.href));
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
          <Link href="/" className={isActive("/") ? styles.active : ""}>
            Home
          </Link>
          <div
            className={styles.dropdown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span 
              className={`${styles.dropdownButton} ${
                isServicesActive() ? styles.active : ""
              }`}
            >
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
                  className={`${styles.dropdownItem} ${
                    isActive(service.href) ? styles.activeDropdownItem : ""
                  }`}
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/projects" className={isActive("/projects") ? styles.active : ""}>
            Projects
          </Link>
          <Link href="/about" className={isActive("/about") ? styles.active : ""}>
            About Us
          </Link>
          <Link href="/contact" className={isActive("/contact") ? styles.active : ""}>
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
