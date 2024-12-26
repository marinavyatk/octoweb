import { GreetingDescription } from "@/components/layouts/greetingDescription/greetingDescription";
import { AboutCard } from "@/components/sections/aboutCard/aboutCard";
import { ServicesLinksList } from "@/components/sections/servicesLinksList/servicesLinksList";
import { StepCards } from "@/components/sections/stepCards/stepCards";
import s from "./page.module.scss";
import { Greeting } from "@/components/sections/greeting/greeting";
import { linksData } from "@/common/componentsData/servicesLinks";
import { BigBubble } from "@/components/video/bigBubble/bigBubble";
import { SmallBubble } from "@/components/video/smallBubble/smallBubble";
import { AdvantagesCards } from "@/components/sections/advantagesCards/advantagesCards";
import { Cases } from "@/components/sections/cases/cases";


export default function Home() {
  const content = {
    firstLine: "МЫ РЕВОЛЮЦИОНЕРЫ",
    secondLine: "В СФЕРЕ",
    thirdLine: "ИЗ КРАСНОДАРА",
    wordSwipeProps: { words: ["web", "seo"] }
  };

  return (
    <div className={s.mainPage}>
      <div className={"mainContainer"}>
        <BigBubble className={s.bigBubbleMain} />
        <SmallBubble className={s.smallBubbleMain} />
        <Greeting textContent={content} />
        <h1 className={s.hiddenHeader}>Создаем сайты для бизнеса</h1>
        <GreetingDescription className={s.greetingDescription} />
      </div>
      <AboutCard className={s.about} />
      <div className={s.advantagesBubbles}>
        <BigBubble className={s.bigBubbleAdvantages} />
        <SmallBubble className={s.smallBubbleAdvantages} />
      </div>
      <div className={"mainContainer"}>
        <AdvantagesCards />
        <Cases />
      </div>
      <ServicesLinksList linksData={linksData} className={s.services} />
      <div className={s.servicesBubbles}>
        <SmallBubble className={s.smallBubbleServices} />
      </div>
      <StepCards className={s.steps} />
    </div>
  );
};
