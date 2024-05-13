import clsx from "clsx";
import s from "./briefNavbar.module.scss";
import { ComponentPropsWithoutRef } from "react";
import {
  BriefNavigationLink,
  BriefNavigationLinkProps,
} from "../briefNavigationLink/briefNavigationLink.tsx";

export type BriefNavbarProps = {
  navItems: BriefNavigationLinkProps[];
} & ComponentPropsWithoutRef<"nav">;

export const BriefNavbar = (props: BriefNavbarProps) => {
  const { navItems, className, ...restProps } = props;
  const classNames = clsx(s.briefNavbar, className);

  const navLinks = navItems.map((item) => {
    return <BriefNavigationLink key={item.text} {...item} />;
  });

  return (
    <nav {...restProps} className={classNames}>
      {navLinks}
    </nav>
  );
};
