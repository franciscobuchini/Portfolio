import React from 'react';

export default function LanguageSwitch({ onChange, checked }) {
  const handleLanguageSwitch = (event) => {
    onChange(event.target.checked);
  };

  return (
    <label className='Switch LanguageSwitch'>
      <input type='checkbox' checked={checked} onChange={handleLanguageSwitch} />
    </label>
  );
}
