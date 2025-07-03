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
      "HVAC design, installation, and maintenance for optimal climate control and energy efficiency. \n • HVAC Design and Installation\n • Ventilation Systems\n • Energy Management",
    imageSrc: "/assets/images/mechanicalService.png",
    imageAlt: "Mechanical Systems",
    icon: FaGear,
  },
  {
    title: "Electrical Systems",
    description:
      "Complete electrical solutions from power distribution to lighting and automation systems. \n • Power Destribution\n • Lighting Design\n • Building Automation",
    imageSrc: "/assets/images/electricalService.png",
    imageAlt: "Electrical Systems",
    icon: FaBolt,
  },
  {
    title: "Plumbing Systems",
    description:
      "Comprehensive plumbing solutions including water supply, drainage, and fire protection systems\n • Water Supply Systems\n • Drainage Solutions\n • Fire Protection",
    imageSrc: "/assets/images/plumbingService.png",
    imageAlt: "Plumbing Systems",
    icon: IoIosWater,
  },
  {
    title: "Maintenance Services",
    description:
      "Preventive and corrective maintenance to ensure optimal performance of all MEP systems.\n • Preventive Maintenance\n • Emergency Repairs\n • System Upgrades",
    imageSrc: "/assets/images/maintenanceService.png",
    imageAlt: "Maintenance Services",
    icon: FaWrench,
  },
  {
    title: "Design Consulting",
    description:
      "Expert consultation for MEP system design, optimization, and compliance with building codes.\n • System Design\n • Code Compliance\n • Energy Audits",
    imageSrc: "/assets/images/designConsultingService.png",
    imageAlt: "MDesign Consulting",
    icon: BsGraphUp,
  },
  {
    title: "Smart Building Solutions",
    description:
      "Advanced automation and control systems for intelligent building management and monitoring.\n • BMS Integration\n • IoT Solutions\n • Remote Monitoring",
    imageSrc: "/assets/images/smartBuildingSolutionsService.png",
    imageAlt: "Smart Building Solution",
    icon: FaRobot,
  },
];

export default function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.text}>
        <h2>Our Services</h2>
        <p>
          We deliver full-scale MEP solutions across various disciplines to meet
          your technical and operational needs.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imageSrc={service.imageSrc}
            imageAlt={service.imageAlt}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
}
