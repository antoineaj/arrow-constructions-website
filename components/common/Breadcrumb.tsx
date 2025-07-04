"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Breadcrumb.module.scss";

interface BreadcrumbProps {
  serviceName?: string;
}

export default function Breadcrumb({ serviceName }: BreadcrumbProps) {
  const pathname = usePathname();
  
  // Map of service paths to display names
  const serviceNames = {
    "/services/construction": "Construction",
    "/services/maintenance-facilityManagement": "Maintenance & Facility Management",
    "/services/pre-construction": "Pre-construction",
  };

  // Determine the current service name
  const currentServiceName = serviceName || serviceNames[pathname as keyof typeof serviceNames];

  // Only show breadcrumb on service pages
  if (!pathname.startsWith("/services/") || !currentServiceName) {
    return null;
  }

  return (
    <div className={styles.breadcrumb}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <span className={styles.separator}>›</span>
          <Link href="/services" className={styles.link}>
            Services
          </Link>
          <span className={styles.separator}>›</span>
          <span className={styles.current}>{currentServiceName}</span>
        </nav>
      </div>
    </div>
  );
}
