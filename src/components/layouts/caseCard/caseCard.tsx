"use client";

import { ComponentPropsWithoutRef, ElementType, useRef } from "react";
import { clsx } from "clsx";
import s from "./caseCard.module.scss";
import { Tag } from "../../ui/tag/tag";
import Link from "next/link";
import { Picture } from "@/components/ui/picture/picture";
import { animated, useSpring } from "@react-spring/web";
import { useIntersectionObserver } from "@/common/customHooks/useIntersectionObserver";

export type Size = "small" | "medium" | "large" | "extraLarge";
export type CaseCardProps<T extends ElementType> = {
  category: string;
  tags: string[];
  img: string;
  size: Size;
  header: string;
  as?: T;
  caseId: string;
  index: number;
} & ComponentPropsWithoutRef<"a">;

export const CaseCard = <T extends ElementType>(props: CaseCardProps<T>) => {
  const {
    category,
    tags,
    img,
    size,
    header,
    className,
    caseId,
    as: Header = "h2",
    index,
    ...restProps
  } = props;
  const classNames = clsx(s.card, className);

  const sizeClassName = clsx(s.container, s[size]);
  const tagList = tags.map((tag) => {
    return (
      <Tag variant={"colored"} key={tag}>
        {tag}
      </Tag>
    );
  });

  const getSizes = (size: Size) => {
    switch (size) {
      case "small":
        return "(max-width: 767px) 212px,(max-width: 1265px)  509px, (max-width: 1425px) 328px, (max-width: 1905px) 392px, 536px";
      case "medium":
        return "(max-width: 767px) 265px,(max-width: 1265px)  638px, (max-width: 1425px) 416px, (max-width: 1905px) 496px, 678px";
      case "large":
        return "(max-width: 767px) 288px,(max-width: 1265px)  636px, (max-width: 1425px) 416px, (max-width: 1905px) 496px, 678px";
      case "extraLarge":
        return "(max-width: 767px) 266px,(max-width: 1265px)  691px, (max-width: 1425px) 520px, (max-width: 1905px) 600px, 820px";
    }
  };

  const AnimatedLink = animated(Link);
  const cardRef = useRef<HTMLAnchorElement | null>(null);
  const isVisible = useIntersectionObserver(cardRef, 0.5, true);

  const styles = useSpring({
    transform: (index + 1) % 2 === 0 ? `translateX(${isVisible ? 0 : 100}px)` : `translateX(${isVisible ? 0 : -100}px)`,
    opacity: isVisible ? 1 : 0,
    delay: (index + 1) % 2 === 0 ? 200 : 0,
  });

  return (
    <AnimatedLink
      {...restProps}
      className={classNames}
      href={`/cases/${caseId}`}
      rel={"nofollow"}
      style={styles}
      ref={cardRef}
    >
      <div className={sizeClassName}>
        <Tag variant={"monochromePrimary"} className={s.category}>
          {category}
        </Tag>
        <Picture src={img} alt={header} fill sizes={getSizes(size)} />
        <div className={s.tagList}>{tagList}</div>
      </div>
      <Header className={s.header}>{header}</Header>
    </AnimatedLink>
  );
};
