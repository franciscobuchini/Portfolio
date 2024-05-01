import React from 'react';

export default function LanguageSwitch({ onChange, checked }) {
  const handleLanguageSwitch = (event) => {
    onChange(event.target.checked);
  };

  return (
    <label className="LanguageSwitch Switch">
      <input type="checkbox" checked={checked} onChange={handleLanguageSwitch} />
    </label>
  );
}
