export interface BlogPost {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    excerpt: string;
    author: string;
    tags: string[];
    readingTime: number;
  };
  content: string;
  previousPost?: {
    slug: string;
    title: string;
  };
}
