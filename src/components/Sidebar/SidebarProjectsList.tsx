import { SidebarButton } from "./SidebarButton"
import { Project } from "@/types/sidebar.types";
import { useProjects } from "@/hooks/useProjects";
import { projectsColors } from "@/constants/projects.colors";

export const SidebarProjectsList = () => {
  const { data, isPending } = useProjects();

  return (
    isPending
      ? <div style={{ color: 'var(--text)' }}>LOADING PROJECTS...</div>
      : data && data.map((item: Project, index: number) => (
        <SidebarButton
          id={item.id}
          key={item.id}
          text={item.name}
          link={`/projects/${item.id}`}
          color={String(
            projectsColors.find(
              (item: { id: number }) => item.id === index
            )?.color
          )}
          circle={true}
        />
      ))
  )
}