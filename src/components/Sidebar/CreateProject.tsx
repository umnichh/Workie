import { useState, useRef } from 'react';
import { useCreateProject } from '@/hooks/useCreateProject';
import { projectsColors } from '@/constants/projects.colors';
import { CSSTransition } from 'react-transition-group';

interface CreateProjectProps {
  setActiveOption: (value: string | undefined) => void;
}

export interface ProjectForm {
  name: string,
  description: string,
  color: string,
  privacy: string,
}

export const CreateProject = ({ setActiveOption }: CreateProjectProps) => {
  const [selectedColor, setSelectedColor] = useState<string>('rgb(210, 15, 57)');
  const [isNameEmpty, setIsNameEmtpy] = useState(false);
  const errorNameRef = useRef(null);
  const [formValues, setFormValues] = useState<ProjectForm>({
    name: '',
    description: '',
    color: selectedColor,
    privacy: 'public',
  });
  const { mutate, isPending } = useCreateProject();
  const projectNameInput = useRef(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setIsNameEmtpy(false);
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formValues.name.trim() && projectNameInput.current) {
      setIsNameEmtpy(true);
      return null
    }
    mutate(formValues, {
      onSuccess: () => {
        setActiveOption(undefined);
      },
    });
  };


  return (
    <form className="new-project" onSubmit={handleSubmit} autoComplete="off">
      <h3 className="new-project__title">Новый проект</h3>
      <label htmlFor="new-project-name">Название</label>
      <input
        ref={projectNameInput}
        maxLength={100}
        autoComplete="no"
        className={`new-project__name ${isNameEmpty ? 'new-project__name--empty' : ''}`}
        onChange={handleChange}
        type="text"
        name="name"
      />
      <CSSTransition
        nodeRef={errorNameRef}
        in={isNameEmpty}
        timeout={200}
        classNames={{
          enter: 'new-project__error-name--show',
          enterDone: 'new-project__error-name--show',
          exit: 'new-project__error-name--hide',
        }}
        mountOnEnter
        unmountOnExit
      >
        <div ref={errorNameRef} className='new-project__error-name'>
          <span className='new-project__error-name-text'>Название проекта не может быть пустым</span>
        </div>
      </CSSTransition>
      <label htmlFor="new-project-description">Описание</label>
      <textarea
        className="new-project__description"
        name="description"
        onChange={handleChange}
      />
      <div className="new-project__color-privacy-wrapper">
        <div className="new-project__color">
          <label htmlFor="new-project-color">Цвет</label>
          <div className="new-project__color-container">
            {
              projectsColors.map((item) => (
                <button
                  key={item.color}
                  onClick={() => {
                    setSelectedColor(item.color)
                    setFormValues(prev => ({
                      ...prev,
                      color: item.color
                    }));
                  }}
                  className="new-project__color-pick"
                  type='button'
                  style={{
                    backgroundColor: item.color,
                    width: selectedColor === item.color ? '30px' : '20px',
                    height: selectedColor === item.color ? '30px' : '20px',
                    borderRadius: '100%',
                    transition: 'width 0.2s, height 0.2s',
                    border: selectedColor === item.color ? '3px solid white' : '2px solid transparent',
                  }}
                ></button>
              ))
            }
          </div>
        </div>
        <div className="new-project__privacy">
          <label htmlFor="new-project-privacy">Конфиденциальность</label>
          <select name='privacy' onChange={handleChange}>
            <option value="public">Публичный</option>
            <option value="privacy">Приватный</option>
          </select>
        </div>
      </div>
      <button type="submit" className="new-project__create">
        {isPending ? 'Создание...' : 'Создать'}
      </button>
    </form>
  );
};