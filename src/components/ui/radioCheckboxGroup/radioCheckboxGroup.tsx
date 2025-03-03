import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./radioCheckboxGroup.module.scss";
import {
  RadioCheckbox,
  RadioCheckboxProps,
} from "../radioCheckbox/radioCheckbox";
import { Label } from "../label/label";

export type RadioCheckboxGroupProps = {
  errorMessage?: string;
  mainLabel: string;
  isRequiredField: boolean;
  checkboxItems: RadioCheckboxProps[];
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
    return <RadioCheckbox {...item} key={item.value} />;
  });

  return (
    <div className={classNames} {...restProps}>
      <Label text={mainLabel} isRequiredField={isRequiredField} />
      <div className={s.answerVariants}>{radioCheckboxes}</div>
      {errorMessage && <div className={s.error}>{errorMessage}</div>}
    </div>
  );
};
