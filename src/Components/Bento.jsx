// BENTO.JSX
import React from "react"

export default function Bento({ id, Bv, Bh, Bs, Bbgc, Lurl, Th4, Tp, Th4c, Tpc, IBimg, IFimg, Limg, Com, PBn, PBd, Bt }) {

  // If background is transparent this means: no interaction if hover the Bento.
  let classNameBento = `Bento ${Bbgc === "transparent" ? "Transparent" : ""} ${Bs} V${Bv} H${Bh}`

  // Manejar el click en el botón o en el componente Bento
  const handleClick = () => {
    if (Lurl && Com === "Button") {
      window.open(Lurl, "_blank")
    } else if (Lurl && !Com) {
      window.open(Lurl, "_blank")
    }
  }

  // Calcular el porcentaje completado
  const percentage = (PBn / PBd) * 100;

  return (
    <section
      id={id}
      className={classNameBento}
      onClick={handleClick}
      style={{
        ...(Bbgc && { backgroundColor: `${Bbgc}` }),
        cursor: Lurl && !Com ? "pointer" : "auto"
      }}>

      {IBimg && <img className="Image ImageBack" src={IBimg} title={IBimg} alt={IBimg} loading="lazy" />}
      {IFimg && <img className="Image ImageFront" src={IFimg} title={IBimg} alt={IBimg} loading="lazy" />}

      <div className="Statement">
        {Limg && (
          <picture className='Limg'>
            <img src={Limg} title={Limg} alt={Limg} loading="lazy"/>
          </picture>
        )}
        <div className="Text">
          <h4 style={{color: `${Th4c}`}}>{Th4}</h4>
          <p style={{color: `${Tpc}`}} dangerouslySetInnerHTML={{ __html: Tp }} />
        </div>
      </div>

      {PBd && ( // Only render the progress bar if PBd exists
        <div className="PB">
          <div className="PBd"> </div>
          <div className="PBn" style={{ width: `${percentage}%`}}></div>
        </div>
      )}
      
      {Com && ( // Add the custom component
        <div className="Component">
          {React.createElement(Com, { Lurl, Bt })}
        </div>
      )}
      
    </section>
  )
}