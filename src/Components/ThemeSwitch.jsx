import React, { useState } from 'react';

export default function ThemeSwitch({ ThemeChange }) {
  const [isChecked, setIsChecked] = useState(false);

  let handleSwitch = () => {
    setIsChecked(!isChecked);

    if (!isChecked) {
      ThemeChange('dark'); // Cambiar a tema oscuro
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      ThemeChange('light'); // Cambiar a tema claro
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };

  return (
    <label className="Switch">
      <input type="checkbox" checked={isChecked} onChange={handleSwitch} />
    </label>
  );
}
