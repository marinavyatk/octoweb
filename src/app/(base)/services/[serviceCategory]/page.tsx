import s from "./serviceCategory.module.scss";
import { ServicesLinksList } from "@/components/layouts/servicesLinksList/servicesLinksList";
import { StepCards } from "@/components/layouts/stepCards/stepCards";
import { FAQ } from "@/components/layouts/faq/faq";
import { AdvantageSection } from "@/components/layouts/advantageSection/advantageSection";
import { CooperationCard } from "@/components/layouts/cooperationCard/cooperationCard";
import { linksData } from "@/common/componentsData/links";
import { faqData } from "@/common/componentsData/faq";
import { Greeting } from "@/components/sections/greeting/greeting";
import { clsx } from "clsx";


export default function ServiceCategory() {
  const textContent = {
    firstLine: "Разработка сайтов",
    secondLine: "для",
    thirdLine: "в Краснодаре",
    wordSwipeProps: { words: ["бизнеса"] }
  };

  return (
    <>
      <Greeting textContent={textContent} className={"mainContainer"} />
      <ServicesLinksList linksData={linksData} header={'Услуги разработки'}/>
      <AdvantageSection className={clsx(s.advantagesSection, "mainContainer")} />
      <CooperationCard />
      <StepCards className={s.steps} />
      <FAQ faqData={faqData} className={clsx(s.faq, "mainContainer")} />
    </>
  );
};
