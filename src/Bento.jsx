export default function Bento({ size, model, h2, p, bg, img }) {
  return (
    <div className={`Bento ${size} ${model}`} style={{ backgroundColor: bg }}>
      <img className="Image" src={img}/>
      <div className="Text">
        <h2>{h2}</h2>
        <p>{p}</p>
      </div>
    </div>
    )
  }