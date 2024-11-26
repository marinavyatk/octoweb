import { clsx } from "clsx";
import { ComponentPropsWithoutRef } from "react";
import s from "./burgerButton.module.scss";

type BurgerButtonProps = {
  open: boolean;
} & ComponentPropsWithoutRef<"button">;

export const BurgerButton = (props: BurgerButtonProps) => {
  const { open, ...restProps } = props;
  const classNames = clsx(s.burgerButton, open && s.open);

  return <button className={classNames} {...restProps} aria-label={open? 'Закрыть меню' : 'Открыть меню'}>
    <div className={s.icon}></div>
  </button>;
};