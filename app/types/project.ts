export type ProjectType = "website" | "webgame" | "webapp";

export interface Project {
  published?: boolean;
  title: string;
  description: string;
  date: string;
  url?: string;
  repository?: string;
  order?: number;
  image?: string;
  type: ProjectType;
  slug: string;
} 