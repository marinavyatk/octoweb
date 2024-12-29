import { ComponentPropsWithoutRef, useRef } from "react";
import { clsx } from "clsx";
import s from "./blogCard.module.scss";
import { Tag } from "../../ui/tag/tag";
import Link from "next/link";
import { ArrowButton } from "@/components/ui/buttons/arrowButton/arrowButton";
import { Picture } from "@/components/ui/picture/picture";
import { animated, useSpring } from "@react-spring/web";
import { useIntersectionObserver } from "@/common/customHooks/useIntersectionObserver";

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
  index: number
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
    index,
    ...restProps
  } = props;
  const classNames = clsx(s.blogCard, className, s[size]);
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(cardRef, 0.5, true);

  const tagList = tags.map((tag) => {
    return (
      <Tag variant={"monochromeSecondary"} key={tag} className={s.tag}>
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

  const getTransform = (index: number) => {
    if (index === 0) return `translateY(${isVisible ? 0 : 100}px)`;
    return (index + 1) % 2 === 0 ? `translateX(${isVisible ? 0 : -100}px)` : `translateX(${isVisible ? 0 : 100}px)`;
  };

  const styles = useSpring({
    transform: getTransform(index),
    opacity: isVisible ? 1 : 0,
    delay: index !== 0 && (index + 1) % 2 !== 0 ? 200 : 0
  });

  return (
    <animated.div {...restProps} className={classNames} ref={cardRef} style={styles}>
      <div className={s.imgContainer}>
        <Picture src={img} alt="" fill sizes={getSizes(size)} priority={priority} />
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
    </animated.div>
  );
};
