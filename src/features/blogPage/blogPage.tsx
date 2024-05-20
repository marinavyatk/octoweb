import s from "./blogPage.module.scss";
import { Header } from "../../components/ui/complex/header/header.tsx";
import { FooterWithForm } from "../../components/ui/complex/footerWithForm/footerWithForm.tsx";
import {
  BlogCard,
  BlogCardProps,
  Size,
} from "../../components/ui/primitive/blogCard/blogCard.tsx";
import OptimizationArticleCover from "../../assets/webp/blogImgOptimization.png";
import { BlogCardFullWidth } from "../../components/ui/primitive/blogCardFullWidth/blogCardFullWidth.tsx";
import { FilterButton } from "../../components/ui/primitive/filterButton/filterButton.tsx";
import { Category } from "../../components/ui/primitive/caseCircle/caseCircle.tsx";
import { useState } from "react";
import SemanticArticleCover from "../../assets/webp/blogImgSemantic.png";
import SecurityArticleCover from "../../assets/webp/blogImgSecurity.png";
import ManagmentArticleCover from "../../assets/webp/blogImgManagment.png";
import ArticleCover from "../../assets/webp/blogCover.png";
import ArticleCover2 from "../../assets/webp/blogCover2.png";
import { ArrowButtonWithText } from "../../components/ui/primitive/ArrowButtonWithText/arrowButtonWithText.tsx";

export const BlogPage = () => {
  const tempData: BlogCardProps[] = [
    {
      header: "Как собрать семантику самому, без парсеров",
      tags: ["Seo", "Ads", "Web"],
      description:
        "Узнайте, как создать свой собственный инструмент для анализа семантики без использования парсеров и освойте техники обработки текста с нуля.",
      img: SemanticArticleCover,
    },
    {
      header:
        "Мобильная Эра: оптимизация сайтов для максимального удобства пользователей",
      tags: ["Seo", "Ads", "Web"],
      description:
        "Откройте секреты успешной оптимизации веб-сайтов для мобильных устройств.",
      img: OptimizationArticleCover,
    },
    {
      header:
        "Безопасность в Сети: Как Обеспечить Защиту Данных на Вашем Веб-Сайте",
      tags: ["Seo", "Ads", "Web"],
      description:
        "Получите советы по реализации эффективных мер безопасности, чтобы обеспечить защиту как для себя, так и для ваших пользователей.",
      img: SecurityArticleCover,
    },
    {
      header:
        "Эффективное управление содержанием: как создать и поддерживать динамичный сайт",
      tags: ["Seo", "Ads", "Web"],
      description:
        "Получите советы по реализации эффективных мер безопасности, чтобы обеспечить защиту как для себя, так и для ваших пользователей.",
      img: ManagmentArticleCover,
    },
    {
      header:
        "Мобильная Эра: оптимизация сайтов для максимального удобства пользователей",
      tags: ["Seo", "Ads", "Web"],
      description:
        "Откройте секреты успешной оптимизации веб-сайтов для мобильных устройств.",
      img: ArticleCover,
    },
    {
      header:
        "Мобильная Эра: оптимизация сайтов для максимального удобства пользователей",
      tags: ["Seo", "Ads", "Web"],
      description:
        "Откройте секреты успешной оптимизации веб-сайтов для мобильных устройств.",
      img: SecurityArticleCover,
    },
    {
      header:
        "Мобильная Эра: оптимизация сайтов для максимального удобства пользователей",
      tags: ["Seo", "Ads", "Web"],
      description:
        "Откройте секреты успешной оптимизации веб-сайтов для мобильных устройств.",
      img: ArticleCover2,
    },
  ];
  const [currentFilter, setCurrentFilter] = useState<Category>("All projects");
  const buttons: Category[] = ["All projects", "Web", "Seo", "Ads"];
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
  const articles = tempData.map((article, index) => {
    if (index === 0) {
      return <BlogCardFullWidth {...article} key={article.id} />;
    }

    if (index === 1) {
      return <BlogCard {...article} size={"small"} key={article.id} />;
    }

    const modIndex = (index - 2) % 4;
    let size;
    if (modIndex === 0 || modIndex === 1) {
      size = "medium";
    } else {
      size = "small";
    }

    return <BlogCard {...article} size={size as Size} key={article.id} />;
  });

  const handleLoadMore = () => {
    //need request new data
  };

  return (
    <div className={s.blogPage}>
      <Header />
      <div className={s.mainContainer}>
        <div className={s.header}>
          <h1>Блог</h1>
          <div className={s.filterButtons}>{filterButtons}</div>
        </div>
        <div className={s.articles}>{articles}</div>
        <ArrowButtonWithText
          text={"Загрузить ещё"}
          className={s.loadMoreButton}
          onClick={handleLoadMore}
        />
      </div>
      <FooterWithForm />
    </div>
  );
};
