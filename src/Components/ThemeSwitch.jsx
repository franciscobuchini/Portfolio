import React, { useState } from 'react'

export default function ThemeSwitch() {
  const [isChecked, setIsChecked] = useState(false)

  const ThemeSwitch = () => {
    setIsChecked(!isChecked)
    if (!isChecked) {
      // Change to dark theme
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      // Change to light theme
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }

  return (
    <label className="Switch">
      <input type="checkbox" checked={isChecked} onChange={ThemeSwitch} />
    </label>
  )
}