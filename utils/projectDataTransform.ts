import { Project, GoogleSheetsProject } from "../types/project";

// Map Google Sheets project types to industries used in the UI
const typeToIndustryMap: Record<string, string> = {
  // CSV industry types mapped to filter categories
  archives: "Miscellaneous",
  banking: "Banking",
  commercial: "Commercial",
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
  miscellaneous: "Miscellaneous",
};

// Default images for different project types
// Will implement a more dynamic image loading in the future
// For now, using a single image for all types
const defaultImages: Record<string, string> = {
  Residential: "/assets/images/constructionService.png",
  Banking: "/assets/images/constructionService.png",
  Offices: "/assets/images/constructionService.png",
  "Restaurants-Hotels": "/assets/images/constructionService.png",
  Commercial: "/assets/images/constructionService.png",
  Miscellaneous: "/assets/images/constructionService.png",
};

// Specific images for projects based on title/name
// Add new entries here to assign specific images to projects
const projectSpecificImages: Record<string, string> = {
  // Format: "Project Title": "/path/to/image.png"
  "Coral Fuel Terminal": "/assets/images/featured/coralfuelterminal.png",
  "Liquigas Terminal": "/assets/images/featured/liquigaz.png",
  "Tinol Offices & Showroom": "/assets/images/featured/tinol.png",
  "Zuhair Murad HQ": "/assets/images/featured/zuhairmurad.png",
  "Porche Service Center": "/assets/images/featured/porscheservicecenter.png",
  "Karantina Hospital - Intesive Care Building for Children":
    "/assets/images/featured/karantinahospital.png",
  "Pierre Y Amigos": "/assets/images/featured/pierreyamigos.png",
  "Zaarour Club Lake": "/assets/images/featured/zaarourclublake.png",
  "Zaarour Club Ski Station":
    "/assets/images/featured/zaarourclubskistation.png",
  Converse: "/assets/images/featured/converse.png",
  "N-House": "/assets/images/featured/nhouse.jpg",
  "Armenian Catholicossate Phase 1 & 2": "/assets/images/featured/armenian.jpg",
  "Insula 13th & 14th Floor": "/assets/images/featured/insula.jpg",
  Ericsson: "/assets/images/featured/ericsson.jpg",
  "SGBL Bank": "/assets/images/featured/sgblhamra.jpg",
  "Depeche Mode": "/assets/images/featured/depechemode.jpg",
  "Le Grand Chalet": "/assets/images/featured/legrandchalet.jpg",
  "Les Dome De Surcosk 10th & 11th Floor":
    "/assets/images/featured/lesdomes.jpg",

  // Add more project-specific images here as needed
  // "Your Project Name": "/assets/images/projects/your-project.png",
};

// Function to get the appropriate image for a project
const getProjectImage = (projectTitle: string, industry: string): string => {
  // First, try to find a specific image for this project title
  const specificImage = projectSpecificImages[projectTitle];
  if (specificImage) {
    return specificImage;
  }

  // If no specific image found, use the default for the industry
  return defaultImages[industry];
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
    Commericial:
      "Comprehensive MEP systems designed for optimal commercial operations and customer experience.",
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
      image: getProjectImage(sheetsProject.name, industry),
      description: generateDescription(industry, sheetsProject.name),
      location: sheetsProject.location,
      dateCompleted: isOngoing ? "Ongoing" : sheetsProject.dateCompleted,
      isOngoing,
    };
  });
}
