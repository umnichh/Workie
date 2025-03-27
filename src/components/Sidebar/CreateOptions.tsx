import { Fragment, useRef, useState } from 'react';
import CreateSvg from '@/assets/Sidebar/create.svg?react';
import { useInterfaceContext } from '@/hooks/useInterfaceContext';
import { CREATE_COMPONENTS } from "@/constants/sidebar.data";
import { CreateOptionsButtons } from '@/constants/sidebar.data';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useClickOutside } from '@/hooks/useClickOutside';


type CreateComponentKey = keyof typeof CREATE_COMPONENTS;
interface ActiveComponentProps {
  setActiveOption: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const CreateOptions = () => {
  const { isSidebarHidden } = useInterfaceContext();
  const [activeOption, setActiveOption] = useState<CreateComponentKey | undefined>(undefined);
  const [isOptions, setIsOptions] = useState<boolean>(false);
  const options = useRef<HTMLDivElement | null>(null);
  const currentOption = useRef<HTMLDivElement | null>(null);
  const createButton = useRef(null);

  const ActiveComponent = activeOption
    ? (CREATE_COMPONENTS[activeOption] as React.ComponentType<ActiveComponentProps>)
    : null;

  const handleOptions = () => {
    setIsOptions(!isOptions)
    setActiveOption(undefined)
  }

  const handleOption = (component: string) => {
    setActiveOption(component);
    setIsOptions(false)
  }

  useClickOutside([options, createButton], () => {
    setIsOptions(false);
  })

  useClickOutside([currentOption], () => {
    setActiveOption(undefined);
  })

  return (
    <>
      <button
        ref={createButton}
        className={`create__button ${isSidebarHidden ? 'create__button--hidden' : ''}`}
        onClick={handleOptions}
        aria-label="Создать"
      >
        <CreateSvg />
        {!isSidebarHidden &&
          <span>
            Создать
          </span>
        }
      </button>
      <CSSTransition
        nodeRef={options}
        in={isOptions}
        timeout={{
          enter: 300,
          exit: 200
        }}
        classNames={{
          enter: 'create__options--show',
          exit: 'create__options--hide',
        }}
        mountOnEnter
        unmountOnExit
      >
        <div ref={options} className={`create__options ${isSidebarHidden ? 'create__options--hidden' : ''}`}>
          {CreateOptionsButtons.map((item) => (
            <Fragment key={item.text}>
              <button
                className="create__options-button"
                data-active={item.active}
                type="submit"
                onClick={() => handleOption(item.component)}
              >

                <item.src />
                {!isSidebarHidden && item.text}
              </button>
            </ Fragment>
          ))}
        </div>
      </CSSTransition>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={activeOption}
          nodeRef={currentOption}
          in={!!activeOption}
          timeout={{
            enter: 300,
            exit: 200
          }}
          classNames={{
            enter: 'create__component--show',
            enterDone: 'create__component--show',
            exit: 'create__component--hide',
          }}
          mountOnEnter
          unmountOnExit
        >
          <div ref={currentOption} className='create__component'>
            {ActiveComponent && (
              <ActiveComponent
                setActiveOption={setActiveOption} // Передаем функцию
              />
            )}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};