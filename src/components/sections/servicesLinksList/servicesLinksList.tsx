import { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";
import s from "./servicesLinksList.module.scss";
import { ServicesLink } from "@/components/layouts/servicesLink/servicesLink";
import { linkData } from "@/common/types";
import { formatNumber } from "@/common/commonFunctions";

export type ServicesLinksListProps = {
  linksData: linkData[];
  header?: string;
} & ComponentPropsWithoutRef<"section">;

export const ServicesLinksList = (props: ServicesLinksListProps) => {
  const { header, className, linksData, ...restProps } = props;
  const classNames = clsx(s.services, className);

  const linkList = linksData.map((link, index) => {
    const number = link.number ? link.number : formatNumber(index);
    return (
      <ServicesLink
        {...link}
        key={number}
        number={number}
        linkProps={{ "aria-label": `Перейти к странице "${link.header}"` }}
      />
    );
  });

  return (
    <section className={classNames} {...restProps}>
      <h2>{header ? header : "Услуги"}</h2>
      <div className={s.list}>{linkList}</div>
    </section>
  );
};
