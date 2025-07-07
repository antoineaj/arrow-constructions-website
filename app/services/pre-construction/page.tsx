import React from "react";
import ServiceHero from "../../../components/sections/Services/ServiceHero";

import {
  FaProjectDiagram,
  FaFileInvoiceDollar,
  FaDraftingCompass,
  FaBalanceScale,
  FaCalculator,
} from "react-icons/fa"; // Import icons here for passing as props
import ServiceOverview from "../../../components/sections/Services/ServiceOverview";
import ServiceDisplay from "../../../components/sections/Services/ServiceDisplay";
import Breadcrumb from "../../../components/common/Breadcrumb";

export default function PreConstructionService() {
  const serviceBenefits = [
    { text: "Accurate cost estimation" },
    { text: "Improved project coordination" },
    { text: "Reduced design conflicts" },
    { text: "Early risk identification" },
    { text: "Faster project delivery" },
  ];

  const highlightCardsData = [
    {
      icon: FaProjectDiagram,
      title: "MEP System Planning",
      description:
        "Strategic design coordination to ensure seamless system integration before construction begins.",
    },
    {
      icon: FaFileInvoiceDollar,
      title: "Cost Estimation & Budgeting",
      description:
        "Detailed forecasting to keep your project financially aligned from day one.",
    },
  ];

  const preConstructionServices = [
    {
      icon: FaDraftingCompass,
      title: "Design Coordination",
      description:
        "Seamless alignment of MEP systems with architectural and structural designs to eliminate conflicts and boost efficiency during construction.",
      features: [
        "3D modeling with clash detection",
        "BIM-integrated collaboration",
        "System integration strategies",
        "Constructability and feasibility reviews",
      ],
    },
    {
      icon: FaBalanceScale,
      title: "Value Engineering",
      description:
        "Strategic evaluation of systems and materials to optimize costs without compromising on quality or performance.",
      features: [
        "Alternative system analysis",
        "Material efficiency recommendations",
        "Cost vs. performance trade-offs",
        "Long-term value assessments",
      ],
    },
    {
      icon: FaCalculator,
      title: "Cost Estimate",
      description:
        "Detailed and transparent forecasting of project costs, enabling better budgeting and planning from the early stages.",
      features: [
        "Accurate MEP quantity take-offs",
        "Market-based unit pricing",
        "Labor and material cost modeling",
        "Contingency and risk allowances",
      ],
    },
  ];

  return (
    <>
      <Breadcrumb serviceName="Pre-construction" />
      <ServiceHero
        title="Pre-Construction"
        description="Plan with precision. Our Pre-Construction services lay the foundation for successful MEP projects by integrating technical expertise with strategic planning and cost control."
        imageSrc="/assets/images/preConstructionService.jpg"
      />
      <ServiceOverview
        overviewTitle="Service Overview" // Can be changed
        mainDescriptionParagraph1="Our Pre-Construction services are designed to streamline the planning phase of your project by offering detailed analysis, cost estimation, and system integration planning. We work closely with architects, engineers, and stakeholders to identify potential challenges early and develop efficient solutions before construction begins."
        mainDescriptionParagraph2="From value engineering and design-assist support to constructability reviews and scheduling, we ensure your MEP systems are optimized from day one. Our proactive approach helps minimize delays, reduce change orders, and keep your project within budget."
        benefitsTitle="Service Benefits" // Can be changed
        benefits={serviceBenefits}
        highlightCards={highlightCardsData}
      />
      <ServiceDisplay
        sectionTitle="Pre-Construction Services"
        services={preConstructionServices}
      />
    </>
  );
}
