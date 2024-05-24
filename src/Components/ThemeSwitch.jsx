import React, { useState, useEffect } from "react";

export default function ThemeSwitch({ onChange }) {
  // Estado inicial como true para que comience habilitado y en modo oscuro
  const [isChecked, setIsChecked] = useState(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    return currentTheme ? currentTheme === "dark" : true; // Predeterminado dark
  });

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (!currentTheme) {
      // Si no hay tema, establece el predeterminado a "dark"
      document.documentElement.setAttribute("data-theme", "dark");
    }
    setIsChecked(currentTheme === "dark");
  }, []);

  const handleThemeSwitch = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onChange(newCheckedState);

    if (newCheckedState) {
      // Cambiar a tema oscuro
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      // Cambiar a tema claro
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  return (
    <label className="Switch ThemeSwitch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleThemeSwitch}
      />
    </label>
  );
}
