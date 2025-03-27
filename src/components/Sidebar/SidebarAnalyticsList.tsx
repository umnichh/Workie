
import ArrowDown from '@/assets/Shared/arrowdown.svg?react';
import { useInterfaceContext } from "@/hooks/useInterfaceContext";
import { SidebarButton } from "./SidebarButton"
import { useState } from "react";
import { SidebarAnalyticsButtons } from '@/constants/sidebar.data';

export const SidebarAnalyticsList = () => {
  const [isAnalyticsHidden, setIsAnalyticsHidden] = useState(false);
  const { isSidebarHidden } = useInterfaceContext();

  return (
    <div className="sidebar__analitycs">
      {!isSidebarHidden && (
        <button
          className="sidebar__button sidebar__button--expand"
          onClick={() => setIsAnalyticsHidden(!isAnalyticsHidden)}
        >
          Аналитика
          <ArrowDown className={`sidebar__arrow ${isAnalyticsHidden ? 'sidebar__arrow--rotate' : ''}`} />
        </button>
      )}
      <div className={`sidebar__analytics-container ${isAnalyticsHidden ? 'sidebar__analytics-container--hidden' : ''}`}>
        {SidebarAnalyticsButtons.map((item) => (
          <SidebarButton
            key={item.text}
            Svg={item.svg}
            text={item.text}
            link={item.link}
          />
        ))}
      </div>
    </div>

  )
}