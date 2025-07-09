import {
  FaStethoscope,
  FaWrench,
  FaCalendarCheck,
  FaTools,
  FaClipboardList,
} from "react-icons/fa";

import ServiceOverview from "../../../components/sections/Services/ServiceOverview";
import ServiceDisplay from "../../../components/sections/Services/ServiceDisplay";
import CallToActionSection from "../../../components/sections/Services/CallToActionSection";
import ServiceHero from "../../../components/sections/Services/ServiceHero";
import Breadcrumb from "../../../components/common/Breadcrumb";

export default function MaintenanceFacilityManagementService() {
  const serviceBenefits = [
    { text: "Reduced operational costs" },
    { text: "Extended equipment lifespan" },
    { text: "Improved energy efficiency" },
    { text: "Minimized downtime" },
    { text: "Compliance assurance" },
  ];

  const highlightCardsData = [
    {
      icon: FaTools,
      title: "Emergency Repairs",
      description: "24/7 emergency response for critical system failures",
    },
    {
      icon: FaClipboardList,
      title: "Asset Reporting",
      description: "Detailed reporting to track system health and performance",
    },
  ];

  const maintenanceFacilityManagementServices = [
    {
      icon: FaStethoscope,
      title: "Supervision / Inspection / Assessment",
      description:
        "Comprehensive oversight to evaluate system conditions, detect issues early, and maintain operational efficiency.",
      features: [
        "System audits and walkthroughs",
        "Performance assessments",
        "Regulatory compliance inspections",
        "Reporting and diagnostics",
      ],
    },
    {
      icon: FaWrench,
      title: "Corrective Maintenance",
      description:
        "Timely repairs and replacements to address equipment failures and restore functionality with minimal disruption.",
      features: [
        "Breakdown diagnosis and resolution",
        "Component repair and replacement",
        "Emergency service availability",
        "Service logs and tracking",
      ],
    },
    {
      icon: FaCalendarCheck,
      title: "Preventive Maintenance",
      description:
        "Scheduled maintenance programs designed to extend asset life and reduce the risk of unplanned outages.",
      features: [
        "Routine checks and servicing",
        "Lubrication, calibration, and testing",
        "Filter and part replacements",
        "Maintenance calendar planning",
      ],
    },
  ];

  return (
    <>
      <Breadcrumb serviceName="Maintenance & Facility Management" />
      <ServiceHero
        title="Maintenance & Facility Management"
        description="Proactive maintenance strategies and reliable service support to keep your MEP systems running at peak performance — minimizing downtime and maximizing longevity."
        imageSrc="/assets/images/maintenanceFacilityManagementService.png"
      />

      <ServiceOverview
        overviewTitle="Service Overview"
        mainDescriptionParagraph1="Our maintenance and facility management services ensure your MEP systems operate efficiently and reliably. From inspections to emergency repairs, we tailor solutions to your building's specific needs."
        mainDescriptionParagraph2="We implement preventive and corrective maintenance strategies that enhance system longevity, minimize operational disruptions, and ensure compliance with safety standards."
        benefitsTitle="Service Benefits"
        benefits={serviceBenefits}
        highlightCards={highlightCardsData}
      />

      <ServiceDisplay
        sectionTitle="Maintenance & Facility Management Services"
        services={maintenanceFacilityManagementServices}
      />

      <CallToActionSection />
    </>
  );
}
