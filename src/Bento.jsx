import React from 'react'

export default function Bento({ Bsv, Bsh, Bfd, Bjc, Bbg, url, Th, Tp, Tjc, Tta, Thc, Tpc, IBimg, IBalt, IDimg, IDalt, IFimg, IFalt, Com, Cjc }) {

  // If background is transparent this means: no interaction if hover the Bento.
  const classNameBento = `Bento ${Bbg === "transparent" ? "Transparent" : ""}`

  // Open link in new tab if URL exists and component is not a button
  const link = Com !== "Button" && url ? () => window.open(url, "_blank") : undefined

  return (
    <section
      className={classNameBento}
      onClick={link}
      style={{
        ...(Bbg && { backgroundColor: `var(--${Bbg})` }),
        gridRow: `span ${Bsv}`,
        gridColumn: `span ${Bsh}`,
        aspectRatio: `${Bsh}/${Bsv}`,
        flexDirection: `${Bfd}`,
        justifyContent: `${Bjc}`,
        cursor: link ? 'pointer' : 'auto',
      }}>

      {IBimg && <img className="Image ImageBack" src={IBimg} alt={IBalt}/>}
      {IDimg && <img className="Image ImageDispel" src={IDimg} alt={IDalt}/>}
      {IFimg && <img className="Image ImageFront" src={IFimg} alt={IFalt}/>}


      {(Th || Tp) && (
        <div className="Text" style={{
          height: Com ? 'auto' : '100%',
          width: Com ? 'auto' : '100%',
          justifyContent: `${Tjc}`,
          textAlign: `${Tta}`
        }}>
          <h2 style={{ color: `var(--${Thc})` }}>{Th}</h2>
          <p style={{ color: `var(--${Tpc})` }}>{Tp}</p>
        </div>
      )}

      
      {Com && ( // Add a custom component
        <div className='Component' style={{ justifyContent: `${Cjc}` }}>
          {React.createElement(Com, { url })}
        </div>
      )}
    </section>
  )
}

/* 
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

IBimg: Image Back - Image
IBalt: Image Back - Alt
IDimg: Image Dispel - Image
IDalt: Image Dispel - Alt
IFimg: Image Front - Image
IFalt: Image Front - Alt

Com: Component
Cjc: Component - Justify Content
*/