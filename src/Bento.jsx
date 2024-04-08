export default function Bento({ st, sv, sh, h, p, bg, img, tp, url, pcl, hcl, alt }) {

  const link = () => {window.open(url, "_blank")}

  return (
    <section
      onClick={st == 'EMPTY' ? link : null}
      className={`Bento ${tp} ${st}`}
      style={{
        backgroundColor: `var(--${bg})`,
        gridRow: `span ${sv}`,
        gridColumn: `span ${sh}`,
        aspectRatio: `${sh}/${sv}`,
      }}>

      <img className="Image" src={img} alt={alt}/>
      <div className="Text">
        <h2 style={{ color: `var(--${hcl})` }}>{h}</h2>
        <p style={{ color: `var(--${pcl})` }}>{p}</p>
      </div>
    </section>
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