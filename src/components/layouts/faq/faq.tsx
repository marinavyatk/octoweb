import { ComponentPropsWithoutRef } from "react";
import { Question } from "@/components/layouts/question/question";

export type FAQProps = {
  faqData: { question: string; answer: string }[];
} & ComponentPropsWithoutRef<"div">;

export const FAQ = (props: FAQProps) => {
  const { faqData, ...restProps } = props;

  const questions = faqData.map((q) => {
    return (
      <Question question={q.question} answer={q.answer} key={q.question} />
    );
  });

  return <div {...restProps}>{questions}</div>;
};
