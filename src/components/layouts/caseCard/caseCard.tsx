"use client";

import { ComponentPropsWithoutRef, ElementType, useEffect, useRef } from "react";
import { clsx } from "clsx";
import s from "./caseCard.module.scss";
import { Tag } from "../../ui/tag/tag";
import Link from "next/link";
import { Picture } from "@/components/ui/picture/picture";

export type Size = "small" | "medium" | "large" | "extraLarge";
export type CaseCardProps<T extends ElementType> = {
  caseId: string;
  category: string;
  header: string;
  services: string[];
  img: string;
  size: Size;
  as?: T;
  index: number;
} & ComponentPropsWithoutRef<"a">;

export const CaseCard = <T extends ElementType>(props: CaseCardProps<T>) => {
  const {
    category,
    services,
    img,
    size,
    header,
    className,
    caseId,
    as: Header = "h2",
    index,
    ...restProps
  } = props;
  const classNames = clsx(s.card, className, "case", (index + 1) % 2 === 0 ? "right" : "left");
  const sizeClassName = clsx(s.container, s[size]);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const tagList = services?.map((tag) => {
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

  useEffect(() => {
    cardRef?.current?.setAttribute("data-animated", "true");
  }, []);

  return (
    <Link
      {...restProps}
      className={classNames}
      href={`/cases/${caseId}`}
      rel={"nofollow"}
      ref={cardRef}
    >
      <div className={sizeClassName}>
        <Tag variant={"monochromePrimary"} className={s.category}>
          {category}
        </Tag>
        {img &&
          <Picture src={img} alt={header} fill sizes={getSizes(size)} />
        }
        <div className={s.tagList}>{tagList}</div>
      </div>
      <Header className={s.header}>{header}</Header>
    </Link>
  );
};
