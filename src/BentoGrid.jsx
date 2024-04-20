import Bento from './Bento'
import BentoTest from './BentoTest'
import Switch from './Components/Switch'
import ThemeSwitch from './Components/ThemeSwitch'
import Button from './Components/Button'
import IF01 from './Assets/IF01.webp'
import ID01 from './Assets/ID01.webp'
import IB01 from './Assets/IB01.webp'

export default function BentoGrid() {

  return (
    <main className='BentoGrid'>
      <Bento Bsv='2' Bsh='4' Bbg='taxbreak' Th='Proximas tareas:' Tp='1) Animación y mods para botones. 2) Investigar patrones y probar backgrounds parallax. 3) Bentos de 8 columnas. 4) Logo Bento UI' Tpc='white' Tta='center' Tjc='center' />
      <BentoTest Bsv='3' Bsh='4' IFimg={IF01} IBimg={IB01}/>
      <BentoTest Bsv='3' Bsh='4' IDimg={ID01} IBimg={IB01}/>
      <Bento Bsv='2' Bsh='2' Bbg='transparent' Bfd='column' Bjc='center' Th='Switch example' Thc='christine' Tjc='center' Tta='center' Com={ThemeSwitch} Cjc='center'/>
      <Bento Bsv='3' Bsh='2' Bfd='column' Bjc='center'  Bbg='taxbreak' Tp='Branding Design by: Pedro Miguel Xarepe' url='https://www.behance.net/gallery/108077185/Caf-Caf-Coffee' Tpc='white' Tta='center' Com={Button} Cjc='center'/>
      <Bento Bsv='2' Bsh='2' Bbg='transparent' Bfd='column' Bjc='center' Th='Button example' Tp='Acá podemos agregar una descripción del sitio al cual nos lleva el botón para ver mas. Escribimos un texto largo para probar el overflow.' Thc='christine' Tjc='center' Tta='center' Tpc='white' Com={Button} Cjc='center'/>
    </main>
    )
  }