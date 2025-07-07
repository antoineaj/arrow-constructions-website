// components/layout/Header.tsx
"use client";

import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const isServicesActive = () => {
    return serviceLinks.some((service) => pathname.startsWith(service.href));
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
          <Link
            href="/projects"
            className={isActive("/projects") ? styles.active : ""}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className={isActive("/about") ? styles.active : ""}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className={isActive("/contact") ? styles.active : ""}
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`${styles.hamburger} ${
              isMobileMenuOpen ? styles.hamburgerOpen : ""
            }`}
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div className={styles.mobileOverlay} onClick={closeMobileMenu}></div>
        )}

        {/* Mobile Navigation Panel */}
        <nav
          className={`${styles.mobileNav} ${
            isMobileMenuOpen ? styles.mobileNavOpen : ""
          }`}
        >
          <div className={styles.mobileNavHeader}>
            <Image
              src="/assets/images/Logo AC.jpeg"
              alt="Company Logo"
              width={150}
              height={60}
            />
          </div>
          <div className={styles.mobileNavContent}>
            <Link
              href="/"
              className={`${styles.mobileNavItem} ${
                isActive("/") ? styles.mobileNavItemActive : ""
              }`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <div className={styles.mobileServicesSection}>
              <span
                className={`${styles.mobileServicesTitle} ${
                  isServicesActive() ? styles.mobileNavItemActive : ""
                }`}
              >
                Services
              </span>
              <div className={styles.mobileServicesItems}>
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={`${styles.mobileNavSubItem} ${
                      isActive(service.href) ? styles.mobileNavItemActive : ""
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/projects"
              className={`${styles.mobileNavItem} ${
                isActive("/projects") ? styles.mobileNavItemActive : ""
              }`}
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className={`${styles.mobileNavItem} ${
                isActive("/about") ? styles.mobileNavItemActive : ""
              }`}
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={`${styles.mobileNavItem} ${
                isActive("/contact") ? styles.mobileNavItemActive : ""
              }`}
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
