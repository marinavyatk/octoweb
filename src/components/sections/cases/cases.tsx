"use client";

import s from "./cases.module.scss";
import { CaseCard, Size } from "@/components/layouts/caseCard/caseCard";
import { mainPageCases } from "@/common/componentsData/mainPageCases";
import { Button } from "@/components/ui/buttons/button/button";
import Link from "next/link";
import { routes } from "@/common/routes";
import { BigBubble } from "@/components/video/bigBubble/bigBubble";
import { useEffect, useState } from "react";

export const Cases = () => {
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

  return <section className={s.cases}>
    <h2>КЕЙСЫ</h2>
    <CaseCard as={"h3"}
              size={"extraLarge" as Size}
              {...mainPageCases[0]}
              index={0}
              delay={screenWidth <= breakpoint ? 0 : 500}
    />
    <CaseCard
      as={"h3"}
      size={"large" as Size}
      {...mainPageCases[1]}
      className={s.secondCard}
      index={screenWidth <= breakpoint ? 1 : 0}
      delay={screenWidth <= breakpoint ? 200 : 1000}
    />
    <CaseCard as={"h3"}
              size={"small" as Size}
              {...mainPageCases[2]}
              index={screenWidth <= breakpoint ? 0 : 1}
              delay={screenWidth <= breakpoint ? 300 : 0}
    />
    <CaseCard
      as={"h3"}
      size={"medium" as Size}
      {...mainPageCases[3]}
      className={s.fourCard}
      index={1}
      delay={screenWidth <= breakpoint ? 400 : 800}
    />
    <Button as={Link} text={"Больше кейсов"} href={routes.cases} className={s.arrowLink} />
    <BigBubble className={s.bigBubbleCases} />
  </section>;
};