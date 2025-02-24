import { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";
import s from "./accordionButton.module.scss";

export type AccordionButtonProps = {
  opened: boolean;
  toggleOpen: () => void;
} & ComponentPropsWithoutRef<"button">;

export const AccordionButton = (props: AccordionButtonProps) => {
  const { opened, toggleOpen, className, ...restProps } = props;
  const classNames = clsx(s.buttonContainer, className, { [s.opened]: opened });

  return (
    <button
      {...restProps}
      className={classNames}
      onClick={toggleOpen}
      aria-label={opened ? "Скрыть ответ" : "Показать ответ"}
    >
      <div className={s.closedBackground}></div>
      <div className={s.horizontal}></div>
      <div className={s.vertical}></div>
    </button>
  );
};
