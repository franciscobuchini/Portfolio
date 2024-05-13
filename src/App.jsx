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
import Limg8 from "./Assets/Limg8.webp"
import Limg9 from "./Assets/Limg9.webp"
import Limg10 from "./Assets/Limg10.webp"
import Limg11 from "./Assets/Limg11.webp"
import Limg12 from "./Assets/Limg12.webp"
import Limg13 from "./Assets/Limg13.webp"
import Limg14 from "./Assets/Limg14.webp"
import Limg15 from "./Assets/Limg15.webp"
import Limg16 from "./Assets/Limg16.webp"
import Limg17 from "./Assets/Limg17.webp"
import Limg18 from "./Assets/Limg18.webp"
import Limg19 from "./Assets/Limg19.webp"
import Limg20 from "./Assets/Limg20.webp"
import Limg21 from "./Assets/Limg21.webp"
import Limg22 from "./Assets/Limg22.webp"
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
        <Bento Bv="2" Bh="4" Bs="B10" Limg={Limg1} Tp={"I'm <span>Francisco</span>, a nomad frontend developer from Argentina. Right now I'm applying my strong experience in UX/UI to develop and bring to life projects with React JS having fun creating components."}/>
        <Bento Bv="4" Bh="4" IBimg={IBimg1} Th4="Indonesia, April 2024"/>
        <Map Bv="2" Bh="4" Th4="Nevada, US (until July 2024)"/>
      </BentoGrid>

      <BentoGrid id="Software" TAh1="Tools & Software:" TAp="Progression according to roadmap.sh">
        <Bento Bv="1" Bh="8" Bs="B11" Th4="Programming tools:" Bbgc="transparent"/>
        <Bento Bv="1" Bh="2" Limg={Limg8} Th4="React" Tp="Intermediate" Tpc="var(--transparent30light)" PBd="11" PBn="7"/>
        <Bento Bv="1" Bh="2" Limg={Limg9} Th4="Javascript" Tp="Intermediate" Tpc="var(--transparent30light)" PBd="19" PBn="14"/>
        <Bento Bv="1" Bh="2" Limg={Limg10} Th4="SASS" Tp="Intermediate" Tpc="var(--transparent30light)" PBd="12" PBn="6"/>
        <Bento Bv="1" Bh="2" Limg={Limg11} Th4="CSS" Tp="Advanced" Tpc="var(--transparent30light)" PBd="14" PBn="14"/>
        <Bento Bv="1" Bh="2" Limg={Limg12} Th4="HTML" Tp="Advanced" Tpc="var(--transparent30light)" PBd="12" PBn="11"/>
        <Bento Bv="1" Bh="2" Limg={Limg13} Th4="Bootstrap" Tp="Basics" Tpc="var(--transparent30light)" PBd="12" PBn="5"/>
        <Bento Bv="1" Bh="2" Limg={Limg14} Th4="Tailwind" Tp="Basics" Tpc="var(--transparent30light)" PBd="12" PBn="5"/>
        <Bento Bv="1" Bh="2" Limg={Limg15} Th4="Redux" Tp="Beginner" Tpc="var(--transparent30light)" PBd="12" PBn="2"/>

        <Bento Bv="1" Bh="8" Bs="B11" Th4="UX/UI and Design System tools:" Bbgc="transparent"/>
        <Bento Bv="1" Bh="2" Limg={Limg19} Th4="Figma" Tp="Advanced" Tpc="var(--transparent30light)" PBd="12" PBn="10"/>
        <Bento Bv="1" Bh="2" Limg={Limg16} Th4="Adobe XD" Tp="Advanced" Tpc="var(--transparent30light)" PBd="12" PBn="11"/>
        <Bento Bv="1" Bh="2" Limg={Limg17} Th4="Photoshop" Tp="Basics" Tpc="var(--transparent30light)" PBd="12" PBn="5"/>
        <Bento Bv="1" Bh="2" Limg={Limg18} Th4="Illustrator" Tp="Basics" Tpc="var(--transparent30light)" PBd="12" PBn="5"/>

        <Bento Bv="1" Bh="8" Bs="B11" Th4="Hosting & Version Control Systems:" Bbgc="transparent"/>
        <Bento Bv="1" Bh="2" Bs="B4" Limg={Limg2} Th4="Github"/>
        <Bento Bv="1" Bh="2" Bs="B4" Limg={Limg20} Th4="Git"/>
        <Bento Bv="1" Bh="2" Bs="B4" Limg={Limg21} Th4="Vercel"/>
        <Bento Bv="1" Bh="2" Bs="B4" Limg={Limg22} Th4="Netlify"/>
      </BentoGrid>

      <BentoGrid id="Profiles" TAh1="Profiles & Contact:">
        <Bento Bv="1" Bh="4" Bs="B4" Limg={Limg2} Th4="Github" Tp="/franciscobuchini" Tpc="var(--transparent30light)" Com={Button} Lurl="https://github.com/franciscobuchini" Bt="Github"  />
        <Bento Bv="1" Bh="2" Bs="B4" Limg={Limg3} Th4="Linkedin" Tp="/franciscobuchini" Tpc="var(--transparent30light)" Com={Button} Lurl="https://www.linkedin.com/in/franciscobuchini/" Bt="Linkedin"  />
        <Bento Bv="1" Bh="2" Bs="B4" Limg={Limg7} Th4="Facebook" Tp="@franciscobuchini" Tpc="var(--transparent30light)" Com={Button} Lurl="https://www.facebook.com/francisco.buchini.37/" Bt="Facebook"  />
        <Bento Bv="1" Bh="2" Bs="B4" Limg={Limg5} Th4="Behance" Tp="/franciscobuchini" Tpc="var(--transparent30light)" Com={Button} Lurl="https://www.behance.net/franciscobuchini" Bt="Behance"  />
        <Bento Bv="1" Bh="2" Bs="B4" Limg={Limg4} Th4="Instagram" Tp="@franciscobuchini" Tpc="var(--transparent30light)" Com={Button} Lurl="https://www.instagram.com/franciscobuchini" Bt="Instagram"  />
        <Bento Bv="1" Bh="4" Bs="B4" Limg={Limg6} Th4="eMail" Tp="franciscobuchini@gmail.com" Tpc="var(--transparent30light)" Com={Button} Lurl="mailto:franciscobuchini@gmail.com" Bt="eMail"  />
      </BentoGrid>

      <Footer cb="Created with:"/>
    </>
  )
}

export default App;