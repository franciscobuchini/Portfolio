import Bento from './Bento'
import Switch from './Components/Switch'
import Button from './Components/Button'
import CafeCafe01 from './Assets/CafeCafe01.webp'
import CafeCafe02 from './Assets/CafeCafe02.webp'
import CafeCafe03 from './Assets/CafeCafe03.webp'
import CafeCafe04 from './Assets/CafeCafe04.webp'
import CafeCafe05 from './Assets/CafeCafe05.webp'

export default function BentoGrid() {

  return (
    <main className='BentoGrid'>
      <Bento Bsv='3' Bsh='2' Bfd='column' Th='Hot Drinks' Tta='left' Bjc='space-between' Iimg={CafeCafe03} Com={Button} Cjc='left'/>
      <Bento Bsv='2' Bsh='4' Bbg='taxbreak' Th='Proximas tareas:' Tp='Solucionar los puntos suspensivos a la hora del overflow.' Tpc='white' Tta='center' Tjc='center' />
      <Bento Bsv='4' Bsh='2' Bfd='column' Th='Take Away' Tta='left' Bjc='space-between' Iimg={CafeCafe04} Com={Button} Cjc='left'/>
      <Bento Bsv='3' Bsh='4' Iimg={CafeCafe01}/>
      <Bento Bsv='2' Bsh='2' Bbg='christine' Bfd='column' Bjc='center' Th='Switch example' Tjc='center' Tta='center' Com={Switch} Cjc='center'/>
      <Bento Bsv='3' Bsh='2' img={CafeCafe02}/>
      <Bento Bsv='2' Bsh='4' img={CafeCafe05}/>
      <Bento Bsv='2' Bsh='2' Bbg='christine' Bfd='column' Bjc='space-between' Th='Button example' Tp='Acá podemos agregar una descripción del sitio al cual nos lleva el botón para ver mas.' Tjc='center' Tta='left' Com={Button} Cjc='right'/>

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