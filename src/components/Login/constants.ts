import {
  CalculatorSvg,
  CalendarSvg,
  CheckSvg,
  ClockSvg,
  EmailSvg,
  FinanceSvg,
  FlagSvg,
  Graph1Svg,
  Graph2Svg,
  Background1,
  Background2,
  Background3,
  Background4,
  Background5
} from '../../assets/Login/index';

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

export const backgroundImages: BackgroundImage[] = [
  { id: 0, src: Background1, isActive: false },
  { id: 1, src: Background2, isActive: false },
  { id: 2, src: Background3, isActive: false },
  { id: 3, src: Background4, isActive: false },
  { id: 4, src: Background5, isActive: false },
];

export const backgroundSvgs: BackgroundSvg[] = [
  { id: 0, src: CalculatorSvg, className: 'calculator' },
  { id: 1, src: CalendarSvg, className: 'calendar' },
  { id: 2, src: CheckSvg, className: 'check' },
  { id: 3, src: ClockSvg, className: 'clock' },
  { id: 4, src: EmailSvg, className: 'email' },
  { id: 5, src: FinanceSvg, className: 'finance' },
  { id: 6, src: FlagSvg, className: 'flag' },
  { id: 7, src: Graph1Svg, className: 'graph1' },
  { id: 8, src: Graph2Svg, className: 'graph2' },
];