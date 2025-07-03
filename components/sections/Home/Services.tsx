// components/home/Services.tsx

"use client";

import styles from "./Services.module.scss";
import ServiceCard from "./ServiceCard";

import { FaBolt } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoIosWater } from "react-icons/io";
import { FaWrench } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { FaRobot } from "react-icons/fa";

const services = [
  {
    title: "Mechanical Systems",
    description:
      "HVAC design, installation, and maintenance for optimal climate control and energy efficiency.",
    bulletPoints: [
      "HVAC Design and Installation",
      "Ventilation Systems",
      "Energy Management",
    ],
    imageSrc: "/assets/images/mechanicalService.png",
    imageAlt: "Mechanical Systems",
    icon: FaGear,
    color: "#2563EB",
  },
  {
    title: "Electrical Systems",
    description:
      "Complete electrical solutions from power distribution to lighting and automation systems.",
    bulletPoints: [
      "Power Distribution",
      "Lighting Design",
      "Building Automation",
    ],
    imageSrc: "/assets/images/electricalService.png",
    imageAlt: "Electrical Systems",
    icon: FaBolt,
    color: "#CA8A04",
  },
  {
    title: "Plumbing Systems",
    description:
      "Comprehensive plumbing solutions including water supply, drainage, and fire protection systems.",
    bulletPoints: [
      "Water Supply Systems",
      "Drainage Solutions",
      "Fire Protection",
    ],
    imageSrc: "/assets/images/plumbingService.png",
    imageAlt: "Plumbing Systems",
    icon: IoIosWater,
    color: "#0891B2",
  },
  {
    title: "Maintenance Services",
    description:
      "Preventive and corrective maintenance to ensure optimal performance of all MEP systems.",
    bulletPoints: [
      "Preventive Maintenance",
      "Emergency Repairs",
      "System Upgrades",
    ],
    imageSrc: "/assets/images/maintenanceService.png",
    imageAlt: "Maintenance Services",
    icon: FaWrench,
    color: "#16A34A",
  },
  {
    title: "Design Consulting",
    description:
      "Expert consultation for MEP system design, optimization, and compliance with building codes.",
    bulletPoints: ["System Design", "Code Compliance", "Energy Audits"],
    imageSrc: "/assets/images/designConsultingService.png",
    imageAlt: "Design Consulting",
    icon: BsGraphUp,
    color: "#9333EA",
  },
  {
    title: "Smart Building Solutions",
    description:
      "Advanced automation and control systems for intelligent building management and monitoring.",
    bulletPoints: ["BMS Integration", "IoT Solutions", "Remote Monitoring"],
    imageSrc: "/assets/images/smartBuildingSolutionsService.png",
    imageAlt: "Smart Building Solutions",
    icon: FaRobot,
    color: "#DC2626",
  },
];

export default function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.text}>
        <h2>Our Services</h2>
        <p>
          Comprehensive MEP solutions tailored to meet your project requirements
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            bulletPoints={service.bulletPoints}
            imageSrc={service.imageSrc}
            imageAlt={service.imageAlt}
            icon={service.icon}
            iconColor={service.color}
          />
        ))}
      </div>
    </section>
  );
}
