export default function Bento({ size, model, h2, p, bg, img, tpos }) {
  return (
    <div className={`Bento ${tpos} ${size} ${model}`} style={{ backgroundColor: bg }}>
      <img className="Image" src={img}/>
      <div className="Text">
        <h2>{h2}</h2>
        <p>{p}</p>
      </div>
    </div>
    )
  }