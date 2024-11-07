import { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";
import s from "./caseCardFullWidth.module.scss";
import { Tag } from "../../ui/tag/tag";
import Link from "next/link";
import Image from "next/image";

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
        <Image src={img} alt={header} fill />
      </div>
      <Tag variant={"monochrome-primary"} className={s.category}>
        {category}
      </Tag>
      <div className={s.caption}>
        <div className={s.tagList}>{tagList}</div>
        <div className={s.headerContainer}>
          <h2 className={s.header}>{header}</h2>
          <div className={clsx(s.angle, s.angleMobile)}>
            <Image src={"/noise-texture.webp"} alt="" fill />
          </div>
        </div>
        <div className={clsx(s.angle, s.angleDesktop)}>
          <Image src={"/noise-texture.webp"} alt="" fill />
        </div>
      </div>
    </Link>
  );
};
