import s from "./modal.module.scss";
import { clsx } from "clsx";
import { ComponentPropsWithoutRef } from "react";

type ModalProps = { containerProps?: ComponentPropsWithoutRef<"div"> } & ComponentPropsWithoutRef<"div">

export const Modal = (props: ModalProps) => {
  const { className, children, containerProps, ...restProps } = props;
  const classNames = clsx(s.modalContainer, className);
  const modalClassNames = clsx(s.modal, className);

  return <div className={classNames} {...restProps}>
    <div className={modalClassNames} {...containerProps}>
      {children}
    </div>
  </div>;
};