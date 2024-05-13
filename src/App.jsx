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
import Limg23 from "./Assets/Limg23.webp"
import Limg24 from "./Assets/Limg24.webp"
import Limg25 from "./Assets/Limg25.webp"
import Limg26 from "./Assets/Limg26.webp"
import Limg27 from "./Assets/Limg27.webp"
import Limg28 from "./Assets/Limg28.webp"
import Limg29 from "./Assets/Limg29.webp"
import Limg30 from "./Assets/Limg30.webp"
import Limg31 from "./Assets/Limg31.webp"
import Limg32 from "./Assets/Limg32.webp"
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
    { href: 'Software' },
    { href: 'Contact' },
    { href: 'Education' },
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
        <Bento Bv="2" Bh="4" Bs="BR5" Limg={Limg1} Tp={"I'm <span>Francisco</span>, a nomad frontend developer from Argentina. Right now I'm applying my strong experience in UX/UI to develop and bring to life projects with React JS having fun creating components."} Tpc="var(--light)"/>
        <Bento Bv="4" Bh="4" IBimg={IBimg1} Th4="✈ Indonesia, April 2024"/>
        <Bento Bv="1" Bh="2" Bs="BR5" Tp="Switch Language" Com={LanguageSwitch}/>
        <Bento Bv="1" Bh="2" Bs="BR5" Tp="Switch Theme" Com={ThemeSwitch}/>
        <Map Bv="2" Bh="4" Th4="⚑ Nevada, US (until July 2024)"/>
        <Bento Bv="1" Bh="4" Bs="BR5" Tp="Download Resume" Com={Download}/>

      </BentoGrid>

      <BentoGrid id="Software" TAh1="Tools & Software:" TAp="Progression according to roadmap.sh">
        <Bento Bv="1" Bh="8" Bs="BR5" Th4="Website development:" Bbgc="transparent"/>
        <Bento Bv="1" Bh="2" Bs="BR5" Limg={Limg8} Th4="React" Tp="Intermediate" PBd="11" PBn="7"/>
        <Bento Bv="1" Bh="2" Bs="BR5" Limg={Limg9} Th4="JavaScript" Tp="Intermediate" PBd="19" PBn="14"/>
        <Bento Bv="1" Bh="2" Bs="BR5" Limg={Limg11} Th4="CSS" Tp="Advanced" PBd="14" PBn="13"/>
        <Bento Bv="1" Bh="2" Bs="BR5" Limg={Limg12} Th4="HTML" Tp="Advanced" PBd="14" PBn="12"/>
        <Bento Bv="1" Bh="2" Bs="BR5" Limg={Limg15} Th4="Redux" Tp="Introducing" PBd="12" PBn="2"/>
        <Bento Bv="1" Bh="2" Bs="BR5" Limg={Limg28} Th4="VS Code" Tp="Intermediate" PBd="11" PBn="7"/>
        <Bento Bv="1" Bh="2" Bs="BR5" Limg={Limg10} Th4="SASS" Tp="Intermediate" PBd="12" PBn="6"/>
        <Bento Bv="1" Bh="2" Bs="BR5" Limg={Limg13} Th4="Bootstrap" Tp="Basics" PBd="12" PBn="5"/>
        <Bento Bv="1" Bh="2" Bs="BR5" Limg={Limg14} Th4="Tailwind" Tp="Basics" PBd="12" PBn="5"/>
        <Bento Bv="1" Bh="2" Bs="BR5" Limg={Limg29} Th4="SQL" Tp="Introducing" PBd="12" PBn="1"/>
        <Bento Bv="1" Bh="2" Bs="BR5" Limg={Limg25} Th4="Wordpress" Tp="Introducing" PBd="12" PBn="2"/>


        <Bento Bv="1" Bh="8" Bs="BR5" Th4="UX/UI & Design tools:" Bbgc="transparent"/>
        <Bento Bv="1" Bh="2" Bs="BR5" Limg={Limg19} Th4="Figma" Tp="Advanced" PBd="12" PBn="10"/>
        <Bento Bv="1" Bh="2" Bs="BR5" Limg={Limg16} Th4="Adobe XD" Tp="Advanced" PBd="12" PBn="11"/>
        <Bento Bv="1" Bh="2" Bs="BR5" Limg={Limg17} Th4="Photoshop" Tp="Basics" PBd="12" PBn="5"/>
        <Bento Bv="1" Bh="2" Bs="BR5" Limg={Limg18} Th4="Illustrator" Tp="Basics" PBd="12" PBn="5"/>
        <Bento Bv="1" Bh="2" Bs="BR5" Limg={Limg27} Th4="Procreate" Tp="Intermediate"/>

        <Bento Bv="1" Bh="8" Bs="BR5" Th4="Version Control Systems & Hosting:" Bbgc="transparent"/>
        <Bento Bv="1" Bh="2" Bs="BR5" Limg={Limg2} Th4="Github"/>
        <Bento Bv="1" Bh="2" Bs="BR5" Limg={Limg20} Th4="Git"/>
        <Bento Bv="1" Bh="2" Bs="BR5" Limg={Limg21} Th4="Vercel"/>
        <Bento Bv="1" Bh="2" Bs="BR5" Limg={Limg22} Th4="Netlify"/>
        <Bento Bv="1" Bh="2" Bs="BR5" Limg={Limg30} Th4="Hostinger"/>

        <Bento Bv="1" Bh="8" Bs="BR5" Th4="Videogames:" Bbgc="transparent"/>
        <Bento Bv="1" Bh="2" Bs="BR5" Limg={Limg24} Th4="Unity" Tp="Basics" PBd="12" PBn="4"/>
        <Bento Bv="1" Bh="2" Bs="BR5" Limg={Limg31} Th4="C#" Tp="Basics" PBd="12" PBn="3"/>

      </BentoGrid>

      <BentoGrid id="Contact" TAh1="Profiles & Contact:">
        <Bento Bv="1" Bh="2" Bs="BR5" Limg={Limg2} Th4="Github" Tp="/franciscobuchini" Com={Button} Lurl="https://github.com/franciscobuchini" Bt="Github"  />
        <Bento Bv="1" Bh="2" Bs="BR5" Limg={Limg3} Th4="Linkedin" Tp="/franciscobuchini" Com={Button} Lurl="https://www.linkedin.com/in/franciscobuchini/" Bt="Linkedin"  />
        <Bento Bv="1" Bh="2" Bs="BR5" Limg={Limg7} Th4="Facebook" Tp="@franciscobuchini" Com={Button} Lurl="https://www.facebook.com/francisco.buchini.37/" Bt="Facebook"  />
        <Bento Bv="1" Bh="2" Bs="BR5" Limg={Limg5} Th4="Behance" Tp="/franciscobuchini" Com={Button} Lurl="https://www.behance.net/franciscobuchini" Bt="Behance"  />
        <Bento Bv="1" Bh="2" Bs="BR5" Limg={Limg4} Th4="Instagram" Tp="@franciscobuchini" Com={Button} Lurl="https://www.instagram.com/franciscobuchini" Bt="Instagram"  />
        <Bento Bv="1" Bh="2" Bs="BR5" Limg={Limg6} Th4="eMail" Tp="franciscobuchini@gmail.com" Com={Button} Lurl="mailto:franciscobuchini@gmail.com" Bt="eMail"  />
      </BentoGrid>

      <BentoGrid id="Education" TAh1="Education:">
        <Bento Bv="1" Bh="4" Bs="BR5" Limg={Limg9} Th4="JavaScript - Domestika" Tp="Introduction to JavaScript programming" Lurl="https://www.domestika.org/es/courses/390-introduccion-a-la-programacion-en-javascript/course" />
        <Bento Bv="1" Bh="4" Bs="BR5" Limg={Limg32} Th4="HTML & CSS - Domestika" Tp="Introduction to Responsive Web Development with HTML and CSS" Lurl="https://www.domestika.org/es/courses/74-introduccion-al-desarrollo-web-responsive-con-html-y-css/course" />
        <Bento Bv="1" Bh="4" Bs="BR5" Limg={Limg19} Th4="Figma - Domestika" Tp="Introduction to Design Systems with Figma" Lurl="https://www.domestika.org/es/courses/1157-introduccion-a-design-systems-con-figma/course" />
        <Bento Bv="1" Bh="4" Bs="BR5" Limg={Limg16} Th4="Adobe XD - Domestika" Tp="Getting started with Adobe XD for mobile apps" Lurl="https://www.domestika.org/es/courses/616-introduccion-a-adobe-xd-para-aplicaciones-moviles/course" />
        <Bento Bv="1" Bh="4" Bs="BR5" Limg={Limg24} Th4="Unity - Domestika" Tp="Advanced RPG video game design with Unity" Lurl="https://www.domestika.org/es/courses/1761-diseno-avanzado-de-videojuegos-rpg-con-unity/course" />
        <Bento Bv="1" Bh="4" Bs="BR5" Limg={Limg24} Th4="Unity - Domestika" Tp="Introduction to Unity for 2D video games" Lurl="https://www.domestika.org/es/courses/716-introduccion-a-unity-para-videojuegos-2d/course" />
        <Bento Bv="1" Bh="4" Bs="BR5" Limg={Limg17} Th4="Photoshop - Domestika" Tp="2D animation with Photoshop: drawing, camera and action!" Lurl="https://www.domestika.org/es/courses/235-animacion-2d-con-photoshop-dibujo-camara-y-accion/course" />
        <Bento Bv="1" Bh="4" Bs="BR5" Limg={Limg17} Th4="Photoshop - Domestika" Tp="Introduction to Adobe Photoshop" Lurl="https://www.domestika.org/es/courses/387-introduccion-a-adobe-photoshop/course" />
        <Bento Bv="1" Bh="4" Bs="BR5" Limg={Limg25} Th4="WordPress - Domestika" Tp="Creating a professional website with WordPress" Lurl="https://www.domestika.org/es/courses/112-creacion-de-una-web-profesional-con-wordpress/course" />
        <Bento Bv="1" Bh="4" Bs="BR5" Limg={Limg18} Th4="Illustrator - Domestika" Tp="Introduction to Adobe Illustrator" Lurl="https://www.domestika.org/es/courses/499-introduccion-a-adobe-illustrator/course" />
        <Bento Bv="1" Bh="4" Bs="BR5" Limg={Limg18} Th4="Illustrator - Domestika" Tp="Vector illustration for beginners" Lurl="https://www.domestika.org/es/courses/312-ilustracion-vectorial-para-principiantes/course" />
        <Bento Bv="1" Bh="4" Bs="BR5" Limg={Limg18} Th4="VS Code - Soy Dalto" Tp="Vector illustration for beginners" Lurl="https://www.domestika.org/es/courses/312-ilustracion-vectorial-para-principiantes/course" />

      </BentoGrid>

      <Footer cb="Created with:"/>
    </>
  )
}

export default App;