import { useState } from "react";
import { useUIContext } from "../../hooks/useUIContext";
import { useFetch } from "../../hooks/useFetch";

export default function Create() {
  const [projectName, setProjectName] = useState('');
  const { isCreate } = useUIContext();
  const { fetchData } = useFetch({
    api: '/project',
    method: 'POST',
    isBody: true
});
  const {setIsCreate, setIsCreateDialog} = useUIContext();


  const handleClick = () => {
    if (projectName === ''){
      return null
    }
    fetchData.mutate(projectName);
    setIsCreate('')
    setIsCreateDialog(false)
  }

  return (
    <div
      className={`project__options ${isCreate ? "project__options--show" : ""}`}
    >
      <label htmlFor="project__label">Название проека</label>
      <input onChange={(e) => setProjectName(e.target.value)} type="text" name="project__input" />
      <button className="project__create" onClick={handleClick}>Создать</button>
    </div>
  );
}
