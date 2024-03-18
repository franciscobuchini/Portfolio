export default function Bento({ size, model, h2, p }) {

  return (
    <div className={`Bento ${size} ${model}`}>
      <div className="Text">
        <h2>{h2}</h2>
        <p>{p}</p>
      </div>
      <img className="Image" src='#'/>
    </div>
    )
  }