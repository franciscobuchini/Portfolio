import BentoGrid from "./Components/BentoGrid"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import React, { useState } from "react"
import Bento from "./Components/Bento"
import Map from "./Components/Map"
import IBimg1 from "./Assets/IBimg1.webp"
import Limg1 from "./Assets/Limg1.webp"
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

      <BentoGrid TAh1='Welcome :)'>
        
        <Bento Bv="2" Bh="4" Limg={Limg1} Tp={"I'm <span>Francisco</span>, a nomad frontend developer from Argentina. Right now I'm applying my strong experience in UX/UI to develop and bring to life projects with React JS."}/>
        <Bento Bv="2" Bh="2" IBimg={IBimg1} Tp="Indonesia, April 2024."/>
        <Map Bv="2" Bh="2" Th4="Where I am:" Tp={"Nevada, United States. <p>until July 7th.</p>"}/>

      </BentoGrid>

      <Footer cb="Created with:"/>
    </>
  )
}

export default App;