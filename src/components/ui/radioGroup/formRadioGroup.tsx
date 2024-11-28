import { RadioGroupComponent, RadioGroupComponentProps } from "./radioGroup";
import { Control, FieldPath, FieldValues, useController } from "react-hook-form";

type FormRadioGroupProps<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
} & Omit<RadioGroupComponentProps, "onValueChange" | "value">;

export const FormRadioGroup = <T extends FieldValues>(props: FormRadioGroupProps<T>) => {
  const { name, control, ...rest } = props;
  const {
    field: { onChange, ...fields },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <RadioGroupComponent
      onValueChange={onChange}
      {...fields}
      {...rest}
      errorMessage={error?.message}
    />
  );
};
