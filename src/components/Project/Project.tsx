import { useEffect, useRef, useState } from 'react';
import { ProjectNav } from './ProjectNav.tsx';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import { Tasks } from '../Tasks/Tasks.tsx';
import { Home } from '../Home/Home.tsx';
export const Project = () => {
  const [isMounted, setIsMounted] = useState(false)
  const project = useRef(null)
  useEffect(() => {

    setIsMounted(true)
  }, [])


  const { pathname } = useLocation();
  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={pathname}
        in={isMounted}
        timeout={100}
        nodeRef={project}
        mountOnEnter
        unmountOnExit
        classNames={{
          enterDone: 'project--show',
          exit: 'project--hide'
        }}
      >
        <main className="project" ref={project}>
          <div className="project__button-container">
            <ProjectNav />
          </div>
        </main>
      </CSSTransition>
    </SwitchTransition>
  );
}
