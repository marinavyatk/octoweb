import React, { ChangeEvent, Ref, useRef, useState } from "react";
import clsx from "clsx";
import s from "./inputWithCounter.module.scss";
import commonStyles from "../textField.module.scss";
import { InputFile, InputFileProps } from "../../inputFile/inputFile";
import { AttachedFile } from "../../attachedFile/attachedFile";
import TextareaAutosize from "react-textarea-autosize";
import { Label } from "../../label/label";
import { useCombinedRef } from "@/common/customHooks";
import { TextAreaProps } from "@/components/ui/textField/textarea";

type InputWithCounterProps = Omit<TextAreaProps, "errorMessage"> & {
  fileProps?: InputFileProps,
  errorMessage?: (string | undefined)[];
}

export const InputWithCounter = React.forwardRef(
  (props: InputWithCounterProps, ref: Ref<HTMLTextAreaElement>) => {
    const [content, setContent] = useState("");
    const [file, setFile] = useState<File | undefined>(undefined);
    const inputFileRef = useRef<HTMLInputElement>(null);
    const {
      label,
      isRequiredField,
      containerProps,
      errorMessage,
      fileProps,
      className,
      ...restProps
    } = props;
    const isError = errorMessage && !!(errorMessage[0] || errorMessage[1]);
    const classNames = className;

    const handleDeleteFile = () => {
      setFile(undefined);
      if (inputFileRef.current) {
        inputFileRef.current.value = "";
      }
    };

    const getUnderlineMessage = () => {
      const errorText = errorMessage?.filter((message) => message).join(". ");
      if (file) {
        return <div className={s.fileContainer}>
          <AttachedFile fileName={file.name} onDeleteClick={handleDeleteFile} />
          {isError && errorText}
        </div>;
      }
      if (isError) {
        return <>
          {errorText}
        </>;
      } else {
        return "Размер файла не более 5mb";
      }
    };

    const underlineMessage = getUnderlineMessage();

    const handleInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
      const newContent = event.target.value;
      setContent(newContent);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const filesFromInput = event.target.files;
      if (filesFromInput) {
        setFile(Array.from(filesFromInput)[0]);
      }
    };

    const finalInputFileRef = useCombinedRef(inputFileRef, fileProps?.ref);

    return (
      <div className={classNames} {...containerProps}>
        <div className={clsx(commonStyles.inputContainer, isError && commonStyles.error)}>
          {label && (
            <Label
              text={label}
              isRequiredField={isRequiredField ? isRequiredField : false}
              htmlFor={restProps?.name}
              className={commonStyles.mainLabel}
            />
          )}
          <div className={commonStyles.position}>
            <TextareaAutosize
              ref={ref}
              className={commonStyles.textField}
              id={restProps?.name}
              {...restProps}
              onInput={(event: ChangeEvent<HTMLTextAreaElement>) => {
                handleInput(event);
              }}
            />
            <InputFile
              {...fileProps}
              error={isError}
              onChange={handleChange}
              ref={finalInputFileRef}
            />
          </div>
        </div>
        <div className={clsx(s.underText, isError && s.error)}>
          <span>{content.length}/500</span>
          <span className={s.underlineMessage}>{underlineMessage}</span>
        </div>
      </div>
    );
  }
);

InputWithCounter.displayName = "InputWithCounter";