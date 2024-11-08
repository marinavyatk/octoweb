import { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";
import s from "./blogCard.module.scss";
import { Tag } from "../../ui/tag/tag";
import Link from "next/link";
import Image from "next/image";
import { ArrowButton } from "@/components/ui/buttons/arrowButton/arrowButton";

export type Size = "small" | "medium" | "fullWidth";
export type BlogCardProps = {
  articleId: string;
  tags: string[];
  img: string;
  size?: Size;
  header: string;
  description: string;
  linkProps?: ComponentPropsWithoutRef<"a">;
} & ComponentPropsWithoutRef<"div">;

export const BlogCard = (props: BlogCardProps) => {
  const {
    articleId,
    tags,
    img,
    size = "small",
    header,
    description,
    className,
    linkProps,
    ...restProps
  } = props;
  const classNames = clsx(s.blogCard, className, s[size]);

  const tagList = tags.map((tag) => {
    return (
      <Tag variant={"monochrome-secondary"} key={tag} className={s.tag}>
        {tag}
      </Tag>
    );
  });

  return (
    <div {...restProps} className={classNames}>
      <div className={s.imgContainer}>
        <Image src={img} alt="" fill />
        <div className={s.markContainer}>
          <div className={s.tagList}>{tagList}</div>
          <ArrowButton as={Link}
                       variant={"secondary"}
                       className={s.arrow}
                       {...linkProps}
                       href={`/blog/${articleId}`}
          />
        </div>
      </div>
      <h2 className={s.header}>{header}</h2>
      <p className={s.description}>{description}</p>
    </div>
  );
};
