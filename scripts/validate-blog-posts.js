#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const REQUIRED_FIELDS = ["title", "description", "category", "date", "imgUrl"];
const VALID_CATEGORIES = [
  "software",
  "finance",
  "misc",
  "technology",
  "design",
  "personal",
];

const blogDirectory = path.join(process.cwd(), "src/content/blog");

function validateFrontmatter(frontmatter, fileName) {
  const errors = [];
  const warnings = [];

  for (const field of REQUIRED_FIELDS) {
    if (!frontmatter[field]) {
      errors.push(`Missing required field: ${field}`);
    }
  }

  if (frontmatter.title) {
    if (frontmatter.title.length < 5) {
      warnings.push("Title is very short (less than 5 characters)");
    }
    if (frontmatter.title.length > 100) {
      warnings.push("Title is very long (more than 100 characters)");
    }
  }

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

  if (
    frontmatter.category &&
    !VALID_CATEGORIES.includes(frontmatter.category)
  ) {
    errors.push(
      `Invalid category: ${frontmatter.category}. Valid: ${VALID_CATEGORIES.join(", ")}`
    );
  }

  if (frontmatter.date) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(frontmatter.date)) {
      errors.push("Date must be in YYYY-MM-DD format");
    } else if (Number.isNaN(new Date(frontmatter.date).getTime())) {
      errors.push("Invalid date");
    }
  }

  if (frontmatter.imgUrl) {
    try {
      new URL(frontmatter.imgUrl);
    } catch {
      errors.push("Invalid image URL format");
    }
  }

  return { fileName, isValid: errors.length === 0, errors, warnings };
}

function main() {
  if (!fs.existsSync(blogDirectory)) {
    console.error(`Blog directory not found: ${blogDirectory}`);
    process.exit(1);
  }

  const files = fs
    .readdirSync(blogDirectory)
    .filter((name) => name.endsWith(".mdx"));

  if (files.length === 0) {
    console.log("No blog posts found.");
    return;
  }

  let hasErrors = false;

  for (const fileName of files) {
    const fileContents = fs.readFileSync(
      path.join(blogDirectory, fileName),
      "utf8"
    );
    const { data } = matter(fileContents);
    const result = validateFrontmatter(data, fileName);

    if (result.isValid && result.warnings.length === 0) {
      console.log(`✅ ${fileName}`);
      continue;
    }

    if (!result.isValid) {
      hasErrors = true;
      console.log(`❌ ${fileName}`);
      result.errors.forEach((error) => console.log(`   - ${error}`));
    } else {
      console.log(`⚠️  ${fileName}`);
    }

    result.warnings.forEach((warning) => console.log(`   - ${warning}`));
  }

  if (hasErrors) {
    process.exit(1);
  }
}

main();
