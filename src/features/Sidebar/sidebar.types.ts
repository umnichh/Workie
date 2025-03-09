import React, { SVGProps } from "react";

export interface UIContextInterface {
  isSidebarHidden: boolean,
  setIsSidebarHidden: React.Dispatch<React.SetStateAction<boolean>>,
  isCreateDialog: boolean,
  setIsCreateDialog: React.Dispatch<React.SetStateAction<boolean>>
  isCreate: string,
  setIsCreate: React.Dispatch<React.SetStateAction<string>>
}

export interface SidebarProps {
  Svg: React.FC;
  text: string;
};

export interface Button {
  id: number;
  svg: React.FC<SVGProps<SVGSVGElement>>;
  text: string;
  position: "top" | "bottom";
  isActive: boolean;
}

export interface SidebarButtonProps {
  id: number;
  Svg: React.FC<SVGProps<SVGSVGElement>>;
  text: string;
  setButtons: React.Dispatch<React.SetStateAction<Button[]>>;
  isActive: boolean;
}

export interface CreateDialogProps {
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

