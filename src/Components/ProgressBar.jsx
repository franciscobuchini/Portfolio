const ProgressBar = ({ PBn, PBd, PBh }) => {
  // Calcular el porcentaje completado
  const percentage = (PBn / PBd) * 100;

  return (
    <div className="ProgressBar">
      <div className="PBImg">
        <img/>
      </div>
      <div className="PB">
        <div className="Text"> <h3>{PBh}</h3> </div>
        <div className="PB100">
        <div className="PBX" style={{ width: `${percentage}%`}}></div>
      </div>
      </div>
    </div>
  )
}

export default ProgressBar;