import { clsx } from "clsx";
import s from "./blogCardFullWidth.module.scss";
import { Tag } from "../tag/tag.tsx";
import ArrowIcon from "../../../../assets/arrow.svg?react";
import { BlogCardProps } from "../blogCard/blogCard.tsx";
import { Link } from "react-router-dom";

export type BlogCardFullWidthProps = Omit<BlogCardProps, "size">;

export const BlogCardFullWidth = (props: BlogCardFullWidthProps) => {
  const {
    articleId,
    tags,
    img,
    header,
    description,
    className,
    linkProps,
    ...restProps
  } = props;
  const classNames = clsx(s.blogCard, className);

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
        <img src={img} alt="" />
        <div className={s.markContainer}>
          <div className={s.tagList}>{tagList}</div>
          <Link className={s.arrow} {...linkProps} to={`/blog/${articleId}`}>
            <ArrowIcon />
          </Link>
        </div>
      </div>
      <div className={s.text}>
        <h2 className={s.header}>{header}</h2>
        <p className={s.description}>{description}</p>
      </div>
    </div>
  );
};
