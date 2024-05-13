import React, { ComponentPropsWithoutRef, Ref } from "react";
import clsx from "clsx";
import s from "./radioCheckbox.module.scss";

export type RadioCheckboxProps = {
  label: string;
  value?: string;
  divProps?: ComponentPropsWithoutRef<"div">;
} & ComponentPropsWithoutRef<"input">;

export const RadioCheckbox = React.forwardRef(
  (props: RadioCheckboxProps, ref: Ref<HTMLInputElement>) => {
    const { label, divProps, value, className, ...restProps } = props;
    const classNames = clsx(s.radioCheckboxContainer, className);

    return (
      <div className={classNames} {...divProps}>
        <input
          type={"checkbox"}
          id={value}
          className={s.inputFile}
          {...restProps}
          value={value}
          ref={ref}
        />
        <label htmlFor={value}>{label}</label>
      </div>
    );
  },
);
