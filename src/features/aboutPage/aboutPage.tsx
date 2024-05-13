import s from "./aboutPage.module.scss";
import { Header } from "../../components/ui/complex/header/header.tsx";
import { FooterWithForm } from "../../components/ui/complex/footerWithForm/footerWithForm.tsx";
import TeamMainPhoto from "../../assets/webp/teamMainPhoto.webp";
import { StackList } from "../../components/ui/complex/stackList/stackList.tsx";
import { TeamMemberCards } from "../../components/ui/complex/teamMembersCards/teamMembersCards.tsx";
import Temp from "../../assets/webp/temp.png";
import FrontendDev from "../../assets/webp/frontendDev.webp";
import { useEffect } from "react";

const teamMembersInfo = [
  {
    workExperience: "???",
    name: "Имя Фамилия",
    specialization: "Руководитель проекта",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
    img: Temp,
  },
  {
    workExperience: "???",
    name: "Имя Фамилия",
    specialization: "Проектировщик",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
    img: Temp,
  },
  {
    workExperience: "???",
    name: "Имя Фамилия",
    specialization: "Дизайнер",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
    img: Temp,
  },
  {
    workExperience: "4+ года опыта",
    name: "Елисеев Николай",
    specialization: "Frontend-Гуру",
    description:
      'Николай "HTML-Rockstar" Елисеев, фронтенд-гуру с исключительным талантом.',
    img: FrontendDev,
  },
  {
    workExperience: "???",
    name: "Имя Фамилия",
    specialization: "Back-end-программист",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
    img: Temp,
  },
  {
    workExperience: "???",
    name: "Имя Фамилия",
    specialization: "Тестировщик",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
    img: Temp,
  },
  {
    workExperience: "???",
    name: "Имя Фамилия",
    specialization: "Контент-менеджер",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
    img: Temp,
  },
  {
    workExperience: "???",
    name: "Имя Фамилия",
    specialization: "SEO-специалист",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.",
    img: Temp,
  },
];

export const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // прокрутить страницу в начало при загрузке
  }, []);

  return (
    <div className={s.aboutPage}>
      <Header />
      <div className={s.mainContainer}>
        <h1>
          О веб-студии <br /> OctoWeb
        </h1>
        <p>Раскроем подробности о том, кто стоит за реализацией проектов</p>
      </div>
      <div className={s.imageContainer}>
        <img src={TeamMainPhoto} alt="Команда" />
      </div>

      <div className={s.mainContainer}>
        <div className={s.aboutCompany}>
          <h2>О компании</h2>
          <p>
            Выступаем стратегическим партнером для развития бизнеса в цифровом
            пространстве с 2018 года. За это время выпустили более 150
            проектов.Задача нашей компании — разрабатывать цифровые решения,
            способные помогать бизнесу становиться ключевым игроком в своей
            сфере
          </p>
        </div>
        <StackList />
      </div>
      <div className={s.aboutTeam}>
        <TeamMemberCards
          teamMembers={teamMembersInfo}
          className={s.teamCards}
        />
      </div>
      <FooterWithForm />
    </div>
  );
};
