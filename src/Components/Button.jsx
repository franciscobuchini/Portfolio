export default function Button({ url }) {

  const link = () => { if (url) {window.open(url, "_blank")} }

  return (
    <button className="Button" onClick={link}>
    </button>
    )
  }