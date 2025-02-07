"use client";

import { ComponentPropsWithoutRef, useRef, useState } from "react";
import clsx from "clsx";
import s from "./form.module.scss";
import { Input } from "@/components/ui/textField/input";
import { useForm } from "react-hook-form";
import { Checkbox } from "../../ui/checkbox/checkbox";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/buttons/button/button";
import { InputWithCounter } from "@/components/ui/textField/inputWithCounter/inputWithCounter";
import { formSchema } from "@/common/validation";
import { FormNotification } from "@/components/layouts/formNotification/formNotification";
import { api } from "@/common/api";
import { Loader } from "@/components/ui/loader/loader";

export type FormValues = z.infer<typeof formSchema>;
export type FormProps = ComponentPropsWithoutRef<"div">;

export const Form = (props: FormProps) => {
  const { className, ...restProps } = props;
  const classNames = clsx(s.form, className);
  const [isFormNotificationShown, setIsFormNotificationShown] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    // reset,
    setValue,
    setError,
    setFocus
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

  console.log("form errors:", errors);

  const onSubmit = async (data: FormValues) => {
    grecaptcha.ready(function() {
      grecaptcha.execute("6Le0rM0qAAAAAIF-8ZPeA5_0RThCMWK1E_PIiv6c", { action: "submit" })
        .then(function(token: string) {
          const hiddenElement = document.getElementById("g-recaptcha-response") as HTMLInputElement;
          if (hiddenElement) {
            hiddenElement.value = token;
          }
        });
    });

    const response = await api.postForm(data);

    if (!("code" in response)) {
      setIsFormNotificationShown(true);
    } else {
      if (response?.data?.status === 400)
        Object.entries(response.data.errors).forEach(([key, value], index) => {
          const typedKey = key as keyof FormValues;
          setError(typedKey, { type: "server", message: value as string });
          if (index === 0) setFocus(typedKey);
        });
    }
  };

  const handleCloseNotification = () => {
    setIsFormNotificationShown(false);
    // reset();
  };

  return (
    <div {...restProps} className={classNames}>
      {isFormNotificationShown && <FormNotification onButtonClick={handleCloseNotification} />}
      {isSubmitting &&
        <div className={s.loaderContainer}>
          <Loader />
        </div>
      }
      <form onSubmit={handleSubmit(onSubmit)}
            ref={form}
            noValidate
      >
        <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response" />
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
          onDeleteFile={() => setValue("projectDescriptionFile", {} as FileList, { shouldValidate: true })}
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
          <Button text={"Отправить"} type={"submit"} className={s.arrowButton} />
        </div>
      </form>
    </div>
  );
};
