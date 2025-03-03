import { cache } from "react";
import { Blog } from "@/app/(base)/blog/blog";
import { api } from "@/common/api";
import { getMetaDataObj } from "@/common/commonFunctions";
import Script from "next/script";

const getCachedSeo = cache(async () => {
  return await api.getBlogSeo();
});

export async function generateMetadata() {
  const metadata = await getCachedSeo();
  if (!metadata) return {};

  return getMetaDataObj(metadata);
}

export default async function BlogPage() {
  const seo = await getCachedSeo();
  const schema = seo?.schema;

  return (
    <>
      <Blog />
      {schema && (
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          id="blog"
          strategy="beforeInteractive"
        ></Script>
      )}
    </>
  );
}
