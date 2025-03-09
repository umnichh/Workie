
export interface BackgroundImage {
  id: number;
  src: string;
  isActive: boolean;
}

export interface BackgroundSvg {
  id: number;
  src: React.FC<React.SVGProps<SVGSVGElement>>;
  className: string;
}
