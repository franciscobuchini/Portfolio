import React, { useEffect } from 'react'
import Bento from './Bento'
import Map from './Components/Map'
import ThemeSwitch from './Components/ThemeSwitch'
import Button from './Components/Button'

export default function BentoGrid() {
  return (
    <main className='BentoGrid'>
      <Bento Bsv='2' Bsh='4' Bst='B9' Th='Proximas tareas:' Tp='1) Animación y mods para botones. 2) Investigar patrones y probar backgrounds parallax.' />
      <Map Bsv='4' Bsh='2' />
    </main>
  )
}