// BENTO.JSX
import React from 'react'

export default function Bento({ Bv, Bh, Bs, Bbg, Lurl, Th, Tp, Tc, IBimg, IBalt, IDimg, IDalt, IFimg, IFalt, Com, PBn, PBd, PBt, PBimg, Bt }) {

  // If background is transparent this means: no interaction if hover the Bento.
  let classNameBento = `Bento ${Bbg === 'transparent' ? 'Transparent' : ''} ${Bs} V${Bv} H${Bh}`

  // Open link in new tab if Lurl exists and component is not a button
  let link = Com !== 'Button' && Lurl ? () => window.open(Lurl, '_blank') : undefined

  return (
    <section
      className={classNameBento}
      onClick={link}
      style={{
        ...(Bbg && { backgroundColor: `var(--${Bbg})` }),
        cursor: link ? 'pointer' : 'auto',
      }}>

      {IBimg && <img className='Image ImageBack' src={IBimg} alt={IBalt}/>}
      {IDimg && <img className='Image ImageDispel' src={IDimg} alt={IDalt}/>}
      {IFimg && <img className='Image ImageFront' src={IFimg} alt={IFalt}/>}


      {(Th || Tp) && (
        <div className='Text' style={{
          height: Com ? 'auto' : '100%',
          width: Com ? 'auto' : '100%',          
        }}>
          <h4 style={{color: `var(--${Tc})`}}>{Th}</h4>
          <p style={{color: `var(--${Tc})`}}>{Tp}</p>
        </div>
      )}

      
      {Com && ( // Add the custom component
        <div className='Component'>
          {React.createElement(Com, { Lurl, PBn, PBd, PBt, PBimg, Bt, Tc })}
        </div>
      )}
    </section>
  )
}

/* 
Bsize: Bento - Size [look at Dimensions.css]
Bstyle: Bento - Style [B1, B2, B3, B4, B5, B6, B7, B8]
Bbg: Bento - Background Color

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
PBt: ProgressBar - <h5>

Bt: Button - Text

Com: Component [{Button}, {ThemeSwitch}, {ProgressBar}]
*/