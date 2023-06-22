import { useState, useEffect, ChangeEvent } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem('theme') ?? 'garden'
  );

  const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? 'dark' : 'garden');
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    document?.querySelector('html')?.setAttribute('data-theme', localTheme!);
  }, [theme]);

  return { theme, handleToggle };
};

export default useTheme;
