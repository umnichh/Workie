import React, { useEffect, useState } from "react";
import { useUIContext } from "../../hooks/useUIContext";
import { SidebarProps } from "../../types/sidebar";
import { CreateDialogButtons } from "../../data/dataSidebar";
import Create from './Create';

export default function CreateDialog({ Svg, text }: SidebarProps) {
  const [buttons, setButtons] = useState(CreateDialogButtons);
  const {
    isCreateDialog,
    setIsCreateDialog,
    isSidebarHidden,
    isCreate,
    setIsCreate,
  } = useUIContext();

  useEffect(() => {
    setButtons(prev => prev.map((item) => ({
      ...item,
      isActive: false
    })));
  }, [isCreateDialog])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const type = e.currentTarget.dataset.button;
    setButtons(prev => prev.map((item) => ({
      ...item,
      isActive: item.text === String(type)
    })));
    type && setIsCreate(type);
  };
  return (
    <div className="create">
      <button
        className="create__button"
        onClick={() => setIsCreateDialog(!isCreateDialog)}
      >
        <Svg />
        <span
          className={`create__label ${
            isSidebarHidden ? "create__label--hidden" : ""
          }`}
        >
          {text}
        </span>
      </button>
      {isCreateDialog && (
        <div
          className={`create__options ${
            isCreateDialog ? "create__options--show" : ""
          }`}
        >
          {buttons.map((item) => {
            return (
              <button
                className={`create__options-button  ${item.isActive ? 'create__options-button--active' : ''}`}
                data-button={item.text}
                onClick={(e) => handleClick(e)}
              >
                <item.src />
                {item.text}
              </button>
            );
          })}
        </div>
      )}
      {isCreate === 'Проект' && (<Create />)}
    </div>
  );
}
