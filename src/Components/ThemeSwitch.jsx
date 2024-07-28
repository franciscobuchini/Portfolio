// ThemeSwitch.jsx
import React, { useState, useEffect } from "react";

export default function ThemeSwitch({ onChange }) {
  // Estado inicial como false para que comience habilitado y en modo oscuro
  const [isChecked, setIsChecked] = useState(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    return currentTheme ? currentTheme === "light" : false; // Predeterminado dark
  });

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (!currentTheme) {
      // Si no hay tema, establece el predeterminado a "dark"
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setIsChecked(currentTheme === "light");
    }
  }, []);

  const handleThemeSwitch = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    
    // Cambiar tema según el nuevo estado del checkbox
    const newTheme = newCheckedState ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    
    if (onChange) {
      onChange(newTheme); // Notifica el cambio de tema
    }
  };

  return (
    <label className="Switch ThemeSwitch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleThemeSwitch}
      />
      <span className="slider"></span> {/* Agregando un slider visual para el switch */}
    </label>
  );
}
