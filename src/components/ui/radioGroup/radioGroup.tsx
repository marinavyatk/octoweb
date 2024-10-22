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
    return (
      <RadioGroup.Root className={classNames} {...rest} ref={ref}>
        <Label text={mainLabel} isRequiredField={isRequiredField} />
        <div className={s.radioItems}>
          {radioItems.length &&
            radioItems.map((item) => {
              return (
                <div className={s.radioItem} key={item.value}>
                  <RadioGroup.Item
                    className={s.radioSign}
                    value={item.value}
                    id={rest.name + item.value}
                  >
                    <RadioGroup.Indicator className={s.radioIndicator} />
                  </RadioGroup.Item>
                  <label className={s.radioLabel} htmlFor={rest.name + item.value}>
                    {item.label}
                  </label>
                </div>
              );
            })}
        </div>
        {errorMessage && <div className={s.error}>{errorMessage}</div>}
      </RadioGroup.Root>
    );
  },
);

RadioGroupComponent.displayName = "RadioGroupComponent";