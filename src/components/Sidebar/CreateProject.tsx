import React, { SetStateAction } from "react";
import TaskSvg from "../../assets/Sidebar/tasks.svg?react";
import ProjectSvg from "../../assets/Sidebar/project.svg?react";
import GoalSvg from "../../assets/Sidebar/goals.svg?react";
import IdeaSvg from "../../assets/Sidebar/ideas.svg?react";
import RoadmapSvg from "../../assets/Sidebar/roadmap.svg?react";

type SidebarProps = {
  Svg: React.FC;
  text: string;
  isHidden: boolean;
  setIsCreate: React.Dispatch<SetStateAction<boolean>>;
  isCreate: boolean;
};

const btns = [
  {src: TaskSvg, text: "Задача"},
  {src: ProjectSvg, text: "Проект"},
  {src: GoalSvg, text: "Цель"},
  {src: IdeaSvg, text: "Идея"},
  {src: RoadmapSvg, text: "Roadmap"}

];

export default function SidebarButton({
  Svg,
  text,
  isHidden,
  setIsCreate,
  isCreate,
}: SidebarProps) {
  return (
    <div className="create">
      <button className="create__button" onClick={() => setIsCreate(!isCreate)}>
        <Svg />
        <span
          className={`create__label ${isHidden ? "create__label--hidden" : ""}`}
        >
          {text}
        </span>
      </button>
      {isCreate && (
        <div
          className={`create__options ${
            isCreate ? "create__options--show" : ""
          }`}
        >
        {btns.map((item) => {
          return (
            <button className="create__options--button">
              <item.src/>
              {item.text}
            </button>
          )
        })}
        </div>
      )}
    </div>
  );
}
