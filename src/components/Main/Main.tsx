import TableSvg from '../../assets/Main/table.svg?react'
import ArrowDown from '../../assets/Shared/arrowdown.svg?react'
import OwnerSvg from '../../assets/Main/owner.svg?react'
import FilterSvg from '../../assets/Main/filter.svg?react'
import SortSvg from '../../assets/Main/sort.svg?react'
import HideSvg from '../../assets/Main/hide.svg?react'
import LinkSvg from '../../assets/Main/link.svg?react'
import MainButton from './MainButton.tsx'
import { useFetch } from '../../hooks/useFetch.ts'
import { useEffect } from 'react'

export default function Main() {
  const { fetchData } = useFetch({
      api: '/project',
      method: 'POST',
      isBody: false
  });

  useEffect(() => {
    fetchData.mutate(); 
  }, [fetchData])


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
        <MainButton className='main__button' svg={< OwnerSvg />} buttonText="Куратор"/>
        <MainButton className='main__button' svg={< FilterSvg />} buttonText="Фильтровать"/>
        <MainButton className='main__button' svg={< SortSvg />} buttonText="Сортировать"/>
        <MainButton className='main__button' svg={< HideSvg />} buttonText="Скрыть"/>
        <button className='main__button'>
          Пригласить
          <LinkSvg />
        </button>
      </div>
    </main>
  )
}