export default function Download({ Lurl }) {

  const Download = () => {
    if (Lurl) {
      const link = document.createElement("a")
      link.href = Lurl
      link.download = ""
      document.body.appendChild(link)
      link.click();
      document.body.removeChild(link)
    }
  }

  return (
    <a className="Button Download" onClick={Download}></a>
  )
}