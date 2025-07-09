import { useState, useEffect } from "react";
import { Project, GoogleSheetsProject } from "../types/project";
import { transformGoogleSheetsData } from "../utils/projectDataTransform";

interface UseProjectsReturn {
  projects: Project[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useProjects(): UseProjectsReturn {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/projects");

      if (!response.ok) {
        throw new Error(`Failed to fetch projects: ${response.status}`);
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      // Transform Google Sheets data to our Project format
      const transformedProjects = transformGoogleSheetsData(
        data.projects as GoogleSheetsProject[]
      );
      setProjects(transformedProjects);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unknown error occurred";
      setError(errorMessage);
      console.error("Error fetching projects:", err);

      // Fallback to empty array if there's an error
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return {
    projects,
    loading,
    error,
    refetch: fetchProjects,
  };
}
