import Bento from './Bento'
import CafeCafe01 from './Assets/CafeCafe01.svg'
import CafeCafe02 from './Assets/CafeCafe02.svg'
import CafeCafe05 from './Assets/CafeCafe05.svg'
import CafeCafe06 from './Assets/CafeCafe06.svg'
import CafeCafe07 from './Assets/CafeCafe07.svg'
import CafeCafe08 from './Assets/CafeCafe08.svg'
import CafeCafe09 from './Assets/CafeCafe09.svg'
import CafeCafe10 from './Assets/CafeCafe10.svg'
import CafeGrain from './Assets/CafeGrain.png'
import Creator from './Assets/Creator.png'

export default function BentoGrid() {

  return (
    <div className='BentoGrid'>
      <Bento
      size='B3x6'
      model='BImg'
      h2='Meals'
      img={CafeCafe07}/>

      <Bento
      size='B5x6'
      model='BImg'
      h2='Café Café Coffeeshop'
      p='Web Design by Francisco Buchini'
      img={CafeCafe01}
      tpos='TextTop'/>

      <Bento
      size='B6x3'
      model='BImg'
      img={CafeCafe09}/>

      <Bento
      size='B3x3'
      model='BImg' 
      img={CafeCafe02}/>

      <Bento
      size='B3x6'
      model='BImg'
      h2='Fast Food'
      img={CafeCafe06}/>

      <Bento
      size='B3x3'
      model='VT1I2'
      h2='Coffee Magic!'
      p='Join us for an unforgettable coffee journey today!'
      img={CafeGrain}
      tpos='TextCen'
      bg='#F2C491'/>

      <Bento
      size='B3x6'
      model='BImg' 
      h2='Cold Drinks'
      img={CafeCafe05}
      tpos='TextTop'/>

      <Bento
      size='B3x6'
      model='BImg' 
      h2='Hot Drinks'
      img={CafeCafe08}
      tpos='TextTop'/>

      <Bento
      size='B1x6'
      model='HT2I1'
      h2='Café Café Coffeeshop'
      p='Branding Design by Pedro Miguel Xarepe'
      img={Creator}
      tpos='TextCen'
      bg='#F2C491'/>

      <Bento
      size='B3x12'
      model='BImg'
      img={CafeCafe10}/>

    </div>
    )
  }