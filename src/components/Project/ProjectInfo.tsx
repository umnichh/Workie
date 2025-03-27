import { useClickOutside } from '@/hooks/useClickOutside';
import { useProjectById } from '@/hooks/useProjectById';
import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom'
import { useParams } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

export const ProjectInfo = ({ setActiveModal }: any) => {
  const portalRoot = document.getElementById("portal");
  const { projectId } = useParams();
  if (!portalRoot || !projectId) return null;
  const { data } = useProjectById(projectId);
  const about = useRef(null);

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    data && setIsMounted(true)
  }, [data])

  useClickOutside([about], () => {
    setIsMounted(false)
    setActiveModal(false)
  })

  return ReactDOM.createPortal(
    //  data.user &&
    data &&
    <CSSTransition
      in={isMounted}
      timeout={200}
      mountOnEnter
      unmountOnExit
      nodeRef={about}
      classNames={{
        enterDone: 'project-info--show',
        exit: 'project-info--hide'
      }}
    >

      <div className='project-info' ref={about}>
        <div className='project-info__content'>
          <h2 className='project-info__name'>{data.name}</h2>

          {data.description && (
            <div className='project-info__field'>
              <span className='project-info__label'>Описание:</span>
              <p className='project-info__value'>{data.description}</p>
            </div>
          )}

          <div className='project-info__field'>
            <span className='project-info__label'>Приватность:</span>
            <span className='project-info__value'>{data.privacy === 'public' ? 'Публичный' : 'Приватный'}</span>
          </div>

          <div className='project-info__field'>
            <span className='project-info__label'>Дата создания:</span>
            <span className='project-info__value'>
              {new Date(data.createdAt).toLocaleDateString()}
            </span>
          </div>

          {/* <div className='project-info__field'>
            <span className='project-info__label'>Автор:</span>
            <span className='project-info__value'>{data.user.email}</span>
          </div> */}
        </div>
      </div>
    </CSSTransition>,
    portalRoot
  )
}