import React, {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  Ref,
} from "react";
import clsx from "clsx";
import s from "./inputFile.module.scss";
import AttachIcon from "@/svg/attach.svg";
import ErrorIcon from "@/svg/error.svg";

export type InputFileProps = {
  error?: boolean;
  divProps?: ComponentPropsWithoutRef<"div">;
} & ComponentPropsWithRef<"input">;

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

InputFile.displayName = "InputFile";