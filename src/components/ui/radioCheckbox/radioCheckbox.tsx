import React, { ComponentPropsWithoutRef, Ref } from "react";
import clsx from "clsx";
import s from "./radioCheckbox.module.scss";

export type RadioCheckboxProps = {
  label: string;
  containerProps?: ComponentPropsWithoutRef<"label">;
} & Omit<ComponentPropsWithoutRef<"input">, "value"> & {
  value?: string | number;
};

export const RadioCheckbox = React.forwardRef(
  (props: RadioCheckboxProps, ref: Ref<HTMLInputElement>) => {
    const { label, containerProps, className, ...restProps } = props;
    const classNames = clsx(s.radioCheckboxContainer, className);

    return (
      <label className={classNames} {...containerProps}>
        <input
          type={"checkbox"}
          className={s.inputFile}
          {...restProps}
          ref={ref}
        />
        {label}
      </label>
    );
  }
);

RadioCheckbox.displayName = "RadioCheckbox";