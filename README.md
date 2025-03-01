# Workie

Workie - это веб-приложение для управления задачами и проектами, разработанное с использованием современного стека технологий React.

## Технологии

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite 6
- **State Management**: 
  - Redux Toolkit
  - React Query (TanStack Query)
- **Routing**: React Router DOM 7
- **Styling**: SASS
- **SVG Handling**: vite-plugin-svgr
- **Code Quality**:
  - ESLint
  - TypeScript strict mode
  - Qodana

## Основные функции

- Авторизация пользователей
- Управление задачами
- Аналитика и отслеживание целей
- Roadmap проектов
- Система уведомлений
- Управление проектами

## Структура проекта

```
src/
├── assets/         # SVG иконки и изображения
├── components/     # React компоненты
│   ├── Header/
│   ├── Main/
│   ├── Sidebar/
│   └── Login/
├── shared/         # Общие компоненты
├── styles/         # SCSS стили
└── app/           # Redux store и конфигурация
```