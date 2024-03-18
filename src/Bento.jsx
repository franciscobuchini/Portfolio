export default function Bento({ size, model, h2, p, bg }) {

  return (
    <div className={`Bento ${size} ${model}`} style={{ backgroundColor: bg }}>
      <div className="Text">
        <h2>{h2}</h2>
        <p>{p}</p>
      </div>
      <img className="Image" src='#'/>
    </div>
    )
  }