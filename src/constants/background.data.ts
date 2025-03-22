import { IAuthBackground, IAuthSvg } from '@/types/auth.types';

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
} from '@/assets/Login';

export const backgroundImages: IAuthBackground[] = [
  { id: 0, src: Background1, isActive: false },
  { id: 1, src: Background2, isActive: false },
];

export const backgroundSvgs: IAuthSvg[] = [
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
