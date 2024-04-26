const ProgressBar = ({ PBn, PBd }) => {
  // Calcular el porcentaje completado
  const percentage = (PBn / PBd) * 100;

  return (
    <div className="ProgressBar100">
      <div className="ProgressBarX" style={{ width: `${percentage}%`}}>
      </div>
    </div>
  );
};

export default ProgressBar;