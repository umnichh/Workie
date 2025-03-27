import TableSvg from '@/assets/Project/table.svg?react';
import ArrowDown from '@/assets/Shared/arrowdown.svg?react';
import OwnerSvg from '@/assets/Project/owner.svg?react';
import FilterSvg from '@/assets/Project/filter.svg?react';
import SortSvg from '@/assets/Project/sort.svg?react';
import HideSvg from '@/assets/Project/hide.svg?react';
import LinkSvg from '@/assets/Project/link.svg?react';
import SettingsSvg from '@/assets/Project/settings.svg?react'
import { ComponentType } from 'react';
import { Settings } from '@/components/Project/ProjectSettings';
import { DeleteConfirmation } from '@/components/Project/ProjectDeleteConfirmation';
import { ProjectInfo } from '@/components/Project/ProjectInfo';

interface IProjectButton {
  BeforeIcon?: ComponentType,
  AfterIcon?: ComponentType,
  text?: string,
  component: CreateComponentKey,
}

export const COMPONENT = {
  table: Settings,
  task: Settings,
  owner: Settings,
  filter: Settings,
  sort: Settings,
  hide: Settings,
  invite: Settings,
  settings: Settings,
  info: ProjectInfo
}

export const MODALS = {
  table: Settings,
  task: Settings,
  owner: Settings,
  filter: Settings,
  sort: Settings,
  hide: Settings,
  invite: Settings,
  settings: DeleteConfirmation,
  info: ProjectInfo,
}

type CreateComponentKey = keyof typeof COMPONENT;


export const ProjectButtons : IProjectButton[] = [
  {BeforeIcon: TableSvg, text: 'Таблица', AfterIcon: ArrowDown, component: 'table'},
  {text: 'Создать задачу', component: 'task'},
  {BeforeIcon: OwnerSvg, text: 'Куратор', component: 'owner'},
  {BeforeIcon: FilterSvg, text: 'Фильтровать', component: 'filter'},
  {BeforeIcon: SortSvg, text: 'Сортировать', component: 'sort'},
  {BeforeIcon: HideSvg, text: 'Скрыть', component: 'hide'},
  {text: 'Пригласить', AfterIcon: LinkSvg, component: 'invite'},
  {BeforeIcon: SettingsSvg, text: 'Настройки', component: 'settings'},
]    
