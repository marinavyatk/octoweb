import { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";
import s from "./servicesCard.module.scss";
import { TagLink, TagLinkWithPrice } from "../../ui/tagLinkWithPrice/tagLinkWithPrice";
import Link from 'next/link';

export type ServicesCardProps = {
  serviceCategory: string;
  number: string;
  header: string;
  tags: Omit<TagLink, 'category'>[];
  size: "small" | "medium";
} & ComponentPropsWithoutRef<"div">;

export const ServicesCard = (props: ServicesCardProps) => {
  const { serviceCategory, number, header, tags, size = "small", className, ...restProps } = props;
  const classNames = clsx(s.card, className, {
    [s.small]: size === "small",
    [s.medium]: size === "medium",
  });
  const tagList = tags.map((tag) => {
    return (
      <TagLinkWithPrice key={tag.tag} tag={tag.tag} price={tag.price} category={serviceCategory} serviceId={tag.serviceId}>
        {tag.tag}
      </TagLinkWithPrice>
    );
  });

  return (
    <div {...restProps} className={classNames}>
      <div className={s.blur}></div>
      <div className={s.content}>
        <div className={s.text}>
          <span className={s.number}>{number}</span> <br />
          <Link href={`/services/${serviceCategory}`}>
            <h2 className={s.header}>{header}</h2>
          </Link>
        </div>
        <div className={s.tagList}>{tagList}</div>
      </div>
    </div>
  );
};
