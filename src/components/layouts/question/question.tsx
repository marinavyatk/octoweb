"use client";

import { ComponentPropsWithoutRef, useRef, useState } from "react";
import { clsx } from "clsx";
import s from "./question.module.scss";
import { AccordionButton } from "@/components/ui/buttons/accordionButton/accordionButton";

export type QuestionProps = {
  question: string;
  answer: string;
} & ComponentPropsWithoutRef<"div">;

export const Question = (props: QuestionProps) => {
  const answerRef = useRef<HTMLDivElement>(null);
  const [opened, setOpened] = useState(false);
  const { question, answer, className, ...restProps } = props;
  const classNames = clsx(s.questionContainer, className, {
    [s.opened]: opened
  });

  //necessary so that the height of the answer changes smoothly
  if (answerRef.current && opened) {
    answerRef.current.style.maxHeight = `${answerRef.current.scrollHeight}px`;
  }
  if (answerRef.current && !opened) {
    answerRef.current.style.maxHeight = `0`;
  }

  const toggleOpen = () => {
    setOpened(!opened);
  };

  return (
    <div {...restProps} className={classNames}>
      <div className={s.accordion}>
        <h2 className={s.question} onClick={toggleOpen}>{question}</h2>
        <AccordionButton opened={opened} toggleOpen={toggleOpen} />
      </div>
      <p className={s.answer} ref={answerRef}>
        {answer}
      </p>
    </div>
  );
};
