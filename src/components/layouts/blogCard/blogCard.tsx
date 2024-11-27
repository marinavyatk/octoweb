import { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";
import s from "./blogCard.module.scss";
import { Tag } from "../../ui/tag/tag";
import Link from "next/link";
import { ArrowButton } from "@/components/ui/buttons/arrowButton/arrowButton";
import { Picture } from "@/components/ui/picture/picture";

export type Size = "small" | "medium" | "fullWidth";
export type BlogCardProps = {
  articleId: string;
  tags: string[];
  img: string;
  size?: Size;
  header: string;
  description: string;
  linkProps?: ComponentPropsWithoutRef<"a">;
  priority?: boolean
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
    priority = false,
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

  const getSizes = (size: Size) => {
    switch (size) {
      case "small":
        return "(max-width: 450px) 100vw, (max-width: 767px) 450px, (max-width: 1000px) 550px, (max-width: 1425px) 399px, (max-width: 1700px) 532px, 678px";
      case "medium":
        return "(max-width: 450px) 100vw, (max-width: 767px) 450px, (max-width: 1000px) 650px, (max-width: 1425px) 532px, (max-width: 1700px) 665px, 820px";
      case "fullWidth":
        return "(max-width: 450px) 100vw, (max-width: 767px) 450px, (max-width: 1000px) 100vw, 1665px";
    }
  };

  return (
    <div {...restProps} className={classNames}>
      <div className={s.imgContainer}>
        <Picture src={img} alt="" fill sizes={getSizes(size)} priority={priority}/>
        <div className={s.markContainer}>
          <div className={s.tagList}>{tagList}</div>
          <ArrowButton as={Link}
                       variant={"secondary"}
                       className={s.arrow}
                       {...linkProps}
                       href={`/blog/${articleId}`}
                       aria-label={`Смотреть статью "${header}"`}
          />
        </div>
      </div>
      <h2 className={s.header}>
        <a href={`/blog/${articleId}`} {...linkProps} >
          {header}
        </a>
      </h2>
      <p className={s.description}>{description}</p>
    </div>
  );
};
