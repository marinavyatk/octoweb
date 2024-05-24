import { Header } from "../../components/ui/complex/header/header.tsx";
import s from "./serviceCategoryPage.module.scss";
import { ButtonWithStroke } from "../../components/ui/primitive/buttonWithStroke/buttonWithStroke.tsx";
import ArrowPointerSmall from "../../assets/arrowPointerSmall.svg?react";
import { ServicesLinksList } from "../../components/ui/complex/servicesLinksList/servicesLinksList.tsx";
import { StepCards } from "../../components/ui/complex/stepCards/stepCards.tsx";
import { FooterWithForm } from "../../components/ui/complex/footerWithForm/footerWithForm.tsx";
import { useEffect } from "react";
import { FAQ, faqData } from "../../components/ui/complex/faq/faq.tsx";
import { AdvantageSection } from "../../components/ui/complex/advantageSection/advantageSection.tsx";
import { CooperationCard } from "../../components/ui/complex/cooperationCard/cooperationCard.tsx";

export const linksData = [
  {
    number: "01",
    header: "Промо-Сайт",
    href: "#", //change later
  },
  {
    number: "02",
    header: "Лэндинг",
    href: "#", //change later
  },
  {
    number: "03",
    header: "Многостраничный сайт",
    href: "#", //change later
  },
  {
    number: "04",
    header: "Сайт Каталог",
    href: "#", //change later
  },
  {
    number: "05",
    header: "Интернет-Магазин",
    href: "#", //change later
  },
];

export const ServiceCategoryPage = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const mainHeader = {
    firstLine: "Разработка сайтов",
    secondLine: "для",
    thirdLine: "в Краснодаре",
    accent: "бизнеса",
  };

  return (
    <div>
      <Header />
      <div className={s.mainContainer}>
        <section className={s.greetingBlock}>
          <div className={s.mainText + " " + s.greetingText}>
            <div className={s.firstLine}>{mainHeader.firstLine}</div>
            <div className={s.secondLine}>
              {mainHeader.secondLine}{" "}
              <div className={s.headerAccent}>{mainHeader.accent}</div>
            </div>
            <ArrowPointerSmall className={s.arrow} />
            <div className={s.thirdLine}>{mainHeader.thirdLine}</div>
          </div>
          <div className={s.briefOffer}>
            <ButtonWithStroke />
            <div className={s.offerText}>
              <span className={s.heading}>
                Получите скидку <span className={s.accent}>5000 рублей!</span>
              </span>
              <br />
              <span className={s.description}>
                Достаточно просто заполнить бриф
              </span>
            </div>
          </div>
        </section>
      </div>

      <section className={s.services}>
        <h2>Услуги</h2>
        <ServicesLinksList linksData={linksData} />
      </section>
      <div className={s.mainContainer}>
        <AdvantageSection className={s.advantagesSection} />
      </div>
      <CooperationCard />
      <section className={s.steps}>
        <StepCards />
      </section>
      <div className={s.mainContainer}>
        <FAQ faqData={faqData} className={s.faq} />
      </div>
      <FooterWithForm />
    </div>
  );
};
