import { clsx } from "clsx";
import s from "./formNotification.module.scss";
import { ComponentPropsWithoutRef } from "react";
import SubmittedIcon from "../../../../assets/submittedIcon.svg?react";

export type FormNotificationProps = {
  onButtonClick?: () => void;
} & ComponentPropsWithoutRef<"div">;
export const FormNotification = (props: FormNotificationProps) => {
  const { onButtonClick, className, ...restProps } = props;
  const classNames = clsx(s.formNotification, className);

  return (
    <div className={classNames} {...restProps}>
      <div className={s.submittedIcon}>
        <SubmittedIcon />
      </div>
      <div>
        <span>Спасибо за ваше доверие!</span>
        <p>
          Благодарим за обращение! В ближайшее время мы свяжемся с вами для
          обсуждения деталей.
        </p>
      </div>
      <button onClick={onButtonClick}>ОТЛИЧНО!</button>
    </div>
  );
};
