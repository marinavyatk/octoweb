import React, { ComponentPropsWithoutRef, ElementType, Ref } from "react";
import clsx from "clsx";
import s from "./input.module.scss";
import ErrorIcon from "../../../../assets/error.svg?react";

export type InputProps<T extends ElementType> = {
  as: T;
  label: string;
  required: boolean;
  errorMessage?: string | undefined;
  divProps?: ComponentPropsWithoutRef<"div">;
} & ComponentPropsWithoutRef<T>;

export const Input = React.forwardRef(
  <T extends ElementType>(props: InputProps<T>, ref: Ref<HTMLInputElement>) => {
    const {
      as: Component = "input",
      required,
      label,
      errorMessage,
      divProps,
      className,
      ...restProps
    } = props;
    const classNames = clsx(s.inputContainer, className, {
      [s.error]: errorMessage,
    });

    return (
      <div className={classNames} {...divProps}>
        <label className={s.mainLabel} htmlFor={restProps?.name}>
          {label}
          {required && <sup className={s.required}> *</sup>}
        </label>
        <div className={s.position}>
          <Component
            {...restProps}
            className={s.input}
            name={restProps?.name}
            ref={ref}
          />
          {errorMessage && <ErrorIcon className={s.errorIcon} />}
        </div>
        {errorMessage && <span className={s.errorMessage}>{errorMessage}</span>}
      </div>
    );
  },
);
