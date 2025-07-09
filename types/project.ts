export interface Project {
  id: string;
  industry: string;
  title: string;
  image: string;
  description: string;
  location: string;
  dateCompleted: string;
  isOngoing?: boolean;
}

export interface GoogleSheetsProject {
  id: string;
  name: string;
  location: string;
  type: string;
  dateCompleted: string;
}
