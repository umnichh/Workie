import CalculatorSvg from "../../assets/Login/calculation-mathematics-calculator-svgrepo-com.svg?react";
import CalendarSvg from "../../assets/Login/calendar-svgrepo-com.svg?react";
import CheckSvg from "../../assets/Login/check-svgrepo-com.svg?react";
import ClockSvg from "../../assets/Login/clock-svgrepo-com.svg?react";
import EmailSvg from "../../assets/Login/email-svgrepo-com.svg?react";
import FinanceSvg from "../../assets/Login/finance-business-hierarchy-structure-organization-svgrepo-com.svg";
import FlagSvg from "../../assets/Login/flag-svgrepo-com.svg?react";
import Graph1Svg from "../../assets/Login/graph-svgrepo-com.svg?react";
import Graph2Svg from "../../assets/Login/graph-business-pie-analytics-marketing-svgrepo-com.svg"
import Background from "../../assets/Login/background.jpg";

export default function Login() {
  return (
    <div className="login">

      <div className="login__background">
        {
          <>
            <Background />
            <CalculatorSvg />
            <CalendarSvg />
            <CheckSvg />
            <ClockSvg />
            <EmailSvg />
            <FinanceSvg />
            <FlagSvg />
            <Graph1Svg />
            <Graph2Svg />
          </>
        }
      </div>
    </div>
  )
}
