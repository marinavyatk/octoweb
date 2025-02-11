"use client";

import { ComponentPropsWithoutRef, useRef, useState } from "react";
import { clsx } from "clsx";
import s from "./question.module.scss";
import { AccordionButton } from "@/components/ui/buttons/accordionButton/accordionButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


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

  const toggleOpen = () => {
    const newOpened = !opened;
    setOpened(newOpened);
    const footer = document.querySelector(".footer") as HTMLElement;
    if (!answerRef.current || !footer) return;
    const startBefore = footer.getBoundingClientRect().top;


    const adjustScroll = () => {
      const main = document.querySelector(".main") as HTMLElement;
      if (!main) return;

      const prevTop = main.getBoundingClientRect().top;
      const prevScroll = window.scrollY;

      main.style.transform = `translateY(${prevScroll}px)`;
      main.style.position = "relative";

      ScrollTrigger.refresh();

      requestAnimationFrame(() => {
        main.style.transform = "";
        main.style.position = "";

        const newTop = main.getBoundingClientRect().top;
        window.scrollBy({ top: newTop - prevTop, behavior: "instant" });
      });
    };
    const answerHeight = answerRef.current.scrollHeight;

    if (newOpened) {
      answerRef.current.style.transition = "none";
      answerRef.current.style.opacity = "0";
      answerRef.current.style.maxHeight = `${answerHeight}px`;

      adjustScroll();

      answerRef.current.style.maxHeight = `0`;

      //necessary for correct animation
      void answerRef.current.offsetHeight;

      answerRef.current.style.transition = "all 1s";
      answerRef.current.style.opacity = "1";
      answerRef.current.style.maxHeight = `${answerHeight}px`;
    }

    if (!newOpened) {
      answerRef.current.style.transition = "none";
      answerRef.current.style.opacity = "0";
      answerRef.current.style.maxHeight = "0";

      adjustScroll();

      answerRef.current.style.maxHeight = `${answerHeight}px`;

      //necessary for correct animation
      void answerRef.current.offsetHeight;

      answerRef.current.style.transition = "max-height 1s, margin-bottom 1s";
      answerRef.current.style.opacity = "1";
      answerRef.current.style.maxHeight = `0`;
    }

    requestAnimationFrame(() => {
      const startAfter = footer.getBoundingClientRect().top;
      gsap.fromTo(".footer", { bottom: `${-startBefore + startAfter}px`, duration: 1 }, { bottom: 0 });
    });
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