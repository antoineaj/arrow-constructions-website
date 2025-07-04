import styles from "./ProjectsFilter.module.scss";

interface ProjectsFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function ProjectsFilter({ activeFilter, onFilterChange }: ProjectsFilterProps) {
  const filters = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "banking", label: "Banking" },
    { id: "offices", label: "Offices" },
    { id: "restaurants-hotels", label: "Restaurants/Hotels" },
    { id: "retail", label: "Retail" },
    { id: "miscellaneous", label: "Miscellaneous" },
  ];

  return (
    <section className={styles.projectsFilter}>
      <div className={styles.container}>
        <div className={styles.filterButtons}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`${styles.filterButton} ${
                activeFilter === filter.id ? styles.active : ""
              }`}
              onClick={() => onFilterChange(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
