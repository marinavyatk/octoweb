import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./attachedFile.module.scss";
import AttachIcon from "@/svg/attach.svg";
import DeleteIcon from "@/svg/deleteIcon.svg";

export type AttachedFileProps = {
  fileName: string;
  onDeleteClick: () => void;
} & ComponentPropsWithoutRef<"div">;

export const AttachedFile = (props: AttachedFileProps) => {
  const { fileName, onDeleteClick, className, ...restProps } = props;
  const classNames = clsx(s.attachedFile, className);

  return (
    <div className={classNames} {...restProps}>
      <AttachIcon className={s.attachIcon} />
      {fileName}
      <button onClick={onDeleteClick} aria-label="Удалить прикрепленный файл" className={s.deleteButton}>
        <DeleteIcon className={s.deleteIcon} />
      </button>
    </div>
  );
};
