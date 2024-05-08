import BentoGrid from "./Components/BentoGrid"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import React, { useState } from "react"
import Bento from "./Components/Bento"
import Map from "./Components/Map"
import ThemeSwitch from "./Components/ThemeSwitch"
import LanguageSwitch from "./Components/LanguageSwitch"
import Button from "./Components/Button"
import Download from "./Components/Download"

function App() {

  // Language switcher:
  // const [language, setLanguage] = useState("english")
  // const handleLanguageSwitch = (isChecked) => { setLanguage(isChecked ? "spanish" : "english")}

  // // Map Theme switcher:
  // const [theme, setTheme] = useState("light")
  // const handleThemeSwitch = (isChecked) => {setTheme(isChecked ? "dark" : "light")}

  //Header list:
  const links = [
    {}
  ]

  // const lang = {
  //   english: {
  //     cb: "Created by:",
  //   },
  //   spanish: {
  //     cb: "Creado por:",
  //   }
  // }

  return (
    <>
      <Header links={links}/>

      <BentoGrid>
        <Bento Bv="2" Bh="4" Tp={"I'm <span>Francisco</span>, a nomad frontend developer from Argentina. Right now I'm applying my strong experience in UX/UI to develop and bring to life projects with React JS."}/>
      </BentoGrid>

      <Footer cb="Created by:"/>
    </>
  )
}

export default App;