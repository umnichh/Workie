import HomeSvg from "@/assets/Sidebar/home.svg?react";
import NotificationSvg from "@/assets/Sidebar/notifications.svg?react";
import TaskSvg from "@/assets/Sidebar/tasks.svg?react";
import GoalSvg from "@/assets/Sidebar/goals.svg?react";
import IdeaSvg from "@/assets/Sidebar/ideas.svg?react";
import MapSvg from "@/assets/Sidebar/roadmap.svg?react";
import ProjectSvg from "@/assets/Sidebar/project.svg?react";
import RoadmapSvg from "@/assets/Sidebar/roadmap.svg?react";
import { Button, CreateButton } from "./sidebar.types";

export const SidebarButtons : Button[] = [
  {
    id: 0,
    svg: HomeSvg,
    text: "Главная",
    position: "top",
    isActive: true,
  },
  {
    id: 1,
    svg: TaskSvg,
    text: "Задачи",
    position: "top",
    isActive: false,
  },
  {
    id: 2,
    svg: NotificationSvg,
    text: "Уведомления",
    position: "top",
    isActive: false,
  },
  {
    id: 3,
    svg: GoalSvg,
    text: "Цели",
    position: "bottom",
    isActive: false,
  },
  {
    id: 4,
    svg: IdeaSvg,
    text: "Идеи",
    position: "bottom",
    isActive: false,
  },
  {
    id: 5,
    svg: MapSvg,
    text: "Roadmap",
    position: "bottom",
    isActive: false,
  },
];

export const CreateDialogButtons : CreateButton[] = [
  { src: TaskSvg, text: "Задача", isActive: false },
  { src: ProjectSvg, text: "Проект", isActive: false },
  { src: GoalSvg, text: "Цель", isActive: false },
  { src: IdeaSvg, text: "Идея", isActive: false },
  { src: RoadmapSvg, text: "Roadmap", isActive: false },
];
