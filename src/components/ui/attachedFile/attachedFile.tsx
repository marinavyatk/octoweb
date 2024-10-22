import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./attachedFile.module.scss";
import AttachIcon from "@/svg/attach.svg";
import DeleteIcon from "@/svg/deleteIcon.svg";

export type InputAdditionalFileProps = {
  fileName: string;
  AttachedFile?: string;
  onDeleteClick: () => void;
} & ComponentPropsWithoutRef<"div">;

export const AttachedFile = (props: InputAdditionalFileProps) => {
  const { fileName, onDeleteClick, className, ...restProps } = props;
  const classNames = clsx(s.attachedFile, className);

  return (
    <div className={classNames} {...restProps}>
      <AttachIcon className={s.attachIcon} />
      {fileName}
      <DeleteIcon className={s.deleteIcon} onClick={onDeleteClick} />
    </div>
  );
};
