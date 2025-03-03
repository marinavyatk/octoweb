import React, { ComponentPropsWithoutRef, Ref } from "react";
import clsx from "clsx";
import s from "./textField.module.scss";
import ErrorIcon from "@/svg/error.svg";
import { Label } from "../label/label";
import TextareaAutosize from "react-textarea-autosize";

export type TextAreaProps = {
  label?: string;
  isRequiredField?: boolean;
  errorMessage?: string | undefined;
  containerProps?: ComponentPropsWithoutRef<"div">;
} & Omit<ComponentPropsWithoutRef<"textarea">, "style">;

export const TextArea = React.forwardRef(
  (props: TextAreaProps, ref: Ref<HTMLTextAreaElement>) => {
    const {
      isRequiredField,
      label,
      errorMessage,
      containerProps,
      className,
      ...restProps
    } = props;
    const classNames = clsx(s.inputContainer, className, {
      [s.error]: errorMessage,
    });

    return (
      <div className={classNames} {...containerProps}>
        {label && (
          <Label
            text={label}
            isRequiredField={isRequiredField ? isRequiredField : false}
            htmlFor={restProps?.name}
            className={s.mainLabel}
          />
        )}
        <div className={s.position}>
          <TextareaAutosize
            {...restProps}
            className={s.textField}
            name={restProps?.name}
            id={restProps?.name}
            ref={ref}
          />
          {errorMessage && <ErrorIcon className={s.errorIcon} />}
        </div>
        {errorMessage && <span className={s.errorMessage}>{errorMessage}</span>}
      </div>
    );
  },
);

TextArea.displayName = "TextArea";
