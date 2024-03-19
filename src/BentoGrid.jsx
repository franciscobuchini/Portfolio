import Bento from './Bento'
import CafeCafe01 from './Assets/CafeCafe01.svg'
import CafeCafe02 from './Assets/CafeCafe02.svg'
import CafeCafe04 from './Assets/CafeCafe04.svg'
import CafeCafe05 from './Assets/CafeCafe05.svg'
import CafeCafe06 from './Assets/CafeCafe06.svg'
import CafeCafe07 from './Assets/CafeCafe07.svg'
import CafeCafe08 from './Assets/CafeCafe08.svg'
import CafeCafe09 from './Assets/CafeCafe09.svg'
import Creator from './Assets/Creator.png'

export default function BentoGrid() {

  return (
    <div className='BentoGrid'>
      <Bento size='B3x6' model='BentoImage' img={CafeCafe08}/>
      <Bento size='B5x6' model='BentoImage' img={CafeCafe01}/>
      <Bento size='B6x3' model='BentoImage' img={CafeCafe09}/>
      <Bento size='B3x3' model='BentoImage' img={CafeCafe02}/>
      <Bento size='B3x6' model='BentoImage' img={CafeCafe06}/>
      <Bento size='B3x3' model='BentoImage' img={CafeCafe04}/>
      <Bento size='B3x6' model='BentoImage' img={CafeCafe07}/>
      <Bento size='B3x6' model='BentoImage' img={CafeCafe05}/>
      <Bento size='B1x6' model='HT2I1' h2='Café Café Coffeeshop' p='by Pedro Miguel Xarepe' img={Creator}/>
    </div>
    )
  }