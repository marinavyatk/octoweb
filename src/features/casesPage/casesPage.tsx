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
import { FilterButton } from "../../components/ui/primitive/filterButton/filterButton.tsx";
import { useState } from "react";
import { CaseCircleList } from "../../components/ui/complex/caseCircleList/caseCircleList.tsx";
import { CaseCardFullWidth } from "../../components/ui/primitive/caseCardFullWidth/caseCardFullWidth.tsx";
import CaseCardFullWidthImg from "../../assets/webp/caseCardFullWidth.png";

const circles: CaseCircle[] = [
  { img: CaseCircleBotanica, caseId: "botanica", category: "Web" },
  { img: CaseCirclePlastic, caseId: "plastic", category: "Ads" },
  { img: CaseCircleEkvadrat, caseId: "ekvadrat", category: "Seo" },
];

const buttons: Category[] = ["All projects", "Web", "Seo", "Ads"];

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

  return (
    <div>
      <Header />
      <div className={s.mainContainer}>
        <div className={s.header}>
          <h1>КЕЙСЫ</h1>
          <div className={s.filterButtons}>{filterButtons}</div>
        </div>
        <CaseCircleList caseCircles={filteredCases} />
      </div>
      <CaseCardFullWidth
        category={"Корпоративный сайт"}
        tags={["Develop", "ux/ui", "seo"]}
        img={CaseCardFullWidthImg}
        header={"de-marko.ru"}
      />
      <FooterWithForm />
    </div>
  );
};
