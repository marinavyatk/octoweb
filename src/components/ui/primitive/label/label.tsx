import { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";
import s from "./label.module.scss";

export type LabelProps = {
  text: string;
  isRequiredField: boolean;
} & ComponentPropsWithoutRef<"label">;

export const Label = (props: LabelProps) => {
  const { text, isRequiredField, className, ...restProps } = props;
  const classNames = clsx(s.label, className);

  return (
    <label {...restProps} className={classNames}>
      {text}
      {isRequiredField && <sup className={s.required}> *</sup>}
    </label>
  );
};
