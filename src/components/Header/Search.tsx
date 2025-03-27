import SearchIcon from '@/assets/Header/search.svg?react';
import { useClickOutside } from '@/hooks/useClickOutside';
import { Project } from '@/types/sidebar.types';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Search = () => {
  const [search, setSearch] = useState<string>('');
  const queryClient = useQueryClient();
  const [projects, setProjects] = useState<Project[] | null>(null)
  const [isSearch, setIsSearch] = useState(false)
  const searchRef = useRef(null);
  const navigate = useNavigate()

  useEffect(() => {
    if (!search) {
      setProjects(null);
      return;
    }

    const allProjects = queryClient.getQueryData<Project[]>(['projects']);
    if (!allProjects) {
      setProjects(null);
      return;
    }

    const filteredProjects = allProjects.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    setProjects(filteredProjects);
  }, [search, queryClient]);


  useClickOutside([searchRef], () => {
    setIsSearch(false);
  })

  const handleClick = (id: string) => {
    setSearch('')
    navigate(`/projects/${id}`);
  }

  return (
    <div className="search" onClick={() => setIsSearch(true)}>
      <SearchIcon className="search__icon" />
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        value={search}
        placeholder="Поиск..."
        className="search__input"
      />
      {projects && isSearch && search &&
        <div className='search__result-container' ref={searchRef}>
          {!projects.length &&
            <span className='search__result-not-found'>Совпадений не найдено...</span>
          }
          {projects.map(item => {
            return (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className='search__result'>
                <div
                  className='sidebar__project-color'
                  style={{
                    backgroundColor: `${item.color}`,
                  }}
                ></div>
                <span className='search__result-name'>{item.name}</span>
              </button>
            )
          })}
        </div>
      }
    </div>
  );
};
