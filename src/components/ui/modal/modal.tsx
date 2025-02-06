import s from "./modal.module.scss";
import { clsx } from "clsx";
import { ComponentPropsWithoutRef } from "react";
import { createPortal } from "react-dom";

type ModalProps = { containerProps?: ComponentPropsWithoutRef<"div"> } & ComponentPropsWithoutRef<"div">

export const Modal = (props: ModalProps) => {
  const { className, children, containerProps, ...restProps } = props;
  const classNames = clsx(s.modalContainer, className);
  const modalClassNames = clsx(s.modal, className);

  return createPortal(
    <div className={classNames} {...restProps}>
      <div className={modalClassNames} {...containerProps}>
        {children}
      </div>
    </div>,
    document.body
  );
};