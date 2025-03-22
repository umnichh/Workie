import { SidebarMainButtons } from "@/constants/sidebar.data"
import { SidebarButton } from "./SidebarButton"

export const SidebarMainList = () => {

  return (
    SidebarMainButtons.map(
      (item) => (
        <SidebarButton
          key={item.id}
          Svg={item.svg}
          text={item.text}
          link={item.link}
        />
      )
    )
  )
}