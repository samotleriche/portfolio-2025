#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const readline = require("readline");

const blogDirectory = path.join(process.cwd(), "src/content/blog");
const templatePath = path.join(
  process.cwd(),
  "src/templates/blog-post-template.mdx"
);

const VALID_CATEGORIES = [
  "software",
  "finance",
  "misc",
  "technology",
  "design",
  "personal",
];

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
    .replace(/^-|-$/g, "");
}

function ask(rl, question, fallback = "") {
  const prompt = fallback ? `${question} [${fallback}]: ` : `${question}: `;
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer.trim() || fallback);
    });
  });
}

async function main() {
  if (!fs.existsSync(templatePath)) {
    console.error(`Template not found: ${templatePath}`);
    process.exit(1);
  }

  if (!fs.existsSync(blogDirectory)) {
    fs.mkdirSync(blogDirectory, { recursive: true });
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  try {
    const title = await ask(rl, "Title");
    if (!title) {
      console.error("Title is required.");
      process.exit(1);
    }

    const description = await ask(
      rl,
      "Description (50-160 chars recommended)"
    );
    const category = await ask(
      rl,
      `Category (${VALID_CATEGORIES.join("/")})`,
      "software"
    );
    const date = await ask(
      rl,
      "Date (YYYY-MM-DD)",
      new Date().toISOString().slice(0, 10)
    );
    const imgUrl = await ask(
      rl,
      "Image URL",
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=60"
    );
    const tagsInput = await ask(rl, "Tags (comma-separated)", "");
    const slug = await ask(rl, "Slug", slugify(title));

    if (!VALID_CATEGORIES.includes(category)) {
      console.error(`Invalid category. Choose one of: ${VALID_CATEGORIES.join(", ")}`);
      process.exit(1);
    }

    const outputPath = path.join(blogDirectory, `${slug}.mdx`);
    if (fs.existsSync(outputPath)) {
      console.error(`A post already exists at ${outputPath}`);
      process.exit(1);
    }

    const tags = tagsInput
      ? tagsInput
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean)
      : [];

    let content = fs.readFileSync(templatePath, "utf8");
    content = content
      .replace(/title: ".*"/, `title: "${title.replace(/"/g, '\\"')}"`)
      .replace(
        /description: ".*"/,
        `description: "${(description || "TODO: add a description.").replace(/"/g, '\\"')}"`
      )
      .replace(/category: ".*"/, `category: "${category}"`)
      .replace(/date: ".*"/, `date: "${date}"`)
      .replace(/imgUrl: ".*"/, `imgUrl: "${imgUrl}"`)
      .replace(
        /tags: \[.*\]/,
        `tags: [${tags.map((tag) => `"${tag}"`).join(", ")}]`
      )
      .replace(/^# Your Blog Post Title/m, `# ${title}`);

    fs.writeFileSync(outputPath, content);
    console.log(`Created ${outputPath}`);
  } finally {
    rl.close();
  }
}

main();
