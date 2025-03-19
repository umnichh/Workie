import { useParams } from "react-router-dom"
import { useDeleteProject } from '@/hooks/useDeleteProject'
import { useUIContext } from "@/hooks/useUIContext";

export const ProjectSettings = () => {
  const { projectId } = useParams();
  const { mutate } = useDeleteProject();
  const handleClick = () => {
    mutate(Number(projectId));
  }
  return (
    <div className="modal settings" >
      <button className="settings__delete" onClick={handleClick}>Удалить проект</button>
    </div >
  )
}