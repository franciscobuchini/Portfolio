import Bento from './Bento'
import Switch from './Components/Switch'
import Button from './Components/Button'
export default function BentoGrid() {
  return (
    <main className='BentoGrid'>
      <Bento sv='3' sh='2' />
      <Bento sv='2' sh='4' />
      <Bento sv='4' sh='2' />
      <Bento sv='3' sh='4' h='Proximas tareas:' p='Necesito crear una armonía entre la imagen, el text div y el nuevo component div. Estaba pensando que la imagen tiene que ir position absolute y que ocupe el 100% del fondo. Que la imagen ocupe los espacios desde la creacion de la misma y entonces solo me queda organizar los elementos .Text y .Component.'/>
      <Bento st='VTI' sv='2' sh='2' com={Switch} h='Switcher example' tp='center' ta='center'/>
      <Bento sv='3' sh='2' />
      <Bento sv='2' sh='4' />
      <Bento st='VTI' sv='2' sh='2' com={Button} h='Button example' tp='center' ta='center'/>
    </main>
    )
  }

  {/*
st: Style / Organization
sv: Size Vertical.
sh: Size Horizontal.
h: Title (H2).
p: Paragraph.
bg: Background Color.
img: Image.
tp: Text Position.
ta: Text Align.
url: Link.
pcl: Paragraph Color.
hcl: Title (H2) Color.
alt: Image Reference.
com: Component.
*/}  