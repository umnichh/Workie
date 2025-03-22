import TableSvg from '@/assets/Home/table.svg?react';
import ArrowDown from '@/assets/Shared/arrowdown.svg?react';
import OwnerSvg from '@/assets/Home/owner.svg?react';
import FilterSvg from '@/assets/Home/filter.svg?react';
import SortSvg from '@/assets/Home/sort.svg?react';
import HideSvg from '@/assets/Home/hide.svg?react';
import LinkSvg from '@/assets/Home/link.svg?react';
import SettingsSvg from '@/assets/Home/settings.svg?react'
import { ComponentType } from 'react';
import { ProjectSettings } from '../pages/Home/ProjectSettings';

interface IHomeButton {
  BeforeIcon?: ComponentType,
  AfterIcon?: ComponentType,
  text: string,
  Modal?: ComponentType
}

export const homeButtons : IHomeButton[] = [
  {BeforeIcon: TableSvg, text: 'Таблица', AfterIcon: ArrowDown},
  {text: 'Создать задачу'},
  {BeforeIcon: OwnerSvg, text: 'Куратор'},
  {BeforeIcon: FilterSvg, text: 'Фильтровать'},
  {BeforeIcon: SortSvg, text: 'Сортировать'},
  {BeforeIcon: HideSvg, text: 'Скрыть'},
  {text: 'Пригласить', AfterIcon: LinkSvg},
  {BeforeIcon: SettingsSvg, text: 'Настройки',  Modal: ProjectSettings}
]    
