import React, { SVGProps } from 'react';

export interface UIContextInterface {
  isSidebarHidden: boolean;
  setIsSidebarHidden: React.Dispatch<React.SetStateAction<boolean>>;
  modal: string;
  setModal: React.Dispatch<React.SetStateAction<string>>;
  projects: Project[] | null;
  setProjects: React.Dispatch<React.SetStateAction<Project[] | null>>;
  handleModal: Function;
  currentProject: number | null;
  setCurrentProject: React.Dispatch<React.SetStateAction<number | null>>;
}

export interface Project {
  id: number,
  name: string
  createdAt: string
}

export interface SidebarProps {
  Svg: React.FC;
  text: string;
}

export interface Button {
  id: string;
  svg: React.FC<SVGProps<SVGSVGElement>>;
  text: string;
  position: 'top' | 'bottom';
  link: string
}

export interface SidebarButtonProps {
  Svg?: React.FC<SVGProps<SVGSVGElement>>;
  id?: number;
  text: string;
  color?: string;
  circle?: boolean;
  link: string
}

export interface CreateOptionsProps {
  Svg: React.FC<SVGProps<SVGSVGElement>>;
  text: string;
  setButtons: React.Dispatch<React.SetStateAction<Button[]>>;
  isActive: boolean;
}

export interface CreateButton {
  src: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
  isActive: boolean;
}
