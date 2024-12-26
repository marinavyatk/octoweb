import { ComponentPropsWithoutRef, useRef } from "react";
import { clsx } from "clsx";
import s from "./caseCardFullWidth.module.scss";
import { Tag } from "../../ui/tag/tag";
import Link from "next/link";
import { Picture } from "@/components/ui/picture/picture";
import { useIntersectionObserver } from "@/common/customHooks/useIntersectionObserver";
import { animated, useSpring } from "@react-spring/web";

export type CaseCardProps = {
  category: string;
  tags: string[];
  img: string;
  header: string;
  caseId: string;
} & ComponentPropsWithoutRef<"a">;

export const CaseCardFullWidth = (props: CaseCardProps) => {
  const { caseId, category, tags, img, header, className, ...restProps } =
    props;
  const classNames = clsx(s.card, className);
  const cardRef = useRef<HTMLAnchorElement | null>(null);
  const isVisible = useIntersectionObserver(cardRef, 0.3, true);
  const AnimatedLink = animated(Link);
  const styles = useSpring({
    transform: `translateY(${isVisible ? 0 : 100}px)`,
    opacity: isVisible ? 1 : 0,
  });

  const tagList = tags.map((tag) => {
    return (
      <Tag variant={"colored"} key={tag}>
        {tag}
      </Tag>
    );
  });

  return (
    <AnimatedLink
      {...restProps}
      className={classNames}
      rel={"nofollow"}
      href={`/cases/${caseId}`}
      ref={cardRef}
      style={styles}
    >
      <Picture src={img}
               alt={header}
               fill
               sizes="(max-width: 450px) 100vw, (max-width: 767px) 450px, 100vw "
               containerProps={{ className: s.imgContainer }} />
      <Tag variant={"monochromePrimary"} className={s.category}>
        {category}
      </Tag>
      <div className={s.caption}>
        <div className={s.tagList}>{tagList}</div>
        <div className={s.headerContainer}>
          <h2 className={s.header}>{header}</h2>
          <div className={clsx(s.angle, s.angleMobile)}>
          </div>
        </div>
        <div className={clsx(s.angle, s.angleDesktop)}>
        </div>
      </div>
    </AnimatedLink>
  );
};
