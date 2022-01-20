export interface Article {
  slug: string;
  content: {
    content: string;
    description: string;
    title: string;
    featured: boolean;
    image: {
      filename: string;
      alt: string;
    }
  }
  html?: string;
  tag_list: string[];
  published_at: string;
}
