import { GreetingDescription } from "@/components/layouts/greetingDescription/greetingDescription";
import { AboutCard } from "@/components/sections/aboutCard/aboutCard";
import { AdvantageCards } from "@/components/layouts/advantageCards/advantageCards";
import { CaseCard, Size } from "@/components/layouts/caseCard/caseCard";
import { ServicesLinksList } from "@/components/sections/servicesLinksList/servicesLinksList";
import { StepCards } from "@/components/sections/stepCards/stepCards";
import s from "./page.module.scss";
import { routes } from "@/common/routes";
import { mainPageCases } from "@/common/componentsData/mainPageCases";
import { Button } from "@/components/ui/buttons/button/button";
import Link from "next/link";
import { Greeting } from "@/components/sections/greeting/greeting";
import { linksData } from "@/common/componentsData/servicesLinks";
import { BigBubble } from "@/components/video/bigBubble/bigBubble";
import { SmallBubble } from "@/components/video/smallBubble/smallBubble";
import { SquidIcon } from "@/components/layouts/squidIcon";


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
        <section className={s.advantages}>
          <h2>ПОЧЕМУ МЫ?</h2>
          <div className={s.arrow}></div>
          <SquidIcon className={s.backgroundSymbol} />
          <SquidIcon className={s.backgroundSymbol} />
          <div className={s.advantagesCards}>
            <AdvantageCards />
          </div>
        </section>
        <section className={s.cases}>
          <h2>КЕЙСЫ</h2>
          <CaseCard as={"h3"} size={"extraLarge" as Size} {...mainPageCases[0]} />
          <CaseCard
            as={"h3"}
            size={"large" as Size}
            {...mainPageCases[1]}
            className={s.secondCard}
          />
          <CaseCard as={"h3"} size={"small" as Size} {...mainPageCases[2]} />
          <CaseCard
            as={"h3"}
            size={"medium" as Size}
            {...mainPageCases[3]}
            className={s.fourCard}
          />
          <Button as={Link} text={"Больше кейсов"} href={routes.cases} className={s.arrowLink} />
          <BigBubble className={s.bigBubbleCases} />
        </section>
      </div>
      <ServicesLinksList linksData={linksData} className={s.services} />
      <div className={s.servicesBubbles}>
        <SmallBubble className={s.smallBubbleServices} />
      </div>
      <StepCards className={s.steps} />
    </div>
  );
};
