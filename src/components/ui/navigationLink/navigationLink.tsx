'use client'

import clsx from "clsx";
import s from "./navigationLink.module.scss";
import Link from 'next/link';
import {ComponentProps} from 'react';
import {usePathname} from 'next/navigation';

export type NavigationLinkProps =  ComponentProps<typeof Link>;

export const NavigationLink = (props: NavigationLinkProps) => {
  const { className, ...restProps } = props;

  const pathname = usePathname();
  const classNames = clsx(s.navigationLink, className, pathname.includes(String(restProps.href)) && s.active );

  return (
    <Link
      {...restProps}
      className={classNames}
    />
  );
};
