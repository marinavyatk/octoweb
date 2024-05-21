import s from "./casePage.module.scss";
import { FooterWithForm } from "../../components/ui/complex/footerWithForm/footerWithForm.tsx";
import { Header } from "../../components/ui/complex/header/header.tsx";
import EkvadratImg from "../../assets/webp/ekvadratExaple.png";
import { Tag } from "../../components/ui/primitive/tag/tag.tsx";
import { WebsiteLink } from "../../components/ui/primitive/websiteLink/websiteLink.tsx";

export const CasePage = () => {
  const caseData = {
    caseName: "Е-Квадрат",
    tags: ["Предпроектное исследование", "UX/UI-дизайн", "Разработка сайта"],
    field: "Корпоративный сайт для архитектурного бюро",
    site: {
      siteName: "ekvadrat23.ru",
      link: "https://ekvadrat23.ru/",
    },
    description:
      'Е-квадрат" представляет собой архитектурную мастерскую, входящую в состав группы компаний "4 СЕЗОНА", специализирующуюся на архитектурном проектировании, дизайне интерьеров и ландшафтном дизайне. Эта мастерская рассматривает указанные дисциплины как взаимосвязанные компоненты единого процесса.',
    taskDescription:
      'Необходимо создать уникальный корпоративный сайт для архитектурной мастерской "Е-квадрат", отражающий комплексный подход компании к архитектурному проектированию, дизайну интерьеров, строительству и ландшафтному дизайну.',
    resultDescription:
      "Большое внимание было уделено навигации и структуре проекта. В рамках работы было необходимо объединить три домена. Мы добились визуального выделения различных направлений, привязав их к разным цветам, что значительно упростило ориентацию пользователей.\n" +
      "Получившееся визуальное решение уникально, и его дизайн будет актуален в долгосрочной перспективе. Основные блоки были организованы в соответствии с моделью AIDA. В процессе работы нам удалось продемонстрировать не только креативность, но и внимание к деталям, придавая важность как визуальной, так и информационной выразительности на каждой странице.",
    stack: [
      { stackField: "Frontend", tech: ["HTML5", "CSS", "JavaScript"] },
      { stackField: "Backend", tech: ["WordPress"] },
      { stackField: "Integration", tech: ["SVG Maps"] },
    ],
    img: {
      main: EkvadratImg,
      small: EkvadratImg,
      medium: EkvadratImg,
      big: EkvadratImg,
    },
  };
  const tagList = caseData.tags.map((tag) => {
    return (
      <Tag variant={"monochrome-secondary"} key={tag} className={s.tag}>
        {tag}
      </Tag>
    );
  });

  const stackTech = caseData.stack.map((el) => {
    return (
      <span>
        <b>{el.stackField}</b> — {el.tech.join(", ")}
      </span>
    );
  });

  return (
    <div className={s.casePage}>
      <Header />
      <div className={s.casePageContent}>
        <div className={s.mainContainer}>
          <h1>{caseData.caseName}</h1>
          <div className={s.tagList}>{tagList}</div>

          <div className={s.topCaption}>
            <div className={s.field}>
              <span className={s.subheader}>Сфера</span>
              <span className={s.text}>{caseData.field}</span>
            </div>
            <WebsiteLink
              webSiteName={caseData.site.siteName}
              href={caseData.site.link}
            />
          </div>
        </div>

        <div className={s.mainImgContainer}>
          <img src={caseData.img.main} alt="" />
        </div>
        <p className={s.description}>{caseData.description}</p>
        <div className={s.mainContainer}>
          <div className={s.taskBlock}>
            <div className={s.taskHeader}>
              <h2>Задача</h2>
              <p className={s.taskDescription}>{caseData.taskDescription}</p>
            </div>
            <div className={s.images}>
              <div className={s.smallImg}>
                <img src={caseData.img.small} alt="" />
              </div>
              <div className={s.mediumImg}>
                <img src={caseData.img.medium} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={s.bigImg}>
          <img src={caseData.img.big} alt="" />
        </div>

        <div className={s.mainContainer}>
          <div className={s.resultBlock}>
            <div className={s.resultInfo}>
              <h2>Результат</h2>
              <div>
                <span className={s.subheader}>Стек технологий</span>
                <div className={s.stackTech}>{stackTech}</div>
              </div>
              <WebsiteLink
                webSiteName={caseData.site.siteName}
                href={caseData.site.link}
              />
            </div>
            <p className={s.resultDescription}>{caseData.resultDescription}</p>
          </div>
        </div>
      </div>
      <FooterWithForm />
    </div>
  );
};
