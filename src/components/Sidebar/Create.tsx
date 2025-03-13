import { useState } from 'react';
import { useUIContext } from '@/hooks/useUIContext';
import { useMutation } from '@tanstack/react-query';

interface ProjectData {
  name: string;
}

export default function Create() {
  const [projectName, setProjectName] = useState('');
  const { isCreate } = useUIContext();
  const { setIsCreate, setIsCreateDialog } = useUIContext();

  const newProject = useMutation({
    mutationFn: async (data: ProjectData) => {
      const response = await fetch(`${import.meta.env.VITE_APP_URL}/project`, {
        method: 'POST',
        body: JSON.stringify(data),
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error(`Ошибка создания проекта: ${await response.text()}`);
      }
      return response.json();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleClick = () => {
    if (projectName === '') {
      return null;
    }

    const projectData: ProjectData = {
      name: projectName,
    };
    newProject.mutate(projectData);
    setIsCreate('');
    setIsCreateDialog(false);
  };

  return (
    <div
      className={`project__options ${isCreate ? 'project__options--show' : ''}`}
    >
      <label htmlFor="project__label">Название проекта</label>
      <input
        onChange={(e) => setProjectName(e.target.value)}
        type="text"
        name="project__input"
      />
      <button onClick={handleClick}>Создать</button>
    </div>
  );
}
