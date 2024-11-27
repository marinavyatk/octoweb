"use client";

import { ComponentPropsWithoutRef, ElementRef, useRef, useState } from "react";
import clsx from "clsx";
import s from "./form.module.scss";
import { Input } from "@/components/ui/textField/input";
import { useForm } from "react-hook-form";
import { Checkbox } from "../../ui/checkbox/checkbox";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowButtonWithText } from "@/components/ui/buttons/ArrowButtonWithText/arrowButtonWithText";
import { InputWithCounter } from "@/components/ui/textField/inputWithCounter/inputWithCounter";
import { formSchema } from "@/common/validation";
import { FormNotification } from "@/components/layouts/formNotification/formNotification";

type FormValues = z.infer<typeof formSchema>;
export type FormProps = ComponentPropsWithoutRef<"div">;


export const Form = (props: FormProps) => {
  const { className, ...restProps } = props;
  const classNames = clsx(s.form, className);
  const [isFormNotificationShown, setIsFormNotificationShown] = useState(false);
  const form = useRef<ElementRef<"form">>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      tel: "",
      projectDescription: "",
      projectDescriptionFile: {} as FileList,
      mailing: false
    },
    mode: "onBlur"
  });

  console.log(errors);
  console.log('isDirty', isDirty);

  const onSubmit = (data: FormValues) => {
    console.log(data);
    //if ok
    setIsFormNotificationShown(true)
  };

  const handleCloseNotification = () => {
    setIsFormNotificationShown(false);
    reset();
  };

  return (
    <div {...restProps} className={classNames}>
      {isFormNotificationShown && <FormNotification onButtonClick={handleCloseNotification} />}
      <form onSubmit={handleSubmit(onSubmit)} ref={form} autoComplete="off">
        <div className={s.mainInfo}>
          <Input
            label={"Имя"}
            isRequiredField
            {...register("name")}
            placeholder={"Как вас зовут?"}
            className={s.item}
            errorMessage={errors.name?.message}
          />
          <Input
            label={"email"}
            isRequiredField
            {...register("email")}
            type={"email"}
            placeholder={"Электронная почта"}
            className={s.item}
            errorMessage={errors.email?.message}
          />
          <Input
            label={"Номер телефона"}
            isRequiredField
            {...register("tel")}
            type="tel"
            placeholder={"+7 (900) 000-00-00"}
            className={s.item}
            errorMessage={errors.tel?.message}
          />
        </div>
        <InputWithCounter
          label={"О проекте"}
          isRequiredField
          placeholder={"Расскажите о своем проекте"}
          {...register("projectDescription")}
          name={"projectDescription"}
          fileProps={{ ...register("projectDescriptionFile") }}
          errorMessage={[
            errors.projectDescription?.message,
            errors.projectDescriptionFile?.message
          ]}
          className={s.inputWithCounter}
        />
        <Checkbox
          {...register("mailing")}
          text={"Хочу получать информационные и рекламные письма от OctoWeb"}
          className={s.checkbox}
        />
        <div className={s.submit}>
          <p>
            Я принимаю условия{" "}
            <a href={"#"} rel={"nofollow"}>
              Политики ООО OctoWeb в отношении обработки данных
            </a>{" "}
            и, нажимая на кнопку “Отправить”, даю согласие на обработку компанией указанных мной
            персональных данных
          </p>
          <ArrowButtonWithText text={"Отправить"} type={"submit"} className={s.arrowButton} />
        </div>
      </form>
    </div>
  );
};
