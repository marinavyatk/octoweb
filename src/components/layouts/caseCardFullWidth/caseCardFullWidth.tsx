import { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";
import s from "./caseCardFullWidth.module.scss";
import { Tag } from "../../ui/tag/tag";
import Link from 'next/link';
import Image from 'next/image';

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
      rel={"nofollow"}
      href={`/cases/${caseId}`}
    >
      <div className={s.imgContainer}>
        <Image src={img} alt={header} fill/>
      </div>
      <div className={s.textContainer}>
        <Tag variant={"monochrome-primary"} className={s.category}>
          {category}
        </Tag>
        <div className={s.caption}>
          <div className={s.tagList}>{tagList}</div>
          <h2 className={s.header}>{header}</h2>
        </div>
      </div>
    </Link>
  );
};
