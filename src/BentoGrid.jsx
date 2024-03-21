import Bento from './Bento'

export default function BentoGrid() {
  return (
    <div className='BentoGrid'>

      <Bento sv='2' sh='2' st='VTI' tp='Mid' h='Bento' p='Soy el P del bento'/>
      <Bento sv='4' sh='2' st='VIT' tp='Mid' h='Bento' p='Soy el P del bento'/>
      <Bento sv='5' sh='2' st='VTIII' tp='Mid' h='Bento' p='Soy el P del bento'/>
      <Bento sv='2' sh='4' st='HTI' tp='End' h='Bento' p='Soy el P del bento'/>
      <Bento sv='3' sh='2' st='HIT' tp='End' h='Bento' p='Soy el P del bento'/>
      <Bento sv='1' sh='4' st='HITTT' tp='Mid' h='Bento' p='Soy el P del bento'/>
      <Bento sv='2' sh='4' st='TOTAL' h='Bento' p='Soy el P del bento!!'/>

    </div>
    )
  }