export default function Footer ({cb}) {
  return (
    <footer>
      <div>
      <p className="CreatedBy">{cb}</p>
        <a className="Me" href="https://bentoboxui.vercel.app/" target="_blank">Bento Box UI</a>
      </div>
    </footer>
  )
}