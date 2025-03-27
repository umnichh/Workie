import { useClickOutside } from '@/hooks/useClickOutside';
import { useDeleteProject } from '@/hooks/useDeleteProject';
import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useParams } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

export const DeleteConfirmation = ({ setActiveModal }: any) => {
  const confirmation = useRef(null)
  const loader = useRef(null)
  const text = useRef(null)
  const [isMounted, setIsMounted] = useState(false);
  const [isLoader, setIsLoader] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true);
  const [showText, setShowText] = useState(false);
  const { mutate } = useDeleteProject();
  const { projectId } = useParams();
  const portalRoot = document.getElementById("portal");
  if (!portalRoot) return null;

  const handleConfirm = () => {
    projectId && mutate(projectId)
  }

  const handleDeny = () => {
    setIsMounted(false)
    setActiveModal(false)
  }

  useEffect(() => {
    setIsMounted(true)
    setIsLoader(true)
    setTimeout(() => {
      setIsLoader(false);
      setShowText(true);
      setIsDisabled(false);
    }, 2000);
  }, []);

  useClickOutside([confirmation], () => {
    setIsMounted(false)
    setActiveModal(false)
  })


  return ReactDOM.createPortal(
    <CSSTransition
      in={isMounted}
      timeout={200}
      mountOnEnter
      unmountOnExit
      nodeRef={confirmation}
      classNames={{
        enter: 'confirmation--show',
        enterDone: 'confirmation--show',
        exit: 'confirmation--hide'
      }}
    >
      <div className="confirmation" ref={confirmation}>
        <span className="confirmation__title">Вы уверены, что хотите удалить проект?</span>
        <CSSTransition
          in={isLoader}
          timeout={0}
          mountOnEnter
          nodeRef={loader}
          appear
          unmountOnExit
          classNames={{
            enterDone: 'confirmation__loader--hide',
            exit: 'confirmation__loader--hide',
            exitDone: 'confirmation__loader--hide',
          }}>
          <div className="confirmation__loader" ref={loader}></div>
        </CSSTransition>

        <CSSTransition
          in={showText}
          timeout={0}
          mountOnEnter
          nodeRef={text}
          appear
          unmountOnExit
          classNames={{
            enterDone: 'confirmation__text--show',
          }}>
          <span className="confirmation__text" ref={text}>
            После подтверждения вся связанная с проектом информация, включая файлы, настройки и данные, будет безвозвратно удалена.
            Восстановить проект после удаления будет невозможно.
          </span>
        </CSSTransition>

        <div className="confirmation__buttons">
          <button className="confirmation__confirm" disabled={isDisabled} onClick={handleConfirm}>Да</button>
          <button className="confirmation__deny" onClick={handleDeny}>Нет</button>
        </div>
      </div>
    </CSSTransition>,
    portalRoot
  );
};

