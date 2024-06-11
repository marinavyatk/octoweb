import { Header } from "../../components/ui/complex/header/header.tsx";
import s from "./mainPage.module.scss";
import { ButtonWithStroke } from "../../components/ui/primitive/buttonWithStroke/buttonWithStroke.tsx";
import { AnimatedField } from "../../components/ui/primitive/animatedField/animatedField.tsx";
import ArrowIcon from "../../assets/arrow.svg?react";
import teamPhoto from "../../assets/webp/teamMainPhoto.webp";
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
import { WordSwipe } from "../../components/ui/primitive/wordSwipe/wordSwipe.tsx";
import { useEffect } from "react";
import Demarko from "../../assets/webp/case-de-marko.webp";
import Ekvadrat from "../../assets/webp/case-e-kvadrat.webp";
import Botanica from "../../assets/webp/case-botanica.webp";
import Smxtream from "../../assets/webp/case-smxtream.webp";
import { CaseCard, Size } from "../../components/ui/primitive/caseCard/caseCard.tsx";

export const MainPage = () => {
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

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <div className={s.mainPage}>
      {/*<MainPageBubbles />*/}
      <Header />
      <div className={s.mainContainer}>
        <section className={s.greetingBlock}>
          <div className={s.mainText + " " + s.greetingText}>
            <div className={s.firstLine}>МЫ РЕВОЛЮЦИОНЕРЫ</div>
            <div className={s.secondLine}>
              В СФЕРЕ <WordSwipe />
            </div>
            <ArrowPointerSmall className={s.arrow} />

            <div className={s.thirdLine}>ИЗ КРАСНОДАРА</div>
          </div>
          <div className={s.briefOffer}>
            <ButtonWithStroke />
            <div className={s.offerText}>
              <span className={s.heading}>
                Получите скидку <span className={s.accent}>5000 рублей!</span>
              </span>
              <br />
              <span className={s.description}>Достаточно просто заполнить бриф</span>
            </div>
          </div>
        </section>

        <section className={s.greetingDescription}>
          <h1>Создаем сайты для бизнеса</h1>
          <div>создаем</div>
          <AnimatedField variant={"secondary"} animation={"right"} className={s.starsSymbols}>
            ★ ★ ★ ★ ★
          </AnimatedField>
          <div>сайты</div>
          <div>для</div>
          <AnimatedField variant={"dark"} animation={"right"} className={s.arrowSymbol}>
            <ArrowIcon />
          </AnimatedField>
          <div>бизнеса</div>
          <AnimatedField animation={"left"} className={s.happySymbol}>
            {" "}
            ⌢⌣
          </AnimatedField>
          <div>на</div>
          <AnimatedField animation={"left"} className={s.kaomojiSymbol}>
            くコ:彡
          </AnimatedField>
          <div>основе</div>
          <div>данных</div>
          <div>и</div>
          <div>здравого</div>
          <AnimatedField variant={"dark"} animation={"right"} className={s.emojiSymbol}>
            (:\/)
          </AnimatedField>
          <div>смысла</div>
          <AnimatedField variant={"secondary"} animation={"left"} className={s.kissSymbol}>
            :^*
          </AnimatedField>
        </section>
      </div>

      <section className={s.about}>
        <div className={s.text}>
          <h2>
            ВЕБ-студия <br />
            OCTOWEB
          </h2>
          <p>
            {" "}
            С 2018 года специализируемся на разработке, сопровождении и развитии IT-продуктов,
            интернет-магазинов и бизнес-сайтов
          </p>
        </div>

        <div className={s.imageWithButton}>
          <div className={s.imgContainer}>
            <img src={teamPhoto} alt={"Команда"} />
          </div>
          <ArrowLinkWithText
            variant={"dark"}
            text={"Заказать проект"}
            href={"#form"}
            className={s.arrowButton}
          />
        </div>
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
          <CaseCard as={"h3"} size={"medium" as Size} {...mainPageCases[3]} />
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
