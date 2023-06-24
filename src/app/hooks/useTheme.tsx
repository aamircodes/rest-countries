import { useState, useEffect, ChangeEvent } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState<string>('');

  const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? 'dark' : 'garden');
  };

  useEffect(() => {
    document.querySelector('html')?.setAttribute('data-theme', theme);
  }, [theme]);

  return { theme, handleToggle };
};

export default useTheme;
