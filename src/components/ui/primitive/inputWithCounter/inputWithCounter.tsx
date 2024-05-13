import React, {
  ChangeEvent,
  ComponentPropsWithoutRef,
  Ref,
  useState,
} from "react";
import clsx from "clsx";
import s from "./inputWithCounter.module.scss";
import { InputFile, InputFileProps } from "../inputFile/inputFile.tsx";
import { AttachedFile } from "../attachedFile/attachedFile.tsx";
import TextareaAutosize from "react-textarea-autosize";

type Style = {
  height?: number;
  width?: number | string;
};
export type InputProps = {
  label: string;
  required: boolean;
  containerProps?: ComponentPropsWithoutRef<"div">;
  errorMessage?: (string | undefined)[];
  fileProps?: InputFileProps;
} & ComponentPropsWithoutRef<"textarea">;

export const InputWithCounter = React.forwardRef(
  (props: InputProps, ref: Ref<HTMLTextAreaElement>) => {
    const [content, setContent] = useState("");
    const [file, setFile] = useState<File | undefined>(undefined);
    const {
      label,
      required,
      containerProps,
      errorMessage,
      fileProps,
      className,
      ...restProps
    } = props;
    const isError = errorMessage && !!(errorMessage[0] || errorMessage[1]);
    const classNames = clsx(className, { [s.error]: isError });
    const underlineMessage = isError ? (
      errorMessage.filter((message) => message).join(". ")
    ) : file ? (
      <AttachedFile
        fileName={file.name}
        onDeleteClick={() => setFile(undefined)}
      />
    ) : (
      "Размер файла не более 5mb"
    );

    const handleInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
      const newContent = event.target.value;
      setContent(newContent);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const filesFromInput = event.target.files;
      if (filesFromInput) {
        setFile([...filesFromInput][0]);
      }
    };

    return (
      <div className={classNames} {...containerProps}>
        <div className={s.inputContainer}>
          <label className={s.mainLabel} htmlFor={restProps?.id}>
            {label}
            {required && <sup className={s.required}> *</sup>}
          </label>
          <div className={s.position}>
            <TextareaAutosize
              ref={ref}
              className={s.input}
              {...restProps}
              onInput={(event: ChangeEvent<HTMLTextAreaElement>) => {
                handleInput(event);
              }}
              style={restProps?.style as Style}
            />
            <InputFile {...fileProps} error={isError} onChange={handleChange} />
          </div>
        </div>
        <div className={s.underText}>
          <span>{content.length}/500</span>
          <span className={s.underlineMessage}>{underlineMessage}</span>
        </div>
      </div>
    );
  },
);
