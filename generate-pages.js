const fs = require('fs');
const path = require('path');

const routes = [
  { path: 'app/solutions/page.tsx', lang: 'fr', key: 'solutions' },
  { path: 'app/audit/page.tsx', lang: 'fr', key: 'audit' },
  { path: 'app/etudes-de-cas/page.tsx', lang: 'fr', key: 'caseStudies' },
  { path: 'app/blog/page.tsx', lang: 'fr', key: 'blog' },
  { path: 'app/blog/[slug]/page.tsx', lang: 'fr', key: 'blogPost' },
  { path: 'app/a-propos/page.tsx', lang: 'fr', key: 'about' },
  { path: 'app/contact/page.tsx', lang: 'fr', key: 'contact' },
  { path: 'app/legal/terms/page.tsx', lang: 'fr', key: 'legalTerms' },
  { path: 'app/legal/privacy/page.tsx', lang: 'fr', key: 'legalPrivacy' },
  { path: 'app/legal/cookies/page.tsx', lang: 'fr', key: 'legalCookies' },

  { path: 'app/en/solutions/page.tsx', lang: 'en', key: 'solutions' },
  { path: 'app/en/audit/page.tsx', lang: 'en', key: 'audit' },
  { path: 'app/en/case-studies/page.tsx', lang: 'en', key: 'caseStudies' },
  { path: 'app/en/blog/page.tsx', lang: 'en', key: 'blog' },
  { path: 'app/en/blog/[slug]/page.tsx', lang: 'en', key: 'blogPost' },
  { path: 'app/en/about/page.tsx', lang: 'en', key: 'about' },
  { path: 'app/en/contact/page.tsx', lang: 'en', key: 'contact' },
  { path: 'app/en/legal/terms/page.tsx', lang: 'en', key: 'legalTerms' },
  { path: 'app/en/legal/privacy/page.tsx', lang: 'en', key: 'legalPrivacy' },
  { path: 'app/en/legal/cookies/page.tsx', lang: 'en', key: 'legalCookies' },
];

for (const route of routes) {
  const fullPath = path.join(__dirname, route.path);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  
  let content = `import PlaceholderPage from "@/components/PlaceholderPage";

export default function Page() {
  return <PlaceholderPage lang="${route.lang}" pageKey="${route.key}" />;
}
`;

  if (route.key === 'blogPost') {
    content = `import PlaceholderPage from "@/components/PlaceholderPage";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <PlaceholderPage lang="${route.lang}" pageKey="${route.key}" slug={slug} />;
}
`;
  }

  if (route.key === 'audit') {
      content = `import PlaceholderPage from "@/components/PlaceholderPage";
import AuditSection from "@/components/AuditSection";

export default function Page() {
  return (
    <>
      <PlaceholderPage lang="${route.lang}" pageKey="${route.key}" />
      <AuditSection lang="${route.lang}" />
    </>
  );
}
`;
  }

  fs.writeFileSync(fullPath, content);
}
console.log("Pages generated successfully.");
