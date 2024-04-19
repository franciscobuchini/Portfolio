import React, { useState } from 'react'

export default function ThemeSwitch() {
  const [isChecked, setIsChecked] = useState(false)

  const ThemeSwitch = () => {
    setIsChecked(!isChecked)
    // Aquí puedes agregar lógica para cambiar el tema del sitio web
    if (!isChecked) {
      // Cambiar al tema oscuro
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      // Cambiar al tema claro
      document.documentElement.setAttribute('data-theme', 'light')
    }
  };

  return (
    <label className="Switch">
      <input type="checkbox" checked={isChecked} onChange={ThemeSwitch} />
    </label>
  );
}