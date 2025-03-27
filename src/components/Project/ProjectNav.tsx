import { ProjectButton } from './ProjectButton.tsx';
import { ProjectButtons } from '../../constants/project.data.ts';

export const ProjectNav = () => {
  return (
    ProjectButtons.map((item) => (
      <ProjectButton
        key={item.text}
        component={item.component}
        BeforeIcon={item.BeforeIcon}
        text={item.text}
        AfterIcon={item.AfterIcon} />
    ))
  )
}