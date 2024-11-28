import { ComponentPropsWithoutRef, ElementType } from "react";
import { clsx } from "clsx";
import s from "./caseCard.module.scss";
import { Tag } from "../../ui/tag/tag";
import Link from "next/link";
import { Picture } from "@/components/ui/picture/picture";

export type Size = "small" | "medium" | "large" | "extraLarge";
export type CaseCardProps<T extends ElementType> = {
  category: string;
  tags: string[];
  img: string;
  size: Size;
  header: string;
  as?: T;
  caseId: string;
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
    as: HeaderType = "h2",
    ...restProps
  } = props;
  const classNames = clsx(s.card, className);

  const sizeClassName = clsx(s.container, {
    [s.small]: size === "small",
    [s.medium]: size === "medium",
    [s.large]: size === "large",
    [s.extraLarge]: size === "extraLarge"
  });
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

  return (
    <Link
      {...restProps}
      className={classNames}
      href={`/cases/${caseId}`}
      rel={"nofollow"}
    >
      <div className={sizeClassName}>
        <Tag variant={"monochromePrimary"} className={s.category}>
          {category}
        </Tag>
        <Picture src={img} alt={header} fill sizes={getSizes(size)} />
        <div className={s.tagList}>{tagList}</div>
      </div>
      <HeaderType className={s.header}>{header}</HeaderType>
    </Link>
  );
};
