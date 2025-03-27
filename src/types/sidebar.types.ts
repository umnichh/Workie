import React, { Ref, SVGProps } from 'react';

export interface InterfaceContext {
  isSidebarHidden: boolean;
  setIsSidebarHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface User{
  email: string,
  id: string,
  timeRegistration: string,
  username: string,
}

export interface Project {
  id: string,
  name: string
  createdAt: string
  color: string
  description: string,
  privacy: string,
  user: User
}

export interface SidebarButton {
  id: string;
  svg: React.FC<SVGProps<SVGSVGElement>>;
  text: string;
  link: string
}

export interface SidebarButtonProps {
  Svg?: React.FC<SVGProps<SVGSVGElement>>;
  id?: string;
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
  component: string
  active: boolean
}

export interface ActiveOption {
  activeOption: undefined | string
  setActiveOption: React.Dispatch<React.SetStateAction<undefined | string>>;
}
