import React, { ComponentPropsWithoutRef, Ref } from "react";
import clsx from "clsx";
import s from "./radioCheckbox.module.scss";

export type RadioCheckboxProps = {
  label: string;
  value?: string;
  containerProps?: ComponentPropsWithoutRef<"label">;
} & ComponentPropsWithoutRef<"input">;

export const RadioCheckbox = React.forwardRef(
  (props: RadioCheckboxProps, ref: Ref<HTMLInputElement>) => {
    const { label, containerProps, value, className, ...restProps } = props;
    const classNames = clsx(s.radioCheckboxContainer, className);

    return (
      <label className={classNames} {...containerProps}>
        <input
          type={"checkbox"}
          id={value}
          className={s.inputFile}
          {...restProps}
          value={value}
          ref={ref}
        />
        {label}
      </label>
    );
  },
);

RadioCheckbox.displayName = "RadioCheckbox";