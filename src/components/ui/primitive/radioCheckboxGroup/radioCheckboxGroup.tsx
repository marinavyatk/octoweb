import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./radioCheckboxGroup.module.scss";
import { RadioCheckbox } from "../radioCheckbox/radioCheckbox.tsx";
import { Label } from "../label/label.tsx";

export type checkboxItem = {
  label: string;
  value: string;
  rest: ComponentPropsWithoutRef<"input">;
};

export type RadioCheckboxGroupProps = {
  errorMessage?: string;
  mainLabel: string;
  isRequiredField: boolean;
  checkboxItems: checkboxItem[];
} & ComponentPropsWithoutRef<"div">;

export const RadioCheckboxGroup = (props: RadioCheckboxGroupProps) => {
  const {
    mainLabel,
    isRequiredField,
    checkboxItems,
    errorMessage,
    className,
    ...restProps
  } = props;
  const classNames = clsx(s.radioCheckboxGroupContainer, className);

  const radioCheckboxes = checkboxItems.map((item) => {
    return (
      <RadioCheckbox
        label={item.label}
        {...item.rest}
        value={item.value}
        key={item.value}
      />
    );
  });

  return (
    <div className={classNames} {...restProps}>
      <Label text={mainLabel} isRequiredField={isRequiredField} />
      <div className={s.answerVariants}>{radioCheckboxes}</div>
      {errorMessage && <div className={s.error}>{errorMessage}</div>}
    </div>
  );
};
