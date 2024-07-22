import { Header } from "../../components/ui/complex/header/header.tsx";
import s from "./mainPage.module.scss";
import { AdvantageCards } from "../../components/ui/complex/advantageCards/advantageCards.tsx";
import ArrowPointerSmall from "../../assets/arrowPointerSmall.svg?react";
import {
  linksData,
  ServicesLinksList,
} from "../../components/ui/complex/servicesLinksList/servicesLinksList.tsx";
import { StepCards } from "../../components/ui/complex/stepCards/stepCards.tsx";
import { FooterWithForm } from "../../components/ui/complex/footerWithForm/footerWithForm.tsx";
import { routes } from "../../common/routes.ts";
import { ArrowLinkWithText } from "../../components/ui/primitive/ArrowLinkWithText/arrowLinkWithText.tsx";
import { useEffect } from "react";
import Demarko from "../../assets/webp/case-de-marko.webp";
import Ekvadrat from "../../assets/webp/case-e-kvadrat.webp";
import Botanica from "../../assets/webp/case-botanica.webp";
import Smxtream from "../../assets/webp/case-smxtream.webp";
import { CaseCard, Size } from "../../components/ui/primitive/caseCard/caseCard.tsx";
import { BriefOffer } from "../../components/layouts/briefOffer/briefOffer.tsx";
import { GreetingText } from "../../components/layouts/greetingText/greetingText.tsx";
import { GreetingDescription } from "../../components/layouts/greetingDescription/greetingDescription.tsx";
import { AboutCard } from "../../components/layouts/aboutCard/aboutCard.tsx";

const mainPageCases = [
  {
    category: "ИНТЕРНЕТ-МАГАЗИН",
    tags: ["DEVELOP", "UI/UX", "КОМПЛЕКСНЫЙ МАРКЕТИНГ"],
    img: Demarko,
    header: "de-marko.ru",
    caseId: "demarko",
  },
  {
    category: "КОРПОРАТИВНЫЙ САЙТ",
    tags: ["DEVELOP", "UI/UX", "КОМПЛЕКСНЫЙ МАРКЕТИНГ", "SEO"],
    img: Ekvadrat,
    header: "ekvadrat23.ru",
    caseId: "ekvadrat",
  },
  {
    category: "LANDING PAGE",
    tags: ["DEVELOP", "UI/UX", "SEO"],
    img: Botanica,
    header: "ботаника-хилс.рф",
    caseId: "botanica",
  },
  {
    category: "КОРПОРАТИВНЫЙ САЙТ",
    tags: ["DEVELOP", "UI/UX", "SEO"],
    img: Smxtream,
    header: "smxtream.pro",
    caseId: "smxtream",
  },
];

export const MainPage = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className={s.mainPage}>
      <Header />
      <div className={s.mainContainer}>
        <section className={s.greetingBlock}>
          <div className={s.greetingText}>
            <GreetingText />
            <ArrowPointerSmall className={s.arrow} />
          </div>
          <BriefOffer className={s.briefOffer} />
        </section>
        <section className={s.greetingDescription}>
          <h1>Создаем сайты для бизнеса</h1>
          <GreetingDescription />
        </section>
      </div>
      <section className={s.about}>
        <AboutCard />
      </section>
      <div className={s.mainContainer}>
        <section className={s.advantages}>
          <h2>ПОЧЕМУ МЫ?</h2>
          <div className={s.arrow}></div>
          <span>くコ:彡</span>
          <span>くコ:彡</span>
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
          <ArrowLinkWithText text={"Больше кейсов"} to={routes.cases} className={s.arrowLink} />
        </section>
      </div>
      <section className={s.services}>
        <h2>Услуги</h2>
        <ServicesLinksList linksData={linksData} />
      </section>
      <section className={s.steps}>
        <StepCards />
      </section>
      <FooterWithForm />
    </div>
  );
};
