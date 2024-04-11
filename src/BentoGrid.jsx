import Bento from './Bento'
import Switch from './Components/Switch'
import Button from './Components/Button'
import CafeCafe01 from './Assets/CafeCafe01.webp'
import CafeCafe03 from './Assets/CafeCafe03.webp'
import CafeCafe04 from './Assets/CafeCafe04.webp'
import CafeCafe05 from './Assets/CafeCafe05.webp'

export default function BentoGrid() {

  return (
    <main className='BentoGrid'>
      <Bento Bsv='3' Bsh='2' Bfd='column' Bjc='space-between' Th='Coffee' Tta='left'  Iimg={CafeCafe03} Com={Button} Cjc='left'/>
      <Bento Bsv='2' Bsh='4' Bbg='taxbreak' Th='Proximas tareas:' Tp='Animación y mods para botones. Investigar patrones y probar backgrounds parallax. Bentos de 8 columnas.' Tpc='white' Tta='center' Tjc='center' />
      <Bento Bsv='4' Bsh='2' Bfd='column' Bjc='space-between' Th='Take Away' Tta='left'  Iimg={CafeCafe04} Com={Button} Cjc='left'/>
      <Bento Bsv='3' Bsh='4' Iimg={CafeCafe01}/>
      <Bento Bsv='2' Bsh='2' Bbg='transparent' Bfd='column' Bjc='center' Th='Switch example' Thc='christine' Tjc='center' Tta='center' Com={Switch} Cjc='center'/>
      <Bento Bsv='3' Bsh='2' Bfd='column' Bjc='center'  Bbg='taxbreak' Tp='Branding Design by: Pedro Miguel Xarepe' url='https://www.behance.net/gallery/108077185/Caf-Caf-Coffee' Tpc='white' Tta='center' Com={Button} Cjc='center'/>
      <Bento Bsv='2' Bsh='4' Bfd='column' Bjc='space-between' Th='Menu' Tta='left' Iimg={CafeCafe05} Com={Button} Cjc='left'/>
      <Bento Bsv='2' Bsh='2' Bbg='transparent' Bfd='column' Bjc='center' Th='Button example' Tp='Acá podemos agregar una descripción del sitio al cual nos lleva el botón para ver mas. Escribimos un texto largo para probar el overflow.' Thc='christine' Tjc='center' Tta='center' Tpc='white' Com={Button} Cjc='center'/>
    </main>
    )
  }

{/*
Bsv: Bento - Size Vertical
Bsh: Bento - Size Horizontal
Bfd: Bento - Flex Direction
Bjc: Bento - Justify Content
Bbg: Bento - Background Color
Burl: Bento - Link

Th: Text - <H2>
Tp: Text - <P>
Tjc: Text - Justify Content
Tta: Text - Text Align
Thc: Text - <H2> Color
Tpc: Text - <P> Color

Iimg: Image - Image
Ialt: Image - Alt

Com: Component
Cjc: Component - Justify Content
*/}