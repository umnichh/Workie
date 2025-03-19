import { HomeButton } from './HomeButton.tsx';
import { homeButtons } from './home.data.ts';

export const HomeButtonList = () => {
  return (
    homeButtons.map((item) => (
      <HomeButton key={item.text} BeforeIcon={item.BeforeIcon} Modal={item.Modal} text={item.text} AfterIcon={item.AfterIcon} />
    ))
  )
}