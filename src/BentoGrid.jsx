import Bento from './Bento'
import Map from './Components/Map'
import ProgressBar from './Components/ProgressBar'
import ThemeSwitch from './Components/ThemeSwitch'
import Button from './Components/Button'

export default function BentoGrid() {
  return (
    <main className='BentoGrid'>
      <Bento Bsv='2' Bsh='4' Bst='B7' Th='Proximas tareas:' Tp='1) Animación y mods para botones. 2) Investigar patrones y probar backgrounds parallax.' />
      <Map Bsv='4' Bsh='2' />
      <Bento Bsv='2' Bsh='2' Bst='B7' PBn='2' PBd='10' Th='React' Com={ProgressBar}/>
      <Bento Bsv='2' Bsh='2' Bst='B7' Th='Texto de prueba' Com={Button}/>
      <Bento Bsv='2' Bsh='2' Bst='B7' Th='Texto de prueba' Com={ThemeSwitch}/>
    </main>
  )
}