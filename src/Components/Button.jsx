export default function Button({ url }) {
  // Open a link in a new tab
  let link = () => { if (url) {window.open(url, "_blank")} }

  return ( <a className="Button" onClick={link}> </a> )
  }