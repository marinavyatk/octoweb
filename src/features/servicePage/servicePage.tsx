import s from "./servicePage.module.scss";
import { Header } from "../../components/ui/complex/header/header.tsx";
import { FooterWithForm } from "../../components/ui/complex/footerWithForm/footerWithForm.tsx";
import OnlineStoreImg from "../../assets/webp/onlineStoreImg.webp";
import { Team } from "../../components/ui/primitive/team/team.tsx";
import { StepCards } from "../../components/ui/complex/stepCards/stepCards.tsx";
import { FAQ, faqData } from "../../components/ui/complex/faq/faq.tsx";
import ArrowIconForPrices from "../../assets/arrow4.svg?react";
import Temp from "../../assets/webp/temp.png";
import FrontendDev from "../../assets/webp/frontendDev.webp";
import { ArrowLinkWithText } from "../../components/ui/primitive/ArrowLinkWithText/arrowLinkWithText.tsx";
import { AudienceCard } from "../../components/ui/primitive/audienceCard/audienceCard.tsx";
import { PriceTable } from "../../components/ui/primitive/priceTable/priceTable.tsx";
import { useEffect } from "react";
import { CooperationCard } from "../../components/ui/complex/cooperationCard/cooperationCard.tsx";
import { AdvantageSection } from "../../components/ui/complex/advantageSection/advantageSection.tsx";

const teamMembersInfo = [
  {
    id: "Руководитель проекта",
    workExperience: "???",
    name: "Имя Фамилия",
    specialization: "Руководитель проекта",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
    img: Temp,
  },
  {
    id: "Проектировщик",
    workExperience: "???",
    name: "Имя Фамилия",
    specialization: "Проектировщик",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
    img: Temp,
  },
  {
    id: "Дизайнер",
    workExperience: "???",
    name: "Имя Фамилия",
    specialization: "Дизайнер",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
    img: Temp,
  },
  {
    id: "Front-end-программист",
    workExperience: "4+ года опыта",
    name: "Елисеев Николай",
    specialization: "Frontend-Гуру",
    description:
      'Николай "HTML-Rockstar" Елисеев, фронтенд-гуру с исключительным талантом.',
    img: FrontendDev,
  },
  {
    id: "Back-end-программист",
    workExperience: "???",
    name: "Имя Фамилия",
    specialization: "Back-end-программист",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
    img: Temp,
  },
  {
    id: "Тестировщик",
    workExperience: "???",
    name: "Имя Фамилия",
    specialization: "Тестировщик",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
    img: Temp,
  },
  {
    id: "Контент-менеджер",
    workExperience: "???",
    name: "Имя Фамилия",
    specialization: "Контент-менеджер",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
    img: Temp,
  },
  {
    id: "SEO-специалист",
    workExperience: "???",
    name: "Имя Фамилия",
    specialization: "SEO-специалист",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
    img: Temp,
  },
];

const serviceData = {
  serviceName: "Разработка интернет-магазинов",
  description:
    "Увеличиваем количество продаж через автоматизацию расчета стоимости доставки, онлайн-платежи и выгрузку товаров на маркетплейсы",
  aboutService:
    "Мы создаем удобные online-шопинговые платформы, где легко найти любой товар с помощью эффективных фильтров, а процесс оплаты и заказа доставки становится доступным всего в несколько кликов. Возвращение пользователей в такие интернет-магазины — результат нашей работы!",
  audience: {
    header: "Для тех, кто занимается продажами:",
    items: ["товаров", "продуктов", "экспертизы", "услуг"],
  },
  team: {
    intro:
      "Разработка интернет-магазина — это командная работа, где каждый вносит свой профессиональный вклад для успешной реализации проекта.",
    teamMembersInfo: teamMembersInfo,
  },
  cost: "170 000",
  priceTable: [
    { service: "Разработка логотипа", price: "5 000" },
    { service: "Создание брендбука", price: "5 000" },
    { service: "Копирайтинг", price: "350" },
    { service: "Вывод на маркетплейсы", price: "25 000" },
    { service: "Контекстная реклама", price: "20 000" },
    { service: "SEO-продвижение", price: "50 000" },
  ],
};

export const ServicePage = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <div className={s.servicePage}>
      <Header />
      <div className={s.mainContainer}>
        <h1>{serviceData.serviceName}</h1>
        <div className={s.discussProject}>
          <p>{serviceData.description}</p>
          <ArrowLinkWithText
            text={"ОБСУДИТЬ ПРОЕКТ"}
            href={"#form"}
            className={s.arrowLink}
          />
        </div>
        <div className={s.serviceImg}>
          <img src={OnlineStoreImg} alt={""} />
        </div>
        <div className={s.aboutService}>
          <h2>ОБ УСЛУГЕ</h2>
          <div className={s.container}>
            <p>{serviceData.aboutService}</p>
            <ArrowLinkWithText
              text={"Консультация"}
              className={s.arrow}
              href={"#form"}
            />
          </div>
        </div>
      </div>

      <CooperationCard />
      <div className={s.mainContainer}>
        <AdvantageSection />
        <AudienceCard
          header={serviceData.audience.header}
          items={serviceData.audience.items}
          className={s.audience}
        />
        <Team
          teamMembersInfo={serviceData.team.teamMembersInfo}
          intro={serviceData.team.intro}
          className={s.team}
        />
      </div>
      <StepCards className={s.stepCards} />
      <section className={s.prices}>
        <div className={s.container}>
          <div className={s.cost}>
            Стоимость от <span>{serviceData.cost} ₽</span>
          </div>
          <ArrowLinkWithText
            text={"Обсудить проект"}
            className={s.arrow}
            href={"#form"}
          />
        </div>
        <div className={s.backgroundContainer}>
          <div className={s.background}></div>
        </div>
        <div className={s.additionalServices}>
          <h2>
            ДОПОЛНИТЕЛЬНЫЕ <br /> УСЛУГИ
          </h2>
          <ArrowIconForPrices className={s.arrow} />
          <PriceTable priceItems={serviceData.priceTable} />
        </div>
      </section>
      <div className={s.mainContainer}>
        <FAQ className={s.faq} faqData={faqData} />
      </div>
      <FooterWithForm />
    </div>
  );
};
