"use client";

import { useState } from "react";
import styles from "./OpenPositions.module.scss";
import Link from "next/link";

interface Position {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

export default function OpenPositions() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const positions: Position[] = [
    // {
    //   title: "MEP Engineer",
    //   department: "Engineering",
    //   location: "Beirut, Lebanon",
    //   type: "Full-time",
    //   description:
    //     "Design and oversee mechanical, electrical, and plumbing systems for commercial and residential projects.",
    // },
    // {
    //   title: "Project Manager",
    //   department: "Project Management",
    //   location: "Beirut, Lebanon",
    //   type: "Full-time",
    //   description:
    //     "Lead construction projects from planning to completion, ensuring quality, timeline, and budget adherence.",
    // },
    // {
    //   title: "Electrical Technician",
    //   department: "Technical",
    //   location: "Beirut, Lebanon",
    //   type: "Full-time",
    //   description:
    //     "Install, maintain, and repair electrical systems in commercial and industrial buildings.",
    // },
    // {
    //   title: "HVAC Specialist",
    //   department: "Technical",
    //   location: "Beirut, Lebanon",
    //   type: "Full-time",
    //   description:
    //     "Install and maintain heating, ventilation, and air conditioning systems for various projects.",
    // },
    // {
    //   title: "Site Supervisor",
    //   department: "Operations",
    //   location: "Beirut, Lebanon",
    //   type: "Full-time",
    //   description:
    //     "Supervise on-site construction activities, ensuring safety protocols and quality standards are met.",
    // },
    // {
    //   title: "CAD Technician",
    //   department: "Engineering",
    //   location: "Beirut, Lebanon",
    //   type: "Full-time",
    //   description:
    //     "Create detailed technical drawings and plans using AutoCAD and other design software.",
    // },
  ];

  const departments = [
    "All",
    ...new Set(positions.map((pos) => pos.department)),
  ];

  const filteredPositions =
    selectedDepartment === "All"
      ? positions
      : positions.filter((pos) => pos.department === selectedDepartment);

  return (
    <section className={styles.openPositions}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Open Positions</h2>
        <p className={styles.sectionSubtitle}>
          Explore current opportunities and find your perfect role
        </p>

        <div className={styles.filterSection}>
          <span className={styles.filterLabel}>Filter by Department:</span>
          <div className={styles.filterButtons}>
            {departments.map((dept) => (
              <button
                key={dept}
                className={`${styles.filterButton} ${
                  selectedDepartment === dept ? styles.active : ""
                }`}
                onClick={() => setSelectedDepartment(dept)}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {filteredPositions.length > 0 ? (
          <div className={styles.positionsGrid}>
            {filteredPositions.map((position, index) => (
              <div key={index} className={styles.positionCard}>
                <div className={styles.positionHeader}>
                  <h3 className={styles.positionTitle}>{position.title}</h3>
                  <span className={styles.positionType}>{position.type}</span>
                </div>
                <div className={styles.positionMeta}>
                  <span className={styles.metaItem}>
                    <span className={styles.metaIcon}>🏢</span>
                    {position.department}
                  </span>
                  <span className={styles.metaItem}>
                    <span className={styles.metaIcon}>📍</span>
                    {position.location}
                  </span>
                </div>
                <p className={styles.positionDescription}>
                  {position.description}
                </p>
                <Link href="/contact" className={styles.applyButton}>
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.noPositions}>
            <p>No positions available in this department at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
}
