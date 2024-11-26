import React, {
  ChangeEvent,
  ComponentPropsWithoutRef,
  Ref,
  useRef,
  useState
} from "react";
import clsx from "clsx";
import s from "./inputWithCounter.module.scss";
import { InputFile, InputFileProps } from "../inputFile/inputFile";
import { AttachedFile } from "../attachedFile/attachedFile";
import TextareaAutosize from "react-textarea-autosize";
import { Label } from "../label/label";
import { useCombinedRef } from "@/common/customHooks";

export type InputProps = {
  label: string;
  isRequiredField: boolean;
  containerProps?: ComponentPropsWithoutRef<"div">;
  errorMessage?: (string | undefined)[];
  fileProps?: InputFileProps;
} & Omit<ComponentPropsWithoutRef<"textarea">, "style">;

export const InputWithCounter = React.forwardRef(
  (props: InputProps, ref: Ref<HTMLTextAreaElement>) => {
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
    const classNames = clsx(className, { [s.error]: isError });

    const handleDeleteFile = () => {
      setFile(undefined);
      if (inputFileRef.current) {
        inputFileRef.current.value = "";
      }
    };
    const underlineMessage = isError ? (
      errorMessage.filter((message) => message).join(". ")
    ) : file ? (
      <AttachedFile fileName={file.name} onDeleteClick={handleDeleteFile} />
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
        // setFile([...filesFromInput][0]);
        setFile(Array.from(filesFromInput)[0]);
      }
    };

    const finalInputFileRef = useCombinedRef(inputFileRef, fileProps?.ref);

    return (
      <div className={classNames} {...containerProps}>
        <div className={s.inputContainer}>
          <Label
            text={label}
            isRequiredField={isRequiredField}
            htmlFor={restProps?.name}
            className={s.mainLabel}
          />
          <div className={s.position}>
            <TextareaAutosize
              ref={ref}
              className={s.input}
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
        <div className={s.underText}>
          <span>{content.length}/500</span>
          <span className={s.underlineMessage}>{underlineMessage}</span>
        </div>
      </div>
    );
  }
);

InputWithCounter.displayName = "InputWithCounter";