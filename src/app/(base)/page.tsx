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
        <Greeting textContent={content} />
        <section className={s.greetingDescription}>
          <h1>Создаем сайты для бизнеса</h1>
          <GreetingDescription />
        </section>
      </div>
      <section className={s.about}>
        <AboutCard />
      </section>
      <div className={"mainContainer"}>
        <section className={s.advantages}>
          <h2>ПОЧЕМУ МЫ?</h2>
          <div className={s.arrow}></div>
          <span className={s.backgroundSymbol}>くコ:彡</span>
          <span className={s.backgroundSymbol}>くコ:彡</span>
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
        </section>
      </div>
      <ServicesLinksList linksData={linksData} />
      <section className={s.steps}>
        <StepCards />
      </section>
    </div>
  );
};
