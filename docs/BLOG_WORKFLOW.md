# Blog Content Creation Workflow

This document outlines the complete workflow for creating, managing, and publishing blog posts in the portfolio website.

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Blog Post Structure](#blog-post-structure)
- [Content Creation Methods](#content-creation-methods)
- [Validation & Quality Assurance](#validation--quality-assurance)
- [Publishing Process](#publishing-process)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

## 🚀 Quick Start

### Method 1: Using the Creation Script (Recommended)

```bash
# Make the script executable
chmod +x scripts/create-blog-post.js

# Run the interactive blog post creator
node scripts/create-blog-post.js
```

### Method 2: Manual Creation

1. Copy the template: `src/templates/blog-post-template.mdx`
2. Rename to your desired slug: `your-post-slug.mdx`
3. Place in: `src/content/blog/`
4. Update the frontmatter and content

## 📝 Blog Post Structure

### Frontmatter (Required Fields)

```yaml
---
title: "Your Blog Post Title" # Required: 5-100 characters
description: "Brief description..." # Required: 50-160 characters
category: "software" # Required: software/finance/misc/technology/design/personal
date: "2025-01-15" # Required: YYYY-MM-DD format
imgUrl: "https://example.com/image.jpg" # Required: Valid URL
slug: "your-post-slug" # Optional: Auto-generated from title
tags: ["javascript", "react"] # Optional: Array of strings
author: "Tomas Leriche" # Optional: Defaults to site author
draft: false # Optional: Defaults to false
featured: false # Optional: Defaults to false
---
```

### Content Structure

```markdown
# Title (H1 - matches frontmatter title)

Brief introduction that hooks the reader.

## Table of Contents (Optional)

- [Section 1](#section-1)
- [Section 2](#section-2)
- [Conclusion](#conclusion)

## Section 1 (H2)

Main content sections.

### Subsection (H3)

Subsections as needed.

## Section 2 (H2)

More content.

## Conclusion (H2)

Wrap up with key takeaways.

### Key Takeaways

- Point 1
- Point 2
- Point 3

---

**Tags:** #javascript #react
**Reading Time:** ~5 minutes
**Last Updated:** 2025-01-15
```

## 🛠️ Content Creation Methods

### 1. Interactive Script (Easiest)

```bash
node scripts/create-blog-post.js
```

**Features:**

- Interactive prompts for all fields
- Automatic slug generation
- Template with proper structure
- Validation during creation

### 2. Template Copy

```bash
# Copy template
cp src/templates/blog-post-template.mdx src/content/blog/my-new-post.mdx

# Edit the file
code src/content/blog/my-new-post.mdx
```

### 3. Manual Creation

Create a new `.mdx` file in `src/content/blog/` with proper frontmatter and content.

## ✅ Validation & Quality Assurance

### Automatic Validation

```bash
# Validate all blog posts
node scripts/validate-blog-posts.js

# Generate blog statistics
node scripts/blog-stats.js
```

### Validation Rules

**Required Fields:**

- `title`: 5-100 characters
- `description`: 50-160 characters (optimal for SEO)
- `category`: Must be one of the valid categories
- `date`: YYYY-MM-DD format
- `imgUrl`: Valid URL format

**Optional Validations:**

- `tags`: Array of strings, max 10 tags
- `slug`: Lowercase, alphanumeric, hyphens only
- `draft`: Boolean
- `featured`: Boolean

### Quality Checklist

Before publishing, ensure:

- [ ] Title is compelling and descriptive
- [ ] Description is under 160 characters
- [ ] Content is well-structured with proper headings
- [ ] Code examples are syntax-highlighted
- [ ] Images are optimized and have alt text
- [ ] Links are working and relevant
- [ ] Reading time is reasonable (5-15 minutes)
- [ ] Tags are relevant and not excessive
- [ ] No spelling or grammar errors

## 📤 Publishing Process

### 1. Create Draft

```bash
# Create as draft
node scripts/create-blog-post.js
# Answer "y" to "Draft? (y/N)"

# Or set draft: true in frontmatter
```

### 2. Review & Edit

- Write and refine content
- Add images and code examples
- Test locally: `npm run dev`
- Validate: `node scripts/validate-blog-posts.js`

### 3. Publish

```bash
# Set draft: false in frontmatter
# Or use the update script (if created)

# Commit changes
git add src/content/blog/your-post.mdx
git commit -m "Add blog post: Your Post Title"
git push
```

### 4. Verify

- Check the blog listing page
- Test the individual post page
- Verify SEO metadata
- Check mobile responsiveness

## 📚 Best Practices

### Writing Guidelines

1. **Hook the Reader**: Start with a compelling introduction
2. **Structure Clearly**: Use proper heading hierarchy (H2 for sections, H3 for subsections)
3. **Be Concise**: Aim for 5-15 minute reading time
4. **Use Examples**: Include code examples and practical applications
5. **Add Visuals**: Use images, diagrams, or screenshots
6. **End Strong**: Summarize key points and provide next steps

### SEO Optimization

1. **Title**: Include target keywords, keep under 60 characters
2. **Description**: Write compelling meta description under 160 characters
3. **Headings**: Use descriptive headings with keywords
4. **Images**: Add descriptive alt text
5. **Internal Links**: Link to related posts and pages
6. **Tags**: Use relevant, searchable tags

### Technical Guidelines

1. **Code Examples**: Use syntax highlighting and explain the code
2. **Images**: Optimize images (WebP format, appropriate sizes)
3. **Links**: Use descriptive link text, open external links in new tabs
4. **Mobile**: Ensure content is readable on mobile devices
5. **Performance**: Keep content focused and avoid excessive media

### Content Categories

- **software**: Programming, development, technical tutorials
- **finance**: Financial topics, investing, money management
- **technology**: Tech news, reviews, industry insights
- **design**: UI/UX, graphic design, visual content
- **personal**: Personal experiences, thoughts, reflections
- **misc**: Other topics that don't fit other categories

## 🔧 Troubleshooting

### Common Issues

**Validation Errors:**

```bash
# Run validation to see specific errors
node scripts/validate-blog-posts.js
```

**Build Failures:**

```bash
# Check for syntax errors in MDX files
npm run build
```

**Missing Images:**

- Ensure image URLs are accessible
- Use HTTPS URLs
- Check image dimensions and format

**Content Not Appearing:**

- Verify file is in `src/content/blog/`
- Check frontmatter syntax (YAML format)
- Ensure `draft: false` for published posts

### Getting Help

1. Check the validation script output
2. Review this documentation
3. Check existing blog posts for examples
4. Test locally with `npm run dev`

## 📊 Analytics & Monitoring

### Blog Statistics

```bash
# Generate comprehensive stats
node scripts/blog-stats.js
```

**Metrics Tracked:**

- Total posts and publishing status
- Category distribution
- Tag usage
- Reading time statistics
- Recent posts
- Featured posts

### Performance Monitoring

- Monitor page load times
- Track user engagement
- Analyze popular content
- Review SEO performance

## 🔄 Maintenance

### Regular Tasks

1. **Weekly**: Review and update draft posts
2. **Monthly**: Generate and review blog statistics
3. **Quarterly**: Audit and update old posts
4. **Annually**: Review and update content strategy

### Content Updates

- Keep information current
- Update broken links
- Refresh outdated examples
- Improve based on feedback

---

**Last Updated:** 2025-01-15  
**Version:** 1.0.0
