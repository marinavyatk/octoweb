import s from "./casesPage.module.scss";
import { FooterWithForm } from "../../components/ui/complex/footerWithForm/footerWithForm.tsx";
import { Header } from "../../components/ui/complex/header/header.tsx";
import {
  CaseCircle,
  Category,
} from "../../components/ui/primitive/caseCircle/caseCircle.tsx";
import CaseCircleBotanica from "../../assets/webp/case-circle-botanica.png";
import CaseCirclePlastic from "../../assets/webp/case-circle-plastic.png";
import CaseCircleEkvadrat from "../../assets/webp/case-circle-e-kvadrat.png";
import CaseCircleDemarko from "../../assets/webp/case-circle-demarko.png";
import CaseCircleShortrid from "../../assets/webp/case-circle-shortrid.png";
import { FilterButton } from "../../components/ui/primitive/filterButton/filterButton.tsx";
import { useState } from "react";
import { CaseCircleList } from "../../components/ui/complex/caseCircleList/caseCircleList.tsx";
import { CaseCardFullWidth } from "../../components/ui/primitive/caseCardFullWidth/caseCardFullWidth.tsx";
import CaseCardFullWidthImg from "../../assets/webp/caseCardFullWidth.png";
import Demarko from "../../assets/webp/case-de-marko.webp";
import {
  CaseCard,
  Size,
} from "../../components/ui/primitive/caseCard/caseCard.tsx";
import Ekvadrat from "../../assets/webp/case-e-kvadrat.webp";
import Botanica from "../../assets/webp/case-botanica.webp";
import Smxtream from "../../assets/webp/case-smxtream.webp";

const circles: CaseCircle[] = [
  { img: CaseCircleBotanica, caseId: "botanica", category: "Web" },
  { img: CaseCirclePlastic, caseId: "plastic", category: "Ads" },
  { img: CaseCircleEkvadrat, caseId: "ekvadrat", category: "Seo" },
  { img: CaseCircleDemarko, caseId: "demarko", category: "Web" },
  { img: CaseCircleShortrid, caseId: "goodwood", category: "Ads" },
  { img: CaseCircleBotanica, caseId: "botanica2", category: "Web" },
  { img: CaseCirclePlastic, caseId: "plastic2", category: "Ads" },
  { img: CaseCircleEkvadrat, caseId: "ekvadrat2", category: "Seo" },
];

const casesData = [
  {
    category: "ИНТЕРНЕТ-МАГАЗИН",
    tags: ["DEVELOP", "UI/UX", "КОМПЛЕКСНЫЙ МАРКЕТИНГ"],
    img: Demarko,
    header: "de-marko.ru",
  },
  {
    category: "КОРПОРАТИВНЫЙ САЙТ",
    tags: ["DEVELOP", "UI/UX", "КОМПЛЕКСНЫЙ МАРКЕТИНГ", "SEO"],
    img: Ekvadrat,
    header: "ekvadrat23.ru",
  },
  {
    category: "LANDING PAGE",
    tags: ["DEVELOP", "UI/UX", "SEO"],
    img: Botanica,
    header: "ботаника-хилс.рф",
  },
  {
    category: "КОРПОРАТИВНЫЙ САЙТ",
    tags: ["DEVELOP", "UI/UX", "SEO"],
    img: Smxtream,
    header: "smxtream.pro",
  },
  {
    category: "Корпоративный сайт",
    tags: ["Develop", "ux/ui", "seo"],
    img: CaseCardFullWidthImg,
    header: "de-marko.ru",
  },
  {
    category: "ИНТЕРНЕТ-МАГАЗИН",
    tags: ["DEVELOP", "UI/UX", "КОМПЛЕКСНЫЙ МАРКЕТИНГ"],
    img: Demarko,
    header: "de-marko.ru",
  },
  {
    category: "КОРПОРАТИВНЫЙ САЙТ",
    tags: ["DEVELOP", "UI/UX", "КОМПЛЕКСНЫЙ МАРКЕТИНГ", "SEO"],
    img: Ekvadrat,
    header: "ekvadrat23.ru",
  },
  {
    category: "LANDING PAGE",
    tags: ["DEVELOP", "UI/UX", "SEO"],
    img: Botanica,
    header: "ботаника-хилс.рф",
  },
  {
    category: "КОРПОРАТИВНЫЙ САЙТ",
    tags: ["DEVELOP", "UI/UX", "SEO"],
    img: Smxtream,
    header: "smxtream.pro",
  },
  {
    category: "Корпоративный сайт",
    tags: ["Develop", "ux/ui", "seo"],
    img: CaseCardFullWidthImg,
    header: "de-marko.ru",
  },
];
const buttons: Category[] = ["All projects", "Web", "Seo", "Ads"];
//last element is a mock because the replay occurs after 5 cards
const sizes = ["extraLarge", "large", "small", "medium", "fullWidth"];

export const CasesPage = () => {
  const [currentFilter, setCurrentFilter] = useState<Category>("All projects");
  const filteredCases: CaseCircle[] =
    currentFilter === "All projects"
      ? circles
      : circles.filter((el) => el.category === currentFilter);

  const filterButtons = buttons.map((button) => {
    return (
      <FilterButton
        key={button}
        value={button}
        active={button === currentFilter}
        onClick={() => setCurrentFilter(button)}
      >
        {button}
      </FilterButton>
    );
  });

  const cases = casesData.map((card, index) => {
    const size = sizes[index % sizes.length];
    const cardClassName = s[size];

    return (index + 1) % 5 !== 0 ? (
      <CaseCard
        category={card.category}
        tags={card.tags}
        img={card.img}
        size={size as Size}
        header={card.header}
        className={cardClassName}
        key={card.header}
      />
    ) : (
      <CaseCardFullWidth
        category={card.category}
        tags={card.tags}
        img={card.img}
        header={card.header}
        className={cardClassName}
        key={card.header}
      />
    );
  });

  return (
    <div className={s.casesPage}>
      <Header />
      <div className={s.casesPageContent}>
        <div className={s.mainContainer}>
          <div className={s.header}>
            <h1>КЕЙСЫ</h1>
            <div className={s.filterButtons}>{filterButtons}</div>
          </div>
        </div>
        <CaseCircleList
          caseCircles={filteredCases}
          className={s.caseCircleList}
        />
        <div className={s.casesList}>{cases}</div>
        <FooterWithForm />
      </div>
    </div>
  );
};
