import React, { ComponentType, useRef, useState } from 'react';
import { COMPONENT, MODALS } from '@/constants/project.data';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useClickOutside } from '@/hooks/useClickOutside';

type ButtonProps = {
  BeforeIcon?: ComponentType;
  AfterIcon?: ComponentType;
  text?: string;
  component: CreateComponentKey;
};

type CreateComponentKey = keyof typeof COMPONENT;
type ModalKey = keyof typeof MODALS;

export const ProjectButton = ({ BeforeIcon, text, AfterIcon, component }: ButtonProps) => {
  const [activeNav, setActiveNav] = useState<CreateComponentKey | undefined>(undefined);
  const [activeModal, setActiveModal] = useState<ModalKey | undefined>(undefined);
  const currentNav = useRef(null);

  const ActiveComponent = activeNav
    ? (COMPONENT[activeNav] as React.ComponentType)
    : null;

  const ActiveModal = activeModal
    ? (MODALS[activeModal] as React.ComponentType)
    : null;

  const handleClick = () => {
    setActiveNav(component)
  }

  useClickOutside([currentNav], () => {
    setActiveNav(undefined)
  })

  return (
    <div>
      <button className="project__button" onClick={handleClick}>
        {BeforeIcon && <BeforeIcon />}
        {text}
        {AfterIcon && <AfterIcon />}
      </button>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={activeNav}
          nodeRef={currentNav}
          in={!!activeNav}
          timeout={100}
          classNames={{
            enter: 'project-options--show',
            enterDone: 'project-options--show',
            exit: 'project-options--hide'
          }}
          mountOnEnter
          unmountOnExit
        >
          <div ref={currentNav}>
            {ActiveComponent && <ActiveComponent setActiveNav={setActiveNav} setActiveModal={setActiveModal} />}
            {ActiveModal && <ActiveModal setActiveModal={setActiveModal} />}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div >
  );
};