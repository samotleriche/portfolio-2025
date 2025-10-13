import {
  BlogPostFrontmatter,
  BlogPostCategory,
  BlogPostValidationResult,
} from "@/types/blog";

// Required frontmatter fields
const REQUIRED_FIELDS: (keyof BlogPostFrontmatter)[] = [
  "title",
  "description",
  "category",
  "date",
  "imgUrl",
];

// Valid categories
const VALID_CATEGORIES: BlogPostCategory[] = [
  "software",
  "finance",
  "misc",
  "technology",
  "design",
  "personal",
];

// Validation functions
export function validateBlogPostFrontmatter(
  frontmatter: Partial<BlogPostFrontmatter>
): BlogPostValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Check required fields
  for (const field of REQUIRED_FIELDS) {
    if (!frontmatter[field]) {
      errors.push(`Missing required field: ${field}`);
    }
  }

  // Validate title
  if (frontmatter.title) {
    if (frontmatter.title.length < 5) {
      warnings.push("Title is very short (less than 5 characters)");
    }
    if (frontmatter.title.length > 100) {
      warnings.push("Title is very long (more than 100 characters)");
    }
  }

  // Validate description
  if (frontmatter.description) {
    if (frontmatter.description.length < 50) {
      warnings.push("Description is short (less than 50 characters)");
    }
    if (frontmatter.description.length > 160) {
      warnings.push(
        "Description is long (more than 160 characters) - may be truncated in SEO"
      );
    }
  }

  // Validate category
  if (
    frontmatter.category &&
    !VALID_CATEGORIES.includes(frontmatter.category)
  ) {
    errors.push(
      `Invalid category: ${
        frontmatter.category
      }. Valid categories: ${VALID_CATEGORIES.join(", ")}`
    );
  }

  // Validate date
  if (frontmatter.date) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(frontmatter.date)) {
      errors.push("Date must be in YYYY-MM-DD format");
    } else {
      const date = new Date(frontmatter.date);
      if (isNaN(date.getTime())) {
        errors.push("Invalid date");
      } else {
        const now = new Date();
        const oneYearFromNow = new Date();
        oneYearFromNow.setFullYear(now.getFullYear() + 1);

        if (date > oneYearFromNow) {
          warnings.push("Date is more than one year in the future");
        }
        if (date < new Date("2020-01-01")) {
          warnings.push("Date is very old (before 2020)");
        }
      }
    }
  }

  // Validate image URL
  if (frontmatter.imgUrl) {
    try {
      new URL(frontmatter.imgUrl);
    } catch {
      errors.push("Invalid image URL format");
    }
  }

  // Validate tags
  if (frontmatter.tags) {
    if (!Array.isArray(frontmatter.tags)) {
      errors.push("Tags must be an array");
    } else {
      if (frontmatter.tags.length > 10) {
        warnings.push("Too many tags (more than 10)");
      }
      frontmatter.tags.forEach((tag, index) => {
        if (typeof tag !== "string") {
          errors.push(`Tag at index ${index} must be a string`);
        } else if (tag.length > 30) {
          warnings.push(`Tag "${tag}" is very long (more than 30 characters)`);
        }
      });
    }
  }

  // Validate slug
  if (frontmatter.slug) {
    const slugRegex = /^[a-z0-9-]+$/;
    if (!slugRegex.test(frontmatter.slug)) {
      errors.push(
        "Slug must contain only lowercase letters, numbers, and hyphens"
      );
    }
    if (frontmatter.slug.length > 50) {
      warnings.push("Slug is very long (more than 50 characters)");
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}

// Generate slug from title
export function generateSlugFromTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single
    .trim()
    .replace(/^-|-$/g, ""); // Remove leading/trailing hyphens
}

// Validate and sanitize frontmatter
export function sanitizeBlogPostFrontmatter(
  frontmatter: Partial<BlogPostFrontmatter>
): BlogPostFrontmatter {
  const sanitized: Partial<BlogPostFrontmatter> = { ...frontmatter };

  // Generate slug if not provided
  if (!sanitized.slug && sanitized.title) {
    sanitized.slug = generateSlugFromTitle(sanitized.title);
  }

  // Ensure boolean fields are properly set
  sanitized.draft = Boolean(sanitized.draft);
  sanitized.featured = Boolean(sanitized.featured);

  // Ensure tags is an array
  if (sanitized.tags && !Array.isArray(sanitized.tags)) {
    sanitized.tags = [];
  }

  // Trim string fields
  if (sanitized.title) sanitized.title = sanitized.title.trim();
  if (sanitized.description)
    sanitized.description = sanitized.description.trim();
  if (sanitized.author) sanitized.author = sanitized.author.trim();

  return sanitized as BlogPostFrontmatter;
}

// Get validation summary
export function getValidationSummary(result: BlogPostValidationResult): string {
  if (result.isValid && result.warnings.length === 0) {
    return "✅ All validations passed";
  }

  const parts: string[] = [];

  if (result.isValid) {
    parts.push("✅ Valid");
  } else {
    parts.push(`❌ ${result.errors.length} error(s)`);
  }

  if (result.warnings.length > 0) {
    parts.push(`⚠️ ${result.warnings.length} warning(s)`);
  }

  return parts.join(" • ");
}
