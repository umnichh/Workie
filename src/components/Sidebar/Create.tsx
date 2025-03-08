import { useState } from "react";
import { useUIContext } from "../../hooks/useUIContext";
import { useFetch } from "../../hooks/useFetch";

interface ProjectData {
  name: string;
}

export default function Create() {
  const [projectName, setProjectName] = useState("");
  const { isCreate } = useUIContext();
  const { fetchData } = useFetch<ProjectData>({
    api: "/project",
    method: "POST",
    isBody: true,
  });
  const { setIsCreate, setIsCreateDialog } = useUIContext();

  const handleClick = () => {
    if (projectName === "") {
      return null;
    }

    const projectData: ProjectData = {
      name: projectName,
    };

    fetchData.mutate(projectData);
    setIsCreate("");
    setIsCreateDialog(false);
  };

  return (
    <div
      className={`project__options ${isCreate ? "project__options--show" : ""}`}
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
