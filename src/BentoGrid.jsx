import Bento from './Bento'
import CafeCafe from './Assets/CafeCafe.svg'

export default function BentoGrid() {

  return (
    <div className='BentoGrid'>
      <Bento size='B5x3' model='VT1I2' h2='Título del Bento' p='Párrafo dentro del Bento' bg='white'/>
      <Bento size='B3x6' model='HT1I1' h2='Título del Bento' p='Párrafo dentro del Bento'/>
      <Bento size='B6x3' model='VT1I2' h2='Título del Bento' p='Párrafo dentro del Bento'/>
      <Bento size='B5x6' model='BentoImage' h2='Título del Bento' p='Párrafo dentro del Bento' img={CafeCafe}/>
      <Bento size='B3x3' model='VT1I1' h2='Título del Bento' p='Párrafo dentro del Bento'/>
      <Bento size='B5x3' model='VT1I2' h2='Título del Bento' p='Párrafo dentro del Bento'/>
      <Bento size='B3x6' model='HT1I1' h2='Título del Bento' p='Párrafo dentro del Bento'/>
      <Bento size='B3x3' model='VT1I1' h2='Título del Bento' p='Párrafo dentro del Bento'/>
    </div>
    )
  }