import { cache } from "react";
import { Cases } from "@/app/(base)/cases/cases";
import { api } from "@/common/api";
import { getMetaDataObj } from "@/common/commonFunctions";
import Script from "next/script";

const getCachedSeo = cache(async () => {
  return await api.getCasesSeo();
});

export async function generateMetadata() {
  const metadata = await getCachedSeo();
  if (!metadata) return {};

  return getMetaDataObj(metadata);
}

export default async function CasesPage() {
  const seo = await getCachedSeo();
  const schema = seo?.schema;

  return (
    <>
      <Cases />
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
