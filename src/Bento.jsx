import React from 'react'

export default function Bento({ Bsv, Bsh, Bst, Bbg, ARc, Lurl, Th, Tp, IBimg, IBalt, IDimg, IDalt, IFimg, IFalt, Com, PBn, PBd, PBt, PBimg }) {

  // If background is transparent this means: no interaction if hover the Bento and check Bsh value for Large class.
  let classNameBento = `Bento ${Bbg === "transparent" ? "Transparent" : ""} ${Bst} ${Bsh > 4 ? " Large" : ""}`

  // Open link in new tab if Lurl exists and component is not a button
  let link = Com !== "Button" && Lurl ? () => window.open(Lurl, "_blank") : undefined

  return (
    <section
      className={classNameBento}
      onClick={link}
      style={{
        ...(Bbg && { backgroundColor: `var(--${Bbg})` }),
        gridRow: `span ${Bsv}`,
        gridColumn: `span ${Bsh}`,
        ...(ARc && { aspectRatio: `${Bsh}/${Bsv}`}),
        cursor: link ? 'pointer' : 'auto',
      }}>

      {IBimg && <img className="Image ImageBack" src={IBimg} alt={IBalt}/>}
      {IDimg && <img className="Image ImageDispel" src={IDimg} alt={IDalt}/>}
      {IFimg && <img className="Image ImageFront" src={IFimg} alt={IFalt}/>}


      {(Th || Tp) && (
        <div className="Text" style={{
          height: Com ? 'auto' : '100%',
          width: Com ? 'auto' : '100%',
          
        }}>
          <h2>{Th}</h2>
          <p>{Tp}</p>
        </div>
      )}

      
      {Com && ( // Add the custom component
        <div className='Component'>
          {React.createElement(Com, { Lurl, PBn, PBd, PBt, PBimg })}
        </div>
      )}
    </section>
  )
}

/* 
Bsv: Bento - Size Vertical [1 to N]
Bsh: Bento - Size Horizontal [1 to 8]
Bst: Bento - Style [B1, B2, B3, B4, B5, B6, B7, B8]
Bbg: Bento - Background Color

ARc: Aspect Ratio Confirm [Y]

Th: Text - <H2>
Tp: Text - <P>

IBimg: Image Back - Image
IBalt: Image Back - Alt
IDimg: Image Dispel - Image
IDalt: Image Dispel - Alt
IFimg: Image Front - Image
IFalt: Image Front - Alt

Lurl: Bento or Component - Link

PBn: ProgressBar - Numerator
PBd: ProgressBar - Denominator
PBt: ProgressBar - <H3>

Com: Component [{Button}, {ThemeSwitch}, {ProgressBar}]
*/