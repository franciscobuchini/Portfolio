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

      <BentoGrid id="Software" TAh1="Software experience:">
        <Bento Bv="1" Bh="3"/>
      </BentoGrid>

      <BentoGrid id="Profiles" TAh1="Profiles:">
        <Bento Bv="1" Bh="3" Bs="B2" Limg={Limg2} Th4="Github" Tp="/franciscobuchini" Tpc="var(--transparent30light)" Com={Button} Lurl="https://github.com/franciscobuchini" Bt="Github" Bbgi="linear-gradient(to right bottom, #51277130, #51277100)" Outc="2px #51277190"/>
        <Bento Bv="1" Bh="2" Bs="B4" Limg={Limg3} Th4="Linkedin" Tp="/franciscobuchini" Tpc="var(--transparent30light)" Com={Button} Lurl="https://www.linkedin.com/in/franciscobuchini/" Bt="Linkedin" Bbgi="linear-gradient(to right bottom, #5a7fd330, #5a7fd300)" Outc="2px #5a7fd390"/>
        <Bento Bv="1" Bh="2" Bs="B4" Limg={Limg7} Th4="Facebook" Tp="@franciscobuchini" Tpc="var(--transparent30light)" Com={Button} Lurl="https://www.facebook.com/francisco.buchini.37/" Bt="Facebook" Bbgi="linear-gradient(to right bottom, #08439230, #08439200)" Outc="2px #08439290"/>
        <Bento Bv="1" Bh="1" Bbgc="transparent"/>
        <Bento Bv="1" Bh="1" Bbgc="transparent"/>
        <Bento Bv="1" Bh="2" Bs="B4" Limg={Limg5} Th4="Behance" Tp="/franciscobuchini" Tpc="var(--transparent30light)" Com={Button} Lurl="https://www.behance.net/franciscobuchini" Bt="Behance" Bbgi="linear-gradient(to right bottom, #01478530, #01478500)" Outc="2px #01478590"/>
        <Bento Bv="1" Bh="2" Bs="B4" Limg={Limg4} Th4="Instagram" Tp="@franciscobuchini" Tpc="var(--transparent30light)" Com={Button} Lurl="https://www.instagram.com/franciscobuchini" Bt="Instagram" Bbgi="linear-gradient(to right bottom, #C33A6B30, #C33A6B00)" Outc="2px #C33A6B90"/>
        <Bento Bv="1" Bh="3" Limg={Limg6} Th4="eMail" Tp="franciscobuchini@gmail.com" Tpc="var(--transparent30light)" Com={Button} Lurl="mailto:franciscobuchini@gmail.com" Bt="eMail" Bbgi="linear-gradient(to right bottom, #6e2c0a30, #6e2c0a00)" Outc="2px #6e2c0a90"/>
      </BentoGrid>

      <Footer cb="Created with:"/>
    </>
  )
}

export default App;