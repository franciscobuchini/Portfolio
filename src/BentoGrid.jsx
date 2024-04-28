import Bento from './Bento'
import Map from './Components/Map'
import ProgressBar from './Components/ProgressBar'
import ThemeSwitch from './Components/ThemeSwitch'
import Button from './Components/Button'
import ReactBG from './Assets/ReactBG.webp'

export default function BentoGrid() {
  return (
    <main className='BentoGrid'>
      <Bento Bsv='2' Bsh='4' Bst='B7' Th='Proximas tareas:' Tp='1) Download Button. 2) Mini-logos en progressbar. 3) Texto en mapa.' />
      <Map Bsv='4' Bsh='2' />
      <Bento Bsv='2' Bsh='2' Bst='B7' IBimg={ReactBG} PBn='2' PBd='10' PBh='React JS:' Com={ProgressBar}/>
      <Bento Bsv='2' Bsh='2' Bst='B7' Th='Texto de prueba' Com={Button}/>
      <Bento Bsv='2' Bsh='2' Bst='B7' Th='Theme switcher:' Com={ThemeSwitch}/>
    </main>
  )
}