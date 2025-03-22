import React, { Component, ComponentType, SVGProps } from 'react';

export interface InterfaceContext {
  isSidebarHidden: boolean;
  setIsSidebarHidden: React.Dispatch<React.SetStateAction<boolean>>;
  modal: string;
  setModal: React.Dispatch<React.SetStateAction<string>>;
  projects: Project[] | null;
  setProjects: React.Dispatch<React.SetStateAction<Project[] | null>>;
  handleModal: Function;
}

export interface Project {
  id: number,
  name: string
  createdAt: string
}

export interface SidebarButton {
  id: string;
  svg: React.FC<SVGProps<SVGSVGElement>>;
  text: string;
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
  setButtons: React.Dispatch<React.SetStateAction<SidebarButton[]>>;
  isActive: boolean;
}

export interface CreateOptions {
  src: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
  component: ComponentType
}
