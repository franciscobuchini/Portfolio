import Bento from './Bento'
import BentoTest from './BentoTest'
import Switch from './Components/Switch'
import ThemeSwitch from './Components/ThemeSwitch'
import Button from './Components/Button'
import Img01 from './Assets/Image01.webp'
import Img02 from './Assets/Image02.webp'
import Img03 from './Assets/Image03.webp'

export default function BentoGrid() {

  return (
    <main className='BentoGrid'>
      <Bento Bsv='2' Bsh='4' Bbg='taxbreak' Th='Proximas tareas:' Tp='1) Animación y mods para botones. 2) Investigar patrones y probar backgrounds parallax. 3) Bentos de 8 columnas. 4) Logo Bento UI' Tpc='white' Tta='center' Tjc='center' />
      <Bento Bsv='3' Bsh='4' IFimg={Img02} IBimg={Img01}/>
      <Bento Bsv='3' Bsh='4' IDimg={Img03} IBimg={Img01}/>
      <Bento Bsv='3' Bsh='4' IBimg={Img03}/>
      <Bento Bsv='2' Bsh='2' Bbg='transparent' Bfd='column' Bjc='center' Th='Switch example' Thc='christine' Tjc='center' Tta='center' Com={ThemeSwitch} Cjc='center'/>
      <Bento Bsv='3' Bsh='2' Bfd='column' Bjc='center'  Bbg='taxbreak' Tp='Branding Design by: Pedro Miguel Xarepe' url='https://www.behance.net/gallery/108077185/Caf-Caf-Coffee' Tpc='white' Tta='center' Com={Button} Cjc='center'/>
      <Bento Bsv='2' Bsh='2' Bbg='transparent' Bfd='column' Bjc='center' Th='Button example' Tp='Acá podemos agregar una descripción del sitio al cual nos lleva el botón para ver mas. Escribimos un texto largo para probar el overflow.' Thc='christine' Tjc='center' Tta='center' Tpc='white' Com={Button} Cjc='center'/>
    </main>
    )
  }