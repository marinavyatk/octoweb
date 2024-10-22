import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import {
  InputAdditionalFile,
  InputAdditionalFileProps,
} from "./inputAdditionalFile";

export type FromInputAdditionalFile<T extends FieldValues> =
  InputAdditionalFileProps & UseControllerProps<T>;

export const FromInputAdditionalFile = <T extends FieldValues>(
  props: FromInputAdditionalFile<T>,
) => {
  const { control, name, defaultValue, ...inputProps } = props;
  const { field } = useController({ control, name, defaultValue });

  return (
    <InputAdditionalFile
      {...inputProps}
      {...field}
      onFilesChange={field.onChange}
      value={field.value?.fileName}
    />
  );
};
