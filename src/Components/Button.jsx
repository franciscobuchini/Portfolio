export default function Button({ url }) {
  // Open a link in a new tab
  const link = () => { if (url) {window.open(url, "_blank")} }

  return ( <button className="Button" onClick={link}> </button> )
  }