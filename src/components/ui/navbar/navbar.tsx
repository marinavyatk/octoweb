import { NavigationLink } from "../navigationLink/navigationLink";
import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./navbar.module.scss";
import { routes } from "@/common/routes";

export type NavbarProps = {
  onEveryLinkClick?: (args: unknown) => void
} & ComponentPropsWithoutRef<"nav">;

export const Navbar = (props: NavbarProps) => {
  const { onEveryLinkClick,className, ...restProps } = props;
  const classNames = clsx(s.navbar, className);
  const navData = [
    {
      title: "О нас",
      href: routes.about
    },
    {
      title: "Услуги",
      href: routes.services
    },
    {
      title: "Кейсы",
      href: routes.cases
    },
    {
      title: "Блог",
      href: routes.blog
    },
    {
      title: "Контакты",
      href: routes.contacts
    }
  ];
  const navLinks = navData.map((item) => {
    return (
      <li key={item.title}>
        <NavigationLink href={item.href} onClick={onEveryLinkClick && onEveryLinkClick}>{item.title}</NavigationLink>
      </li>
    );
  });

  return (
    <nav {...restProps} className={classNames}>
      <ul>{navLinks}</ul>
    </nav>
  );
};
//