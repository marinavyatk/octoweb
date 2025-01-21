"use client";

import s from "./blog.module.scss";
import { BlogCard, Size } from "@/components/layouts/blogCard/blogCard";
import { FilterButton } from "@/components/ui/buttons/filterButton/filterButton";
import { Category } from "@/components/layouts/caseCircle/caseCircle";
import { useEffect, useState } from "react";
import { tempData } from "@/common/componentsData/blog";
import { clsx } from "clsx";
import { v4 as uuid } from "uuid";
import { Button } from "@/components/ui/buttons/button/button";
import { BigBubble } from "@/components/video/bigBubble/bigBubble";
import { SmallBubble } from "@/components/video/smallBubble/smallBubble";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


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
      return <BlogCard {...article} size={"fullWidth"} key={uuid()} priority index={index}/>;
    }

    if (index === 1) {
      return <BlogCard {...article} size={"small"} key={uuid()} index={index}/>;
    }

    const modIndex = (index - 2) % 4;
    let size;
    if (modIndex === 0 || modIndex === 1) {
      size = "medium";
    } else {
      size = "small";
    }

    return <BlogCard {...article} size={size as Size} key={uuid()} index={index}/>;
  });

  const handleLoadMore = () => {
    //need request new data
  };

  const firstArticle = articles[0];
  articles.shift();

  useEffect(() => {
    gsap.set(".fullWidth", {
      y: 100,
      opacity: 0
    });
    gsap.set(".right", {
      x: 100,
      opacity: 0
    });
    gsap.set(".left", {
      x: -100,
      opacity: 0
    });

    ScrollTrigger.batch(".blogCard", {
      interval: 0.4,
      onEnter: (batch) => {
        gsap.to(
          batch,
          { y: 0, x: 0, opacity: 1, stagger: 0.4, overwrite: true }
        );
      }
    });
  }, []);

  return (
    <div className={clsx("mainContainer", s.blogPage)}>
      <BigBubble className={s.bigBubble} />
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
      <div className={s.smallBubbleContainer}>
        <SmallBubble className={s.smallBubble} />
      </div>
    </div>
  );
};
