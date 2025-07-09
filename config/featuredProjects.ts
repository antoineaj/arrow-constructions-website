// Featured Projects Configuration
// Update this file to control which projects appear in the featured slider

export interface FeaturedProjectConfig {
  // Method 1: Specify exact project names (partial matches work)
  featuredProjectNames?: string[];

  // Method 2: Specify project IDs
  featuredProjectIds?: string[];

  // Method 3: Filter by industry types
  featuredIndustries?: string[];

  // Maximum number of projects to show
  maxFeatured?: number;

  // Prioritize ongoing projects
  prioritizeOngoing?: boolean;
}

// Default configuration - modify this to change featured projects
export const featuredProjectsConfig: FeaturedProjectConfig = {
  // Option 1: Feature specific projects by name
  featuredProjectNames: [
    "Luxury Apartment Complex",
    "Regional Bank Headquarters",
    "Corporate Office Tower",
    "Shopping Mall Complex",
    "Luxury Hotel Resort",
    "Industrial Facility",
  ],

  // Option 2: Feature specific projects by ID (uncomment to use)
  // featuredProjectIds: ["1", "2", "3", "4", "5", "6"],

  // Option 3: Feature projects from specific industries (uncomment to use)
  // featuredIndustries: ["Banking", "Residential", "Offices"],

  // Maximum number of featured projects to display
  maxFeatured: 6,

  // Whether to prioritize ongoing projects
  prioritizeOngoing: true,
};

// Alternative configurations you can use:

// Show only Banking and Residential projects
export const bankingAndResidentialConfig: FeaturedProjectConfig = {
  featuredIndustries: ["Banking", "Residential"],
  maxFeatured: 4,
  prioritizeOngoing: true,
};

// Show only ongoing projects
export const ongoingProjectsConfig: FeaturedProjectConfig = {
  prioritizeOngoing: true,
  maxFeatured: 8,
};

// Show specific high-profile projects
export const highlightProjectsConfig: FeaturedProjectConfig = {
  featuredProjectNames: [
    "Regional Bank Headquarters",
    "Luxury Hotel Resort",
    "Corporate Office Tower",
  ],
  maxFeatured: 3,
};
