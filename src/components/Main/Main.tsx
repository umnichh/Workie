import TableSvg from '../../assets/Main/table.svg?react'
import ArrowDown from '../../assets/Shared/arrowdown.svg?react'
import OwnerSvg from '../../assets/Main/owner.svg?react'
import FilterSvg from '../../assets/Main/filter.svg?react'
import SortSvg from '../../assets/Main/sort.svg?react'
import HideSvg from '../../assets/Main/hide.svg?react'
import LinkSvg from '../../assets/Main/link.svg?react'
import Button from '../../shared/Button'

export default function Main() {
  return (
    <main className='main' >
      <div className="main__button-container">
        <button className='main__button' >
          <TableSvg />
          Таблица
          <ArrowDown />
        </button>
        <button className='main__button' >
          Создать задачу
        </button>
        <Button className='main__button' svg={< OwnerSvg />} buttonText="Куратор"/>
        <Button className='main__button'  svg={< FilterSvg />} buttonText="Фильтровать"/>
        <Button className='main__button' svg={< SortSvg />} buttonText="Сортировать"/>
        <Button className='main__button'  svg={< HideSvg />} buttonText="Скрыть"/>
        <button className='main__button'>
          Пригласить
          <LinkSvg />
        </button>
      </div>
    </main>
  )
}