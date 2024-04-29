import React, { useState } from 'react';
import Bento from './Bento';
import Map from './Components/Map';
import ThemeSwitch from './Components/ThemeSwitch';
import ProgressBar from './Components/ProgressBar';
import ReactImg from './Assets/ReactImg.webp';

export default function BentoGrid() {
  
  const [theme, setTheme] = useState('light');
  const ThemeChange = (isChecked) => {
    setTheme(isChecked ? 'dark' : 'light');
  }

  return (
    <main className='BentoGrid'>
      <Bento Bsv='2' Bsh='4' Bst='B1' Th='Proximas tareas:' Tp='1)Cambiar mapa. 2) Crear labels.' />
      <Map Bsv='4' Bsh='2' Th='My location:' theme={theme} />
      <Bento Bsv='1' Bsh='2' Bst='B7' PBn='4' PBd='10' PBt='React:' PBimg={ReactImg} Com={ProgressBar}/>
      <Bento Bsv='2' Bsh='2' Bst='B7' Th='Theme switcher:' Com={() => <ThemeSwitch onChange={ThemeChange} />} />
    </main>
  )
}
