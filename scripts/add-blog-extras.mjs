/**
 * Adds AuthorBio and RelatedArticles components to every blog post page
 * (all files in src/pages/blog/ except index.astro).
 * Also fixes the Adams Peak hero image (ella.jpg → adams-peak.jpg).
 * Insertion point: before <ExpediaWidget
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import path from 'path';

const blogDir = 'src/pages/blog';
const files = readdirSync(blogDir)
  .filter(f => f.endsWith('.astro') && f !== 'index.astro')
  .map(f => path.join(blogDir, f));

let updated = 0, skipped = 0;

for (const file of files) {
  let src = readFileSync(file, 'utf8');

  // ── Fix adams-peak hero image ──
  if (file.includes('adams-peak-hiking-guide')) {
    src = src.replace(
      /src="\/images\/ella\.jpg" alt="Adam's Peak/,
      `src="/images/adams-peak.jpg" alt="Adam's Peak`
    );
  }

  // ── Add imports if not already present ──
  const hasAuthorImport   = src.includes("import AuthorBio");
  const hasRelatedImport  = src.includes("import RelatedArticles");

  if (!hasAuthorImport || !hasRelatedImport) {
    // Insert after the last import line in the frontmatter
    src = src.replace(
      /^(import ExpediaWidget from '\.\.\/\.\.\/components\/ExpediaWidget\.astro';)/m,
      `import ExpediaWidget from '../../components/ExpediaWidget.astro';\nimport AuthorBio from '../../components/AuthorBio.astro';\nimport RelatedArticles from '../../components/RelatedArticles.astro';`
    );
  }

  // ── Compute href from filename ──
  const slug = path.basename(file, '.astro');
  const href = `/blog/${slug}`;

  // ── Insert AuthorBio + RelatedArticles before <ExpediaWidget ──
  const marker = '<ExpediaWidget';
  if (!src.includes(marker)) {
    console.log(`  SKIP (no ExpediaWidget): ${path.basename(file)}`);
    skipped++;
    continue;
  }

  if (src.includes('<AuthorBio') || src.includes('<RelatedArticles')) {
    console.log(`  SKIP (already has extras): ${path.basename(file)}`);
    skipped++;
    continue;
  }

  src = src.replace(
    marker,
    `<RelatedArticles currentHref="${href}" />\n  <AuthorBio />\n  ${marker}`
  );

  writeFileSync(file, src);
  console.log(`  ✓ ${path.basename(file)}`);
  updated++;
}

console.log(`\nDone: ${updated} updated, ${skipped} skipped.`);
