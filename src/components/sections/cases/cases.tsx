"use client";

import s from "./cases.module.scss";
import { CaseCard, Size } from "@/components/layouts/caseCard/caseCard";
import { Button } from "@/components/ui/buttons/button/button";
import Link from "next/link";
import { routes } from "@/common/routes";
import { BigBubble } from "@/components/video/bigBubble";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CaseData } from "@/common/types";

gsap.registerPlugin(ScrollTrigger);

type CasesProps = {
  cases: Omit<CaseData, 'imgFullWidth' | 'projectCategories'>[]
}
export const Cases = (props: CasesProps) => {
  const { cases } = props;
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const breakpoint = 1265;

  useEffect(() => {
    gsap.set(".right", { x: 100, opacity: 0 });
    gsap.set(".left", { x: -100, opacity: 0 });

    const triggers = ScrollTrigger.batch(".case", {
      interval: 0.4,
      onEnter: (batch) => {
        gsap.to(batch, { x: 0, opacity: 1, stagger: 0.4, overwrite: true });
      }
    });

    return () => {
      if (triggers && Array.isArray(triggers)) {
        triggers.forEach((trigger) => trigger.kill());
      }
    };
  }, [screenWidth]);

  return <section className={s.cases}>
    <h2>КЕЙСЫ</h2>
    {cases[0] &&
      <CaseCard as={"h3"}
                size={"extraLarge" as Size}
                {...cases[0]}
                index={0}
      />}
    {cases[1] &&
      <CaseCard
        as={"h3"}
        size={"large" as Size}
        {...cases[1]}
        className={s.secondCard}
        index={screenWidth <= breakpoint ? 1 : 0}
      />}
    {cases[2] &&
      <CaseCard as={"h3"}
                size={"small" as Size}
                {...cases[2]}
                index={screenWidth <= breakpoint ? 0 : 1}
      />}
    {cases[3] &&
      <CaseCard
        as={"h3"}
        size={"medium" as Size}
        {...cases[3]}
        className={s.fourCard}
        index={1}
      />}
    <Button as={Link} text={"Больше кейсов"} href={routes.cases} className={s.arrowLink} />
    <BigBubble className={s.bigBubbleCases} />
  </section>;
};