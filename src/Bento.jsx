import React from 'react';
export default function Bento({ st, sv, sh, h, p, bgc, img, tp, ta, fd, url, pcl, hcl, alt, com }) {

  const link = () => {window.open(url, "_blank")}

  return (
    <section
      onClick={st == 'EMPTY' ? link : null}
      className={`Bento ${st}`}
      style={{
        ...(bgc && { backgroundColor: `var(--${bgc})` }),
        gridRow: `span ${sv}`,
        gridColumn: `span ${sh}`,
        aspectRatio: `${sh}/${sv}`,
        flexDirection: `${fd}`
      }}>

      {img && <img className="Image" src={img} alt={alt}/>}
      {(h || p) && (<div className="Text" style={{
        justifyContent: `${tp}`,
        textAlign: `${ta}` }}>
        <h2 style={{ color: `var(--${hcl})` }}>{h}</h2>
        <p style={{ color: `var(--${pcl})` }}>{p}</p>
      </div> )}

      {com && <div className='Component'>
        {React.createElement(com)}
      </div> }
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
ta: Text Align.
url: Link.
pcl: Paragraph Color.
hcl: Title (H2) Color.
alt: Image Reference.
com: Component.
*/}