const categoryLabels: Record<string, string> = {
  software: "Software",
  finance: "Finance",
  misc: "Notes",
  technology: "Technology",
  design: "Design",
  personal: "Personal",
};

export function formatCategory(category: string) {
  return categoryLabels[category] ?? category;
}

export function formatDate(iso: string) {
  const date = new Date(`${iso.slice(0, 10)}T00:00:00`);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
