import s from "./warning.module.scss";
import { Modal } from "@/components/ui/modal/modal";

export type WarningProps = {
  onConfirmButtonClick?: () => void;
  onCancelButtonClick?: () => void;
};

export const Warning = (props: WarningProps) => {
  const { onConfirmButtonClick, onCancelButtonClick } = props;
  return (
    <Modal rootProps={{ defaultOpen: true }} modalHeader={"Подтверждение ухода со страницы"}
    contentProps={{onInteractOutside: onCancelButtonClick}}
    >
      <div className={s.content}>
        <p>
          Уход со страницы приведет к потере введенных данных. Вы уверены, что
          хотите выйти?
        </p>
        <div className={s.buttonsBlock}>
          <button onClick={onConfirmButtonClick}>Подтвердить</button>
          <button onClick={onCancelButtonClick}>Отмена</button>
        </div>
      </div>
    </Modal>
  );
};
