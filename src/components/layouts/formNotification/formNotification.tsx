import { clsx } from "clsx";
import s from "./formNotification.module.scss";
import { ComponentPropsWithoutRef } from "react";
import SubmittedIcon from "@/svg/submittedIcon.svg";

export type FormNotificationProps = {
  onButtonClick?: () => void;
} & ComponentPropsWithoutRef<"div">;
export const FormNotification = (props: FormNotificationProps) => {
  const { onButtonClick, className, ...restProps } = props;
  const classNames = clsx(s.modal, className);

  return (
    <div className={classNames} {...restProps}>
      <div className={s.formNotification}>
        <div className={s.submittedIcon}>
          <SubmittedIcon />
        </div>
        <div>
          <span>Спасибо за ваше доверие!</span>
          <p className={s.message}>
            Благодарим за обращение! В ближайшее время мы свяжемся с вами для обсуждения деталей.
          </p>
        </div>
        <button onClick={onButtonClick}>ОТЛИЧНО!</button>
      </div>
    </div>
  );
};
