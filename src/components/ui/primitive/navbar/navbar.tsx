import { NavigationLink } from "../navigationLink/navigationLink.tsx";
import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./navbar.module.scss";
import { routes } from "../../../../common/routes.ts";

export type NavbarProps = ComponentPropsWithoutRef<"nav">;

export const Navbar = (props: NavbarProps) => {
  const { className, ...restProps } = props;
  const classNames = clsx(s.navbar, className);
  const navData = [
    {
      title: "О нас",
      to: routes.about,
    },
    {
      title: "Услуги",
      to: routes.services,
    },
    {
      title: "Кейсы",
      to: routes.cases,
    },
    {
      title: "Команда",
      to: routes.team,
    },
    {
      title: "Блог",
      to: routes.blog,
    },
    {
      title: "Контакты",
      to: routes.contacts,
    },
  ];
  const navLinks = navData.map((item) => {
    return (
      <li key={item.title}>
        <NavigationLink to={item.to}>{item.title}</NavigationLink>
      </li>
    );
  });

  return (
    <nav {...restProps} className={classNames}>
      <ul>{navLinks}</ul>
    </nav>
  );
};
