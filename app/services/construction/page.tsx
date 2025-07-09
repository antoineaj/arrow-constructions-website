import {
  FaHardHat,
  FaClipboardCheck,
  FaFileContract,
  FaExchangeAlt,
  FaClock,
} from "react-icons/fa";
import ServiceOverview from "../../../components/sections/Services/ServiceOverview";
import ServiceDisplay from "../../../components/sections/Services/ServiceDisplay";
import ServiceHero from "../../../components/sections/Services/ServiceHero";
import Breadcrumb from "../../../components/common/Breadcrumb";

export default function ConstructionService() {
  const serviceBenefits = [
    { text: "Accurate execution of design plans" },
    { text: "Seamless contractor coordination" },
    { text: "Real-time progress tracking" },
    { text: "Reduced on-site conflicts" },
    { text: "On-budget and on-schedule delivery" },
  ];

  const highlightCardsData = [
    {
      icon: FaHardHat,
      title: "On-Site Supervision",
      description:
        "Daily construction oversight to ensure safety, quality, and compliance with specifications.",
    },
    {
      icon: FaClipboardCheck,
      title: "Quality Control",
      description:
        "Rigorous inspection and testing procedures to guarantee MEP system performance and integrity.",
    },
  ];

  const constructionServices = [
    {
      icon: FaFileContract,
      title: "Tender Review & Coordination",
      description:
        "Evaluation of contractor bids and alignment of scopes to ensure compliance, competitiveness, and clarity during construction.",
      features: [
        "Scope and spec verification",
        "Bid comparisons and clarifications",
        "Technical and commercial alignment",
        "Contractor coordination support",
      ],
    },
    {
      icon: FaExchangeAlt,
      title: "Variation Order / Evaluation & Analysis",
      description:
        "Thorough analysis and assessment of change orders to minimize cost impacts and maintain schedule integrity.",
      features: [
        "Cost and scope impact analysis",
        "Justification and documentation review",
        "Negotiation support",
        "Budget reconciliation",
      ],
    },
    {
      icon: FaClock,
      title: "Schedule & Execution",
      description:
        "Comprehensive timeline management and field execution tracking to ensure on-time delivery and performance benchmarks.",
      features: [
        "Construction schedule integration",
        "Milestone and progress tracking",
        "On-site issue resolution",
        "Daily/weekly reporting",
      ],
    },
  ];

  return (
    <>
      <Breadcrumb serviceName="Construction" />
      <ServiceHero
        title="Construction"
        description="From bid evaluation to on-site execution, we manage every phase of construction with precision, accountability, and technical excellence."
        imageSrc="/assets/images/constructionService.png"
      />

      <ServiceOverview
        overviewTitle="Service Overview"
        mainDescriptionParagraph1="Our construction services ensure the smooth execution of MEP systems by providing expert coordination, real-time monitoring, and proactive issue resolution. We manage the process from tender phase through on-site implementation."
        mainDescriptionParagraph2="With a focus on quality assurance and project control, our team collaborates closely with all stakeholders to deliver systems that meet design intent, regulatory standards, and timeline objectives."
        benefitsTitle="Service Benefits" // Can be changed
        benefits={serviceBenefits}
        highlightCards={highlightCardsData}
      />

      <ServiceDisplay
        sectionTitle="Construction Services"
        services={constructionServices}
      />
    </>
  );
}
