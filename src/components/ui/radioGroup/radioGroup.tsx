import { forwardRef } from "react";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { RadioGroupProps } from "@radix-ui/react-radio-group";
import s from "./radioGroup.module.scss";
import clsx from "clsx";
import { Label } from "../label/label";

type radioItem = {
  label: string;
  value: string;
};
export type RadioGroupComponentProps = {
  mainLabel: string;
  isRequiredField: boolean;
  radioItems: radioItem[];
  errorMessage?: string;
} & RadioGroupProps;

export const RadioGroupComponent = forwardRef<HTMLDivElement, RadioGroupComponentProps>(
  (props: RadioGroupComponentProps, ref) => {
    const { errorMessage, mainLabel, isRequiredField, radioItems = [], className, ...rest } = props;
    const classNames = clsx(s.radioRoot, className);

    const items = radioItems.length &&
      radioItems.map((item) => {
        return (
          <RadioGroup.Item
            value={item.value}
            id={rest.name + item.value}
            className={s.radioItem}
            key={item.value}
          >
            <RadioGroup.Indicator className={s.radioIndicator} />
            <div className={s.content}>
              <div className={s.radioSign} />
              {item.label}
            </div>
          </RadioGroup.Item>
        );
      });

    return (
      <RadioGroup.Root className={classNames} {...rest} ref={ref}>
        <Label text={mainLabel} isRequiredField={isRequiredField} />
        <div className={s.radioItems}>
          {items}
        </div>
        {errorMessage && <div className={s.error}>{errorMessage}</div>}
      </RadioGroup.Root>
    );
  }
);

RadioGroupComponent.displayName = "RadioGroupComponent";