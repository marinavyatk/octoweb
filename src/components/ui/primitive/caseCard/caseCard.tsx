import { ComponentPropsWithoutRef, ElementType } from "react";
import { clsx } from "clsx";
import s from "./caseCard.module.scss";
import { Tag } from "../tag/tag.tsx";
import { Link } from "react-router-dom";

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
    [s.extraLarge]: size === "extraLarge",
  });
  const tagList = tags.map((tag) => {
    return (
      <Tag variant={"colored"} key={tag}>
        {tag}
      </Tag>
    );
  });

  return (
    <Link
      {...restProps}
      className={classNames}
      to={`/cases/${caseId}`}
      rel={"nofollow"}
    >
      <div className={sizeClassName}>
        <Tag variant={"monochrome-primary"} className={s.category}>
          {category}
        </Tag>
        <img src={img} alt={header} />
        <div className={s.tagList}>{tagList}</div>
      </div>
      <HeaderType className={s.header}>{header}</HeaderType>
    </Link>
  );
};
