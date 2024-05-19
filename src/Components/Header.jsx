import React from "react"

export default function Header ({ links, Com1, Com2}) {

  const handleLinkClick = (id, event) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>

      <div className="Header_Components">
      {Com1 && ( // Add the custom component
        <div className="Component">
          {React.createElement(Com1)}
        </div>
      )}
      {Com2 && ( // Add the custom component
        <div className="Component">
          {React.createElement(Com2)}
        </div>
      )}
      </div>

      <nav className="Header_Nav">
      <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={`#${link.href}`} onClick={() => handleLinkClick(link.href)}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="Header_Pulse">
        <div className="Pulse"></div>
        <p>Looking for job.</p>
      </div>
    </header>
  )
}