import HomeSvg from '@/assets/Sidebar/home.svg?react';
import NotificationSvg from '@/assets/Sidebar/notifications.svg?react';
import TaskSvg from '@/assets/Sidebar/tasks.svg?react';
import GoalSvg from '@/assets/Sidebar/goals.svg?react';
import IdeaSvg from '@/assets/Sidebar/ideas.svg?react';
import MapSvg from '@/assets/Sidebar/roadmap.svg?react';
import ProjectSvg from '@/assets/Sidebar/project.svg?react';
import RoadmapSvg from '@/assets/Sidebar/roadmap.svg?react';
import { SidebarButton, CreateOptions } from '../types/sidebar.types';
import { CreateProject } from '@/components/Sidebar/CreateProject';
import { ComponentType } from 'react';

export const SidebarMainButtons: SidebarButton[] = [
{
    id: 'main-button',
    svg: HomeSvg,
    text: 'Главная',
    link: '/',
  },
  {
    id: 'tasks-button',
    svg: TaskSvg,
    text: 'Задачи',
    link: '/tasks'
  },
  {
    id: 'notifications-button',
    svg: NotificationSvg,
    text: 'Workflow',
    link: '/changes'
  },
]

export const SidebarAnalyticsButtons: SidebarButton[] = [
  
  {
    id: 'sbtn-4',
    svg: GoalSvg,
    text: 'Цели',
    link: '/goals'
  },
  {
    id: 'sbtn-5',
    svg: IdeaSvg,
    text: 'Идеи',
    link: '/ideas'
  },
  {
    id: 'sbtn-6',
    svg: MapSvg,
    text: 'Roadmap',
    link: '/roadmaps'
  },
]

export const CreateOptionsButtons: CreateOptions[] = [
  { 
    src: TaskSvg, 
    text: 'Задача',
    component: 'task',
    active: false
  },
  { 
    src: ProjectSvg, 
    text: 'Проект', 
    component: 'project',
    active: false 
  },
  { 
    src: GoalSvg, 
    text: 'Цель',
    component: 'goal',
    active: false
  },
  { 
    src: IdeaSvg, 
    text: 'Идея', 
    component: 'idea',
    active: false
  },
  { 
    src: RoadmapSvg, 
    text: 'Roadmap', 
    component: 'roadmap',
    active: false
  },
]

export const CREATE_COMPONENTS: Record<string, ComponentType> = {
  // task: CreateTask,
  project: CreateProject,
  // goal: CreateProject,
  // idea: CreateIdea,
  // roadmap: CreateRoadmap,
} as const;