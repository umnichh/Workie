import { useState } from 'react';
import { useUIContext } from '@/hooks/useUIContext';
import { SidebarProps } from '@/types/sidebar.types';
import { CreateOptionsButtons } from '@/constants/sidebar.data';
import { CreateProject } from './CreateProject';

export const CreateOptions = ({ Svg, text }: SidebarProps) => {
  const [buttons,] = useState(CreateOptionsButtons);
  const { modal, setModal, isSidebarHidden } = useUIContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const type = e.currentTarget.dataset.button;
    type && setModal(type);
  };

  return (
    <div className="modal create">
      <button
        className="create__button"
        onClick={() => setModal('')}
      >
        <Svg />
        <span
          className={`create__label ${isSidebarHidden ? 'create__label--hidden' : ''
            }`}
        >
          {text}
        </span>
      </button>
      {modal && (
        <div className="create__options">
          {buttons.map((item) => {
            return (
              <button
                key={item.text}
                className={`create__options-button  ${item.isActive ? 'create__options-button--active' : ''}`}
                data-button={item.text}
                type='submit'
                onClick={(e) => handleClick(e)}
              >
                <item.src />
                {item.text}
              </button>
            );
          })}
        </div>
      )}
      {modal === 'Проект' && <CreateProject />}
    </div>
  );
}
