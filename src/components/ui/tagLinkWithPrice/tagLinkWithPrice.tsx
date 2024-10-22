import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./tagLinkWithPrice.module.scss";
import { Tag } from "../tag/tag";
import Link from 'next/link';

export type TagLink = {
  tag: string;
  price: string;
  serviceId: string;
  category: string;
};
export type TagLinkWithPriceProps = TagLink & ComponentPropsWithoutRef<"a">;
export const TagLinkWithPrice = (props: TagLinkWithPriceProps) => {
  const { tag,category, price, serviceId, className, ...restProps } = props;
  const classNames = clsx(s.tagLink, className);
  return (
    <div className={classNames}>
      <Tag
        variant={"monochrome-secondary"}
        as={Link}
        href={`/services/${category}/${serviceId}`}
        className={s.tag}
        {...restProps}
      >
        {tag}
      </Tag>
      <span className={s.price}>от {price} руб.</span>
    </div>
  );
};
