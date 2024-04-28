import Bento from './Bento'
import Map from './Components/Map'
import ProgressBar from './Components/ProgressBar'
import ThemeSwitch from './Components/ThemeSwitch'
import Button from './Components/Button'
import ReactBG from './Assets/ReactBG.webp'
import FigmaBG from './Assets/FigmaBG.webp'

export default function BentoGrid() {
  return (
    <main className='BentoGrid'>
      <Bento Bsv='2' Bsh='4' Bst='B1' Th='Proximas tareas:' Tp='1) Download Button. 2) Mini-logos en progressbar. 3) Theme del mapa. 4) Activar/Desactivar aspect-ratio de los bentos, opcion si no.' />
      <Map Bsv='4' Bsh='2' Th='My location:'/>
      <Bento Bsv='1' Bsh='2' Bst='B7' IBimg={ReactBG} PBn='4' PBd='10' PBh='React:' Com={ProgressBar}/>
      <Bento Bsv='1' Bsh='2' Bst='B7' IBimg={FigmaBG} PBn='4' PBd='10' PBh='Figma:' Com={ProgressBar}/>
      <Bento Bsv='2' Bsh='2' Bst='B7' Th='Texto de prueba' Com={Button}/>
      <Bento Bsv='2' Bsh='2' Bst='B7' Th='Theme switcher:' Com={ThemeSwitch}/>
    </main>
  )
}