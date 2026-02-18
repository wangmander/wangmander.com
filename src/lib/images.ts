import fs from "fs";
import path from "path";

const IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp"];

function extractSortKey(filename: string): number {
  // Match leading number (e.g. "1-", "10-", "v1-", "v2-3")
  const match = filename.match(/^v?(\d+)(?:-(\d+))?/);
  if (match) {
    const major = parseInt(match[1], 10);
    const minor = match[2] ? parseInt(match[2], 10) : 0;
    return major * 100 + minor;
  }
  return 999;
}

export function getImagesForCaseStudy(slug: string): string[] {
  const dir = path.join(process.cwd(), "public", "case-studies", slug);

  if (!fs.existsSync(dir)) return [];

  // Check for curation file
  const curationPath = path.join(dir, "_curation.json");
  if (fs.existsSync(curationPath)) {
    const curation = JSON.parse(fs.readFileSync(curationPath, "utf-8"));
    return (curation as string[]).map(
      (f: string) => `/case-studies/${slug}/${f}`
    );
  }

  // Auto-discover and sort
  const files = fs
    .readdirSync(dir)
    .filter((f) => {
      const ext = path.extname(f).toLowerCase();
      return IMAGE_EXTENSIONS.includes(ext) && !f.startsWith("_");
    })
    .sort((a, b) => extractSortKey(a) - extractSortKey(b));

  return files.map((f) => `/case-studies/${slug}/${f}`);
}

export function humanizeFilename(filepath: string): string {
  const basename = path.basename(filepath, path.extname(filepath));
  // Strip numeric prefixes like "1-", "v1-2 ", "10-"
  const stripped = basename.replace(/^v?\d+(?:-\d+)?\s*[-_]?\s*/, "");
  // Replace hyphens and underscores with spaces, then title case
  return stripped
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
