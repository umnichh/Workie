import { FormEvent, useState } from 'react';
import { useInterfaceContext } from '@/hooks/useInterfaceContext';
import { useCreateProject } from '@/hooks/useCreateProject';

export const CreateProject = () => {
  const [projectName, setProjectName] = useState('');
  const { modal, setModal } = useInterfaceContext();
  const { mutate } = useCreateProject();

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
    if (!projectName) {
      return null;
    }
    const newProject: { name: string } = {
      name: projectName,
    };
    mutate(newProject);
    setModal('');
  };

  return (
    <form
      className={`modal project__options ${modal ? 'project__options--show' : ''}`}
      onSubmit={handleClick}
    >
      <label htmlFor="project__label">Название проекта</label>
      <input
        onChange={(e) => setProjectName(e.target.value)}
        type="text"
        name="project__input"
      />
      <button type="button" onClick={handleClick}>
        Создать
      </button>
    </form>
  );
};