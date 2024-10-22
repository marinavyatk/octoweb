import { clsx } from "clsx";
import s from "./warning.module.scss";
import { ComponentPropsWithoutRef } from "react";

export type WarningProps = {
  onConfirmButtonClick?: () => void;
  onCancelButtonClick?: () => void;
} & ComponentPropsWithoutRef<"div">;
export const Warning = (props: WarningProps) => {
  const { onConfirmButtonClick, onCancelButtonClick, className, ...restProps } =
    props;
  const classNames = clsx(s.warning, className);

  return (
    <div className={classNames} {...restProps}>
      <div className={s.formNotification}>
        <p>
          Уход со страницы приведет к потере введенных данных. Вы уверены, что
          хотите выйти?
        </p>
        <div className={s.buttonsBlock}>
          <button onClick={onConfirmButtonClick}>Подтвердить</button>
          <button onClick={onCancelButtonClick}>Отмена</button>
        </div>
      </div>
    </div>
  );
};
