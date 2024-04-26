import React, { useEffect } from 'react'
import Bento from './Bento'
import Map from './Components/Map'
import ThemeSwitch from './Components/ThemeSwitch'
import Button from './Components/Button'

export default function BentoGrid() {
  useEffect(() => {
    // Aquí puedes ejecutar código después de que el DOM esté completamente cargado
  }, []) // Utilizamos un array vacío de dependencias para asegurar que el efecto se ejecute solo una vez

  return (
    <main className='BentoGrid'>
      <Bento Bsv='2' Bsh='4' Bst='B9' Th='Proximas tareas:' Tp='1) Animación y mods para botones. 2) Investigar patrones y probar backgrounds parallax. 3) problema con la pantalla estirada en la version mobile. 4) Agregar APIs.' />
      <Map Bsv='4' Bsh='2' />
    </main>
  )
}