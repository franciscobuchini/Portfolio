export default function Bento({ size, model, h2, p, bg, img, txpos, link, pcol, h2col }) {

  const href = () => {window.open(link, "_blank")}

  return (
    <article onClick={href} className={`Bento ${txpos} ${size} ${model}`} style={{ backgroundColor: `var(--${bg})` }}>
      <img className="Image" src={img}/>
      <div className="Text">
        <h2 style={{ color: `var(--${h2col})` }}>{h2}</h2>
        <p style={{ color: `var(--${pcol})` }}>{p}</p>
      </div>
    </article>
    )
  }