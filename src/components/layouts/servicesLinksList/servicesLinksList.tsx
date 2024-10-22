import { ComponentPropsWithoutRef } from "react";
import {clsx} from 'clsx';
import s from "./servicesLinksList.module.scss";
import { ServicesLink } from "@/components/layouts/servicesLink/servicesLink";
// import Botanica from "../../../../assets/webp/link-botanica.webp";
// import Ekvadrat from "../../../../assets/webp/link-e-kvadrat.webp";
// import Smxtream from "../../../../assets/webp/case-smxtream.webp";
// import Demarko from "../../../../assets/webp/link-de-marko.webp";


export const linksData = [
  {
    number: "01",
    header: "Разработка Веб-Сайтов",
    tags: [
      "Промо-сайт",
      "Лендинг",
      "Многостраничный сайт",
      "Сайт-каталог",
      "Интернет-магазин",
    ],
    href: "#", //change later
    img: '/link-botanica.webp',
  },
  {
    number: "02",
    header: "Интернет-Маркетинг",
    tags: [
      "Контентное продвижение",
      "Контекстная реклама",
      "Таргетированная реклама",
      "SEO",
    ],
    href: "#", //change later
    img: '/link-e-kvadrat.webp',
  },
  {
    number: "03",
    header: "Поддержка и Развитие",
    tags: [
      "Техническая поддержка",
      "Контент поддержка",
      "Маркетинговая поддержка",
    ],
    href: "#", //change later
    img: '/link-smxtream.webp',
  },
  {
    number: "04",
    header: "Дополнительные Услуги",
    tags: ["Аудит существующего сайта", "Упаковка франшиз"],
    href: "#", //change later
    img: '/link-de-marko.webp',
  },
];

export type linkData = {
  number: string;
  header: string;
  tags?: string[];
  href: string;
  img?: string;
};

export type ServicesLinksListProps = {
  linksData: linkData[];
} & ComponentPropsWithoutRef<"div">;

export const ServicesLinksList = (props: ServicesLinksListProps) => {
  const { className, linksData, ...restProps } = props;
  const classNames = clsx(s.list, className);

  const linkList = linksData.map((link) => {
    return <ServicesLink {...link} key={link.number} />;
  });

  return (
    <div {...restProps} className={classNames}>
      {linkList}
    </div>
  );
};
