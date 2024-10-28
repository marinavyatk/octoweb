import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./footerWithForm.module.scss";
import { Footer } from "../footer/footer";
// import { Form } from "../form/form";

export type FooterWithFormProps = ComponentPropsWithoutRef<"div">;

export const FooterWithForm = (props: FooterWithFormProps) => {
  const { className, ...restProps } = props;
  const classNames = clsx(s.footerWithForm, className);

  return (
    <div {...restProps} className={classNames} id={"form"}>
      <div className={s.secondaryFormImg}></div>
      <div className={s.formContainer}>
        <span className={s.title}>Давайте начнем работать прямо сейчас</span>
        {/*<Form />*/}
      </div>
      <Footer />
    </div>
  );
};
