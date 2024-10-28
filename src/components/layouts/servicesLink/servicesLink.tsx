import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./servicesLink.module.scss";
import { ArrowButton } from "@/components/ui/buttons/arrowButton/arrowButton";
import { Tag } from "../../ui/tag/tag";
import Image from "next/image";

export type ServicesLinkProps = {
  number: string;
  header: string;
  tags?: string[];
  href: string;
  img?: string;
} & ComponentPropsWithoutRef<"div">;

export const ServicesLink = (props: ServicesLinkProps) => {
  const { number, header, tags, href, img, className, ...restProps } = props;
  const classNames = clsx(s.servicesLink, className);
  const tagList =
    tags &&
    tags.map((tag) => {
      return (
        <Tag key={tag} variant={"monochrome-secondary"}>
          {tag}
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
          <ArrowButton href={href} />
        </div>
        {tags && <div className={s.tagList}>{tagList}</div>}
        {img &&
          <div className={s.imgContainer}>
            <div className={s.imgPositionContainer}>
              <Image src={img} alt={header} fill sizes={'394px'}/>
            </div>
          </div>}
    </div>
  );
};
