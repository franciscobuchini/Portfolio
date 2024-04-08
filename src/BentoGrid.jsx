import Bento from './Bento'

export default function BentoGrid() {
  return (
    <main className='BentoGrid'>
      <Bento st='IMG' sv='3' sh='2' />
      <Bento st='IMG' sv='2' sh='4' />
      <Bento st='IMG' sv='4' sh='2' />
      <Bento st='IMG' sv='3' sh='4' />
      <Bento st='IMG' sv='2' sh='2' />
      <Bento st='IMG' sv='3' sh='2' />
      <Bento st='IMG' sv='2' sh='4' />
      <Bento st='IMG' sv='2' sh='2' />
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
url: Link.
pcl: Paragraph Color.
hcl: Title (H2) Color.
alt: Image Reference.
*/}  