import Bento from './Bento'
import Map from './Components/Map'
import ProgressBar from './Components/ProgressBar'
import ThemeSwitch from './Components/ThemeSwitch'
import Button from './Components/Button'
import Download from './Components/Download'

export default function BentoGrid() {
  return (
    <main className='BentoGrid'>
      <Bento Bsv='2' Bsh='4' Bst='B1' Th='Proximas tareas:' Tp='1)Cambiar mapa.' />
      <Map Bsv='4' Bsh='2' ARc='Y' Th='My location:'/>
      <Bento Bsv='1' Bsh='2' Bst='B7' PBn='4' PBd='10' PBh='React:' Com={ProgressBar}/>
      <Bento Bsv='1' Bsh='2' Bst='B7' PBn='4' PBd='10' PBh='Figma:' Com={ProgressBar}/>
      <Bento Bsv='2' Bsh='2' Bst='B7' Th='Texto de prueba' Com={Button}/>
      <Bento Bsv='2' Bsh='2' Bst='B7' Th='Theme switcher:' Com={ThemeSwitch}/>
      <Bento Bsv='2' Bsh='2' Bst='B7' Th='My resume:' Com={Download}/>
    </main>
  )
}