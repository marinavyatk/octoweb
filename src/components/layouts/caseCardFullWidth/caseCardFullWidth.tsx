import { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";
import s from "./caseCardFullWidth.module.scss";
import { Tag } from "../../ui/tag/tag";
import Link from "next/link";
import Image from "next/image";
import { Picture } from "@/components/ui/picture/picture";

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
      <Picture src={img}
               alt={header}
               fill
               sizes="(max-width: 450px) 100vw, (max-width: 767px) 450px, 100vw "
               containerProps={{ className: s.imgContainer }} />
      <Tag variant={"monochrome-primary"} className={s.category}>
        {category}
      </Tag>
      <div className={s.caption}>
        <div className={s.tagList}>{tagList}</div>
        <div className={s.headerContainer}>
          <h2 className={s.header}>{header}</h2>
          <div className={clsx(s.angle, s.angleMobile)}>
            <Image src={"/noise-texture.webp"} alt="" fill sizes="(max-width: 767px) 10px, 30px" />
          </div>
        </div>
        <div className={clsx(s.angle, s.angleDesktop)}>
          <Image src={"/noise-texture.webp"} alt="" fill sizes="60px" />
        </div>
      </div>
    </Link>
  );
};
