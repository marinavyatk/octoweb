import s from "./serviceCategory.module.scss";
import { ServicesLinksList } from "@/components/sections/servicesLinksList/servicesLinksList";
import { StepCards } from "@/components/sections/stepCards/stepCards";
import { FAQ } from "@/components/sections/faq/faq";
import { Advantages } from "@/components/sections/advantages/advantages";
import { CooperationCard } from "@/components/sections/cooperationCard/cooperationCard";
import { linksData } from "@/common/componentsData/links";
import { faqData } from "@/common/componentsData/faq";
import { Greeting } from "@/components/sections/greeting/greeting";
import { clsx } from "clsx";
import { BigBubble } from "@/components/video/bigBubble/bigBubble";
import { SmallBubble } from "@/components/video/smallBubble/smallBubble";


export default function ServiceCategory() {
  const textContent = {
    firstLine: "Разработка сайтов",
    secondLine: "для",
    thirdLine: "в Краснодаре",
    wordSwipeProps: { words: ["бизнеса"] }
  };

  return (
    <>
      <div className={s.mainBubbles}>
        <BigBubble className={s.bigBubbleMain} />
        <SmallBubble className={s.smallBubbleMain} />
      </div>
      <Greeting textContent={textContent} className={"mainContainer"} />
      <ServicesLinksList
        linksData={linksData}
        header={"Услуги разработки"}
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
      <StepCards className={s.steps} />
      <FAQ faqData={faqData} className={clsx(s.faq, "mainContainer")} />
    </>
  );
};
