const ProgressBar = ({ PBn, PBd, PBt, PBimg, Tc }) => {
  // Calcular el porcentaje completado
  const percentage = (PBn / PBd) * 100;

  return (
    <div className='ProgressBar'>
      <div className='PBimg'>
        <img src={PBimg}/>
      </div>
      <div className='PB'>
        <div className='PBt'> <h5 style={{color: `var(--${Tc})`}}>{PBt}</h5> </div>
        <div className='PB100'>
        <div className='PBX' style={{ width: `${percentage}%`}}></div>
      </div>
      </div>
    </div>
  )
}

export default ProgressBar;