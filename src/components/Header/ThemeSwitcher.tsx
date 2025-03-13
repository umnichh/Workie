import { useEffect, useState } from 'react';
import Moon from '@/assets/Header/moon.svg?react';
import Sun from '@/assets/Header/sun.svg?react';

export default function ThemeSwitcher() {
  const localTheme =
    (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
  const [theme, setTheme] = useState<'dark' | 'light'>(localTheme);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      type="button"
      className={`theme-switcher ${theme === 'light' ? 'theme-switcher--white' : ''}`}
      onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
    >
      <div
        className={`theme-switcher__toggle ${theme === 'light' ? 'theme-switcher__toggle--white' : ''}`}
      />
      {theme === 'dark' ? (
        <Moon className="theme-switcher__toggle--moon" />
      ) : (
        <Sun className="theme-switcher__toggle--sun" />
      )}
    </button>
  );
}
