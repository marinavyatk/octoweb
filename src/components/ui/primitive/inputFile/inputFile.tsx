import React, { ComponentPropsWithoutRef, Ref } from "react";
import clsx from "clsx";
import s from "./inputFile.module.scss";
import AttachIcon from "../../../../assets/attach.svg?react";
import ErrorIcon from "../../../../assets/error.svg?react";

export type InputFileProps = {
  error?: boolean;
  divProps?: ComponentPropsWithoutRef<"div">;
} & ComponentPropsWithoutRef<"input">;

export const InputFile = React.forwardRef(
  (props: InputFileProps, ref: Ref<HTMLInputElement>) => {
    const { error, divProps, className, ...restProps } = props;
    const classNames = clsx(s.fileInputContainer, className, {
      [s.error]: error,
    });

    return (
      <div className={classNames} {...divProps}>
        <input
          type={"file"}
          id={restProps?.name}
          name={restProps?.name}
          className={s.inputFile}
          {...restProps}
          ref={ref}
        />
        <label htmlFor={restProps?.name}>
          <AttachIcon />
        </label>
        {error && <ErrorIcon className={s.errorIcon} />}
      </div>
    );
  },
);
