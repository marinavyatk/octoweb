'use client'

import { ComponentPropsWithoutRef, useState } from "react";
import clsx from "clsx";
import s from "./team.module.scss";
import {
  TeamMember,
  TeamMemberIntro,
} from "@/components/layouts/teamMemberIntro/teamMemberIntro";

export type TeamProps = {
  intro: string;
  teamMembersInfo: TeamMember[];
} & ComponentPropsWithoutRef<"section">;

export const Team = (props: TeamProps) => {
  const { teamMembersInfo, intro, className, ...restProps } = props;
  const classNames = clsx(s.team, className);
  const teamMembers = teamMembersInfo.map((member) => member.id);
  const [currentMember, setCurrentMember] = useState(teamMembers[0]);
  const teamMembersList = teamMembers.map((member) => {
    return (
      <li
        key={member}
        className={member === currentMember ? s.active : ""}
        onClick={() => setCurrentMember(member)}
      >
        {member}
      </li>
    );
  });

  const currentMemberCard = teamMembersInfo
    .filter((member) => member.id === currentMember)
    .map((member) => {
      return (
        <TeamMemberIntro
          id={member.id}
          workExperience={member.workExperience}
          name={member.name}
          specialization={member.specialization}
          description={member.description}
          img={member.img}
          key={member.id}
        />
      );
    });

  return (
    <section {...restProps} className={classNames}>
      <div className={s.firstCol}>
        <p>{intro}</p>
        {currentMemberCard}
      </div>
      <div className={s.secondCol}>
        <h2>Над проектом будут работать</h2>
        <ul>{teamMembersList}</ul>
      </div>
    </section>
  );
};
