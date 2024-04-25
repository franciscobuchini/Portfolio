export default function Button({ Lurl }) {
  // Open a link in a new tab
  let link = () => { if (Lurl) {window.open(Lurl, "_blank")} }

  return ( <a className="Button" onClick={link}> </a> )
  }