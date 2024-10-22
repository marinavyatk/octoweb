import { clsx } from "clsx";
import s from "./blogCardFullWidth.module.scss";
import { Tag } from "../../ui/tag/tag";
import ArrowIcon from "@/svg/arrow.svg";
import { BlogCardProps } from "@/components/layouts/blogCard/blogCard";
import Link from 'next/link';
import Image from 'next/image';

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
        <Image src={img} alt="" fill sizes={'100vw'}/>
        <div className={s.markContainer}>
          <div className={s.tagList}>{tagList}</div>
          <Link className={s.arrow} {...linkProps} href={`/blog/${articleId}`}>
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
