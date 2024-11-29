import s from "./formNotification.module.scss";
import SubmittedIcon from "@/svg/submittedIcon.svg";
import { Modal } from "@/components/ui/modal/modal";

export type FormNotificationProps = {
  onButtonClick?: () => void;
}

export const FormNotification = (props: FormNotificationProps) => {
  const { onButtonClick } = props;

  return (
    <Modal className={s.content}>
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
    </Modal>
  );
};
