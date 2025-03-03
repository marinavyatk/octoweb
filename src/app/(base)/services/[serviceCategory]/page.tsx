import s from "./serviceCategory.module.scss";
import { ServicesLinksList } from "@/components/sections/servicesLinksList/servicesLinksList";
import { StepCards } from "@/components/sections/stepCards/stepCards";
import { Advantages } from "@/components/sections/advantages/advantages";
import { CooperationCard } from "@/components/sections/cooperationCard/cooperationCard";
import { Greeting } from "@/components/sections/greeting/greeting";
import { clsx } from "clsx";
import { BigBubble } from "@/components/video/bigBubble";
import { SmallBubble } from "@/components/video/smallBubble";
import { api } from "@/common/api";
import { FAQ } from "@/components/sections/faq/faq";
import { getMetaDataObj } from "@/common/commonFunctions";
import Script from "next/script";
import { cache } from "react";
import { ServerError } from "@/common/types";
import { notFound } from "next/navigation";

const getCachedSeo = cache(async (serviceCategory: string) => {
  return await api.getServicesCategorySeo(serviceCategory);
});

export async function generateMetadata({
  params,
}: {
  params: { serviceCategory: string };
}) {
  const { serviceCategory } = await params;
  const metadata = await getCachedSeo(serviceCategory);
  if (!metadata) return {};

  return getMetaDataObj(metadata);
}

export default async function ServiceCategory({
  params,
}: {
  params: Promise<{ serviceCategory: string }>;
}) {
  const { serviceCategory } = await params;
  const [serviceCategoryData, seo] = await Promise.all([
    api.getServiceCategory(serviceCategory),
    getCachedSeo(serviceCategory),
  ]);

  if (!serviceCategoryData) return null;
  if (
    typeof serviceCategoryData === "object" &&
    "code" in serviceCategoryData
  ) {
    const typedResponse = serviceCategoryData as unknown as ServerError;
    if (typedResponse?.data?.status === 404) {
      notFound();
    }
    return null;
  }

  const schema = seo?.schema;

  const stepCards = serviceCategoryData.work_stages.map((stage) => ({
    stepNumber: String(stage.number),
    header: stage.title,
    description: stage.text,
  }));

  const textContent = {
    firstLine: serviceCategoryData.firstLine,
    secondLine: serviceCategoryData.secondLine,
    thirdLine: serviceCategoryData.thirdLine,
    wordSwipeProps: { words: serviceCategoryData.words },
  };

  return (
    <>
      <div className={s.mainBubbles}>
        <BigBubble className={s.bigBubbleMain} />
        <SmallBubble className={s.smallBubbleMain} />
      </div>
      <div className={"mainContainer"}>
        <Greeting greetingTextProps={{ textContent: textContent }} />
      </div>
      <ServicesLinksList
        linksData={serviceCategoryData?.linksData}
        className={s.services}
      />
      <div className={s.advantagesBubbles}>
        <BigBubble className={s.bigBubbleAdvantages} />
      </div>
      <Advantages className={clsx(s.advantages, "mainContainer")} />
      <CooperationCard />
      <div className={s.cardBubbles}>
        <SmallBubble className={s.smallBubbleCard} />
      </div>
      <StepCards className={s.steps} stepCards={stepCards} />
      <FAQ
        faqData={serviceCategoryData.faq}
        className={clsx(s.faq, "mainContainer")}
      />
      {schema && (
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          id="case"
          strategy="beforeInteractive"
        ></Script>
      )}
    </>
  );
}
