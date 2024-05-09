import BentoGrid from "./Components/BentoGrid"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import React, { useState } from "react"
import Bento from "./Components/Bento"
import Map from "./Components/Map"
import IBimg1 from "./Assets/IBimg1.webp"
import Limg1 from "./Assets/Limg1.webp"
import Limg2 from "./Assets/Limg2.webp"
import Limg3 from "./Assets/Limg3.webp"
import Limg4 from "./Assets/Limg4.webp"
import Limg5 from "./Assets/Limg5.webp"
import Limg6 from "./Assets/Limg6.webp"
import Limg7 from "./Assets/Limg7.webp"
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

      <BentoGrid id="Intro" TAh1="Welcome :)">
        <Bento Bv="2" Bh="4" Limg={Limg1} Tp={"I'm <span>Francisco</span>, a nomad frontend developer from Argentina. Right now I'm applying my strong experience in UX/UI to develop and bring to life projects with React JS having fun creating components."}/>
        <Bento Bv="2" Bh="2" IBimg={IBimg1} Tp="Indonesia, April 2024."/>
        <Map Bv="2" Bh="2" Th4="Where I am:" Tp={"Nevada, United States. <p>until July 7th.</p>"}/>
      </BentoGrid>
      <BentoGrid id="Profiles" TAh1="Profiles:">
        <Bento Bv="1" Bh="4" Limg={Limg2} Th4="Github" Tp="/franciscobuchini" Com={Button} Lurl="https://github.com/franciscobuchini" Bt="Github"/>
        <Bento Bv="1" Bh="2" Limg={Limg3} Th4="Linkedin" Tp="/franciscobuchini" Com={Button} Lurl="https://www.linkedin.com/in/franciscobuchini/" Bt="Linkedin"/>
        <Bento Bv="1" Bh="2" Limg={Limg4} Th4="Instagram" Tp="@franciscobuchini" Com={Button} Lurl="https://www.instagram.com/franciscobuchini" Bt="Instagram"/>
        <Bento Bv="1" Bh="2" Limg={Limg5} Th4="Behance" Tp="/franciscobuchini" Com={Button} Lurl="https://www.behance.net/franciscobuchini" Bt="Behance"/>
        <Bento Bv="1" Bh="2" Limg={Limg7} Th4="Facebook" Tp="@franciscobuchini" Com={Button} Lurl="https://www.facebook.com/francisco.buchini.37/" Bt="Facebook"/>
        <Bento Bv="1" Bh="4" Limg={Limg6} Th4="eMail" Tp="franciscobuchini@gmail.com" Com={Button} Lurl="mailto:franciscobuchini@gmail.com" Bt="eMail"/>
      </BentoGrid>

      <Footer cb="Created with:"/>
    </>
  )
}

export default App;