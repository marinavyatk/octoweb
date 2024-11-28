"use client";

import s from "./blog.module.scss";
import { BlogCard, Size } from "@/components/layouts/blogCard/blogCard";
import { FilterButton } from "@/components/ui/buttons/filterButton/filterButton";
import { Category } from "@/components/layouts/caseCircle/caseCircle";
import { useState } from "react";
import { tempData } from "@/common/componentsData/blog";
import { clsx } from "clsx";
import { v4 as uuid } from "uuid";
import { Button } from "@/components/ui/buttons/button/button";

export default function Blog() {
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
      return <BlogCard {...article} size={"fullWidth"} key={uuid()} priority />;
    }

    if (index === 1) {
      return <BlogCard {...article} size={"small"} key={uuid()} />;
    }

    const modIndex = (index - 2) % 4;
    let size;
    if (modIndex === 0 || modIndex === 1) {
      size = "medium";
    } else {
      size = "small";
    }

    return <BlogCard {...article} size={size as Size} key={uuid()} />;
  });

  const handleLoadMore = () => {
    //need request new data
  };

  const firstArticle = articles[0];
  articles.shift();

  return (
    <div className={clsx("mainContainer", s.blogPage)}>
      <div className={s.header}>
        <h1>Блог</h1>
        <div className={s.filterButtons}>{filterButtons}</div>
      </div>
      <div className={s.firstArticle}>{firstArticle}</div>
      <div className={s.articles}>{articles}</div>
      <Button
        text={"Загрузить ещё"}
        className={s.loadMoreButton}
        onClick={handleLoadMore}
      />
    </div>
  );
};
