import { marked, Renderer, type Tokens } from "marked";

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/<[^>]*>/g, "")
    .replace(/&[a-z]+;/gi, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

function escapeAttr(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

const renderer = new Renderer();

renderer.heading = function ({ tokens, depth, text }: Tokens.Heading) {
  const inner = this.parser.parseInline(tokens);
  const id = slugify(text);
  return `<h${depth} id="${id}">${inner}</h${depth}>\n`;
};

renderer.link = function ({ href, title, tokens }: Tokens.Link) {
  const inner = this.parser.parseInline(tokens);
  const safeHref = escapeAttr(href);
  const external = /^https?:\/\//.test(href);
  const titleAttr = title ? ` title="${escapeAttr(title)}"` : "";
  const extra = external
    ? ` target="_blank" rel="noreferrer noopener"`
    : "";
  return `<a href="${safeHref}"${titleAttr}${extra}>${inner}</a>`;
};

marked.use({ gfm: true, renderer });

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function renderMarkdown(markdown: string, title?: string) {
  let source = markdown.trim();
  if (title) {
    const duplicateTitle = new RegExp(
      `^#\\s+${escapeRegex(title)}\\s*`,
      "i"
    );
    source = source.replace(duplicateTitle, "").trim();
  }
  return marked.parse(source, { async: false }) as string;
}

export function extractHeadings(markdown: string, title?: string) {
  const headings: { depth: number; text: string; id: string }[] = [];

  for (const line of markdown.split("\n")) {
    const match = /^(#{1,3})\s+(.+)$/.exec(line.trim());
    if (!match) continue;
    const depth = match[1].length;
    const text = match[2].replace(/[*_`]/g, "").trim();
    if (title && depth === 1 && text.toLowerCase() === title.toLowerCase()) {
      continue;
    }
    if (depth < 2) continue;
    headings.push({ depth, text, id: slugify(text) });
  }

  return headings;
}
