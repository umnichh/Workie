import TableSvg from '@/assets/Home/table.svg?react';
import ArrowDown from '@/assets/Shared/arrowdown.svg?react';
import OwnerSvg from '@/assets/Home/owner.svg?react';
import FilterSvg from '@/assets/Home/filter.svg?react';
import SortSvg from '@/assets/Home/sort.svg?react';
import HideSvg from '@/assets/Home/hide.svg?react';
import LinkSvg from '@/assets/Home/link.svg?react';
import MainButton from './HomeButton.tsx';

export default function Home() {
  return (
    <main className="main">
      <div className="main__button-container">
        <button className="main__button">
          <TableSvg />
          Таблица
          <ArrowDown />
        </button>
        <button className="main__button">Создать задачу</button>
        <MainButton
          className="main__button"
          svg={<OwnerSvg />}
          buttonText="Куратор"
        />
        <MainButton
          className="main__button"
          svg={<FilterSvg />}
          buttonText="Фильтровать"
        />
        <MainButton
          className="main__button"
          svg={<SortSvg />}
          buttonText="Сортировать"
        />
        <MainButton
          className="main__button"
          svg={<HideSvg />}
          buttonText="Скрыть"
        />
        <button className="main__button">
          Пригласить
          <LinkSvg />
        </button>
      </div>
    </main>
  );
}
