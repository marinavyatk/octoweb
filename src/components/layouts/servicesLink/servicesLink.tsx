import clsx from "clsx";
import s from "./servicesLink.module.scss";
import { ArrowButton } from "@/components/ui/buttons/arrowButton/arrowButton";
import { Tag } from "../../ui/tag/tag";
import Image from "next/image";
import Link from "next/link";
import { TagLink } from "@/common/types";
import { ComponentPropsWithoutRef } from "react";

export type ServicesLinkProps = {
  number: string;
  header: string;
  tags?: TagLink[];
  mainLink: string;
  img?: string;
} & ComponentPropsWithoutRef<"div">;

export const ServicesLink = (props: ServicesLinkProps) => {
  const { number, header, tags, mainLink, img, className, ...restProps } = props;
  const classNames = clsx(s.servicesLink, className);
  const tagList =
    tags &&
    tags.map((tag) => {
      return (
        <Tag key={tag.text}
             variant={"monochrome-secondary"}
             as={Link}
             href={`/services/${mainLink}/${tag.subLink}`}
        >
          {tag.text}
        </Tag>
      );
    });

  return (
    <div {...restProps} className={classNames}>
      <div className={s.header}>
        <div className={s.text}>
          <span className={s.number}>{number}</span>
          <h3 className={s.header}>{header}</h3>
        </div>
        <ArrowButton href={`/services/${mainLink}`} />
      </div>
      {tags && <div className={s.tagList}>{tagList}</div>}
      {img &&
        <div className={s.imgContainer}>
          <div className={s.imgPositionContainer}>
            <Image src={img} alt={header} fill sizes={"394px"} />
          </div>
        </div>}
    </div>
  );
};
