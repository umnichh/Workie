import { SidebarAnalyticsButtons } from "@/constants/sidebar.data"
import { SidebarButton } from "./SidebarButton"

export const SidebarAnalyticsList = () => {
  return (
    SidebarAnalyticsButtons.map(
      (item) => (
        <SidebarButton
          key={item.text}
          Svg={item.svg}
          text={item.text}
          link={item.link}
        />
      )
    )
  )
}