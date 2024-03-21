export default function Bento({ st, sv, sh, h, p, bg, img, tp, url, pcl, hcl }) {

  const link = () => {window.open(url, "_blank")}

  return (
    <section
      onClick={link}
      className={`Bento ${tp} ${st}`}
      style={{
        backgroundColor: `var(--${bg})`,
        gridRow: `span ${sv}`,
        gridColumn: `span ${sh}`,
        aspectRatio: `${sh}/${sv}`,
      }}>

      <img className="Image" src={img}/>
      <div className="Text">
        <h2 style={{ color: `var(--${hcl})` }}>{h}</h2>
        <p style={{ color: `var(--${pcl})` }}>{p}</p>
      </div>
    </section>
    )
  }