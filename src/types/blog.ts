// Blog post frontmatter types
export interface BlogPostFrontmatter {
  /** The title of the blog post */
  title: string;
  /** Brief description for SEO and preview cards */
  description: string;
  /** Category for organizing posts */
  category: BlogPostCategory;
  /** Publication date in YYYY-MM-DD format */
  date: string;
  /** URL to the hero image */
  imgUrl: string;
  /** URL slug for the post (auto-generated from filename if not provided) */
  slug?: string;
  /** Optional tags for better organization */
  tags?: string[];
  /** Optional reading time (auto-calculated if not provided) */
  readingTime?: string;
  /** Optional author name (defaults to site author) */
  author?: string;
  /** Optional draft status */
  draft?: boolean;
  /** Optional featured status */
  featured?: boolean;
  /** Optional canonical URL for SEO */
  canonicalUrl?: string;
}

// Blog post categories
export type BlogPostCategory =
  | "software"
  | "finance"
  | "misc"
  | "technology"
  | "design"
  | "personal";

// Complete blog post with content
export interface BlogPost extends BlogPostFrontmatter {
  /** The markdown content of the post */
  content: string;
  /** The URL path to the post */
  href: string;
  /** Auto-calculated reading time */
  readingTime: string;
}

// Blog post metadata (without content for listings)
export type BlogPostMetadata = Omit<BlogPost, "content">;

// Blog post creation/update types
export interface CreateBlogPostInput
  extends Omit<BlogPostFrontmatter, "slug" | "readingTime"> {
  /** The markdown content */
  content: string;
}

export interface UpdateBlogPostInput extends Partial<BlogPostFrontmatter> {
  /** Optional content update */
  content?: string;
}

// Blog post validation result
export interface BlogPostValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

// Blog post search/filter options
export interface BlogPostFilterOptions {
  category?: BlogPostCategory;
  tags?: string[];
  author?: string;
  featured?: boolean;
  draft?: boolean;
  dateRange?: {
    start: string;
    end: string;
  };
}

// Blog post sort options
export type BlogPostSortOption =
  | "date-desc"
  | "date-asc"
  | "title-asc"
  | "title-desc"
  | "reading-time-asc"
  | "reading-time-desc";

// Blog post pagination
export interface BlogPostPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// Blog post list response
export interface BlogPostListResponse {
  posts: BlogPostMetadata[];
  pagination: BlogPostPagination;
  filters: BlogPostFilterOptions;
  sort: BlogPostSortOption;
}

// Blog post statistics
export interface BlogPostStats {
  totalPosts: number;
  publishedPosts: number;
  draftPosts: number;
  featuredPosts: number;
  categories: Record<BlogPostCategory, number>;
  tags: Record<string, number>;
  averageReadingTime: number;
  totalReadingTime: number;
}

// MDX component props
export interface MDXComponentProps {
  children?: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}

// Blog post template
export interface BlogPostTemplate {
  name: string;
  description: string;
  frontmatter: Partial<BlogPostFrontmatter>;
  content: string;
  category: BlogPostCategory;
}
