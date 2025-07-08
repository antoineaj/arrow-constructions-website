import { Project, GoogleSheetsProject } from "../types/project";

// Map Google Sheets project types to industries used in the UI
const typeToIndustryMap: Record<string, string> = {
  // CSV industry types mapped to filter categories
  archives: "Miscellaneous",
  banking: "Banking",
  commercial: "Retail",
  diplomatic: "Miscellaneous",
  gym: "Miscellaneous",
  healthcare: "Miscellaneous",
  hotel: "Restaurants-Hotels",
  industrial: "Miscellaneous",
  "office spaces": "Offices",
  "office-spaces": "Offices", // Handle potential dash format
  photovoltaic: "Miscellaneous",
  residential: "Residential",
  restaurants: "Restaurants-Hotels",

  // Additional common variations for backward compatibility
  office: "Offices",
  offices: "Offices",
  restaurant: "Restaurants-Hotels",
  retail: "Retail",
  miscellaneous: "Miscellaneous",
};

// Default images for different project types
// Will implement a more dynamic image loading in the future
// For now, using a single image for all types
const defaultImages: Record<string, string> = {
  Residential: "/assets/images/constructionService.jpg",
  Banking: "/assets/images/constructionService.jpg",
  Offices: "/assets/images/constructionService.jpg",
  "Restaurants-Hotels": "/assets/images/constructionService.jpg",
  Retail: "/assets/images/constructionService.jpg",
  Miscellaneous: "/assets/images/constructionService.jpg",
};

// Generate descriptions based on project type
// Will implement a more dynamic description generation in the future
// For now, using static descriptions based on type
const generateDescription = (type: string, name: string): string => {
  const descriptions: Record<string, string> = {
    Residential:
      "Complete MEP installation with energy-efficient systems and modern amenities.",
    Banking:
      "Advanced security and climate control systems with state-of-the-art infrastructure.",
    Offices:
      "Smart building systems integration with comprehensive MEP solutions.",
    "Restaurants-Hotels":
      "Full hospitality MEP installation with advanced climate control and comfort systems.",
    Retail:
      "Comprehensive MEP systems designed for optimal retail operations and customer experience.",
    Miscellaneous:
      "Specialized MEP systems tailored to specific operational requirements.",
  };

  return (
    descriptions[type] ||
    "Professional MEP installation and construction services."
  );
};

export function transformGoogleSheetsData(
  sheetsData: GoogleSheetsProject[]
): Project[] {
  return sheetsData.map((sheetsProject) => {
    // Normalize the type to match our industry mapping
    // Handle spaces, case, and special characters
    const normalizedType = sheetsProject.type
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " "); // Normalize multiple spaces to single space

    // Try exact match first, then try with spaces replaced by dashes
    const industry =
      typeToIndustryMap[normalizedType] ||
      typeToIndustryMap[normalizedType.replace(/\s/g, "-")] ||
      "Miscellaneous";

    // Check if project is ongoing
    const isOngoing =
      sheetsProject.dateCompleted.toLowerCase().includes("ongoing") ||
      sheetsProject.dateCompleted.toLowerCase().includes("in progress") ||
      sheetsProject.dateCompleted.toLowerCase().includes("current");

    return {
      id: sheetsProject.id,
      industry,
      title: sheetsProject.name,
      image: defaultImages[industry],
      description: generateDescription(industry, sheetsProject.name),
      location: sheetsProject.location,
      dateCompleted: isOngoing ? "Ongoing" : sheetsProject.dateCompleted,
      isOngoing,
    };
  });
}
