import React, { ComponentPropsWithoutRef, ElementType, Ref } from "react";
import clsx from "clsx";
import s from "./input.module.scss";
import ErrorIcon from "@/svg/error.svg";
import { Label } from "../label/label";
import InputMask from "@mona-health/react-input-mask";

export type InputProps<T extends ElementType> = {
  as?: T;
  label?: string;
  isRequiredField?: boolean;
  errorMessage?: string | undefined;
  divProps?: ComponentPropsWithoutRef<"div">;
} & ComponentPropsWithoutRef<T>;

export const Input = React.forwardRef(
  <T extends ElementType = "input">(props: InputProps<T>, ref: Ref<HTMLInputElement>) => {
    const {
      as: Component = "input",
      isRequiredField,
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
        {label && (
          <Label
            text={label}
            isRequiredField={isRequiredField ? isRequiredField : false}
            htmlFor={restProps?.name}
            className={s.mainLabel}
          />
        )}
        <div className={s.position}>
          {restProps.type === "tel" ? (
            <InputMask
              mask="+7\ (999) 999-99-99"
              {...restProps}
              className={s.input}
              name={restProps?.name}
              id={restProps?.name}
              ref={ref}
            />
          ) : (
            <Component
              {...restProps}
              className={s.input}
              name={restProps?.name}
              id={restProps?.name}
              ref={ref}
            />
          )}
          {errorMessage && <ErrorIcon className={s.errorIcon} />}
        </div>
        {errorMessage && <span className={s.errorMessage}>{errorMessage}</span>}
      </div>
    );
  },
);

Input.displayName = "Input";