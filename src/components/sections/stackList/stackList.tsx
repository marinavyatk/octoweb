import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import { Stack } from "@/components/layouts/stack/stack";
import s from "./stackList.module.scss";
import { stackData } from "@/common/componentsData/stackData";

export type StackListProps = ComponentPropsWithoutRef<"section">;

export const StackList = (props: StackListProps) => {
  const { className, ...restProps } = props;
  const classNames = clsx(s.list, className);

  const stackTechList = stackData.map((stack) => {
    return (
      <Stack
        number={stack.number}
        header={stack.header}
        tags={stack.tags}
        key={stack.number}
      />
    );
  });

  return (
    <section {...restProps} className={classNames}>
      {stackTechList}
    </section>
  );
};
