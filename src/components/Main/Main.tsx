import TableSvg from '../../assets/Main/table.svg?react'
import ArrowDown from '../../assets/Shared/arrowdown.svg?react'
import OwnerSvg from '../../assets/Main/owner.svg?react'
import FilterSvg from '../../assets/Main/filter.svg?react'
import SortSvg from '../../assets/Main/sort.svg?react'
import HideSvg from '../../assets/Main/hide.svg?react'
import LinkSvg from '../../assets/Main/link.svg?react'

import Button from '../../shared/Button'
type MainProps = {
  isWhiteTheme: boolean
}
export default function Main({isWhiteTheme}: MainProps) {
  return (
    <main className={`main ${isWhiteTheme ? 'main--white' : ''}`}>
      <div className="main__button-container">
        <button className={`main__button ${isWhiteTheme ? 'main__button--white' : ''}`}>
          <TableSvg />
          Таблица
          <ArrowDown />
        </button>
        <button className={`main__button ${isWhiteTheme ? 'main__button--white' : ''}`}>
          Создать задачу
        </button>
        <Button className={`main__button ${isWhiteTheme ? 'main__button--white' : ''}`} svg={< OwnerSvg />} buttonText="Куратор"/>
        <Button className={`main__button ${isWhiteTheme ? 'main__button--white' : ''}`} svg={< FilterSvg />} buttonText="Фильтровать"/>
        <Button className={`main__button ${isWhiteTheme ? 'main__button--white' : ''}`} svg={< SortSvg />} buttonText="Сортировать"/>
        <Button className={`main__button ${isWhiteTheme ? 'main__button--white' : ''}`} svg={< HideSvg />} buttonText="Скрыть"/>
        <button className={`main__button ${isWhiteTheme ? 'main__button--white' : ''}`}>
          Пригласить
          <LinkSvg />
        </button>
      </div>
    </main>
  )
}