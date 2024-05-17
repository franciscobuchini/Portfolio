import BentoGrid from "./Components/BentoGrid"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import React, { useState } from "react"
import Bento from "./Components/Bento"
import Map from "./Components/Map"
import IFimg1 from "./Assets/IFimg1.webp"
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
import Limg33 from "./Assets/Limg33.webp"

import Limg_EM from "./Assets/Limg_EM.webp"
import Limg_CC from "./Assets/Limg_CC.webp"
import Limg_GGC from "./Assets/Limg_GGC.webp"
import Limg_BBUI from "./Assets/Limg_BBUI.webp"

import IFimg_TDE from "./Assets/IFimg_TDE.webp"
import IFimg_TDA1 from "./Assets/IFimg_TDA1.webp"
import IFimg_TDA2 from "./Assets/IFimg_TDA2.webp"
import IFimg_TDSA from "./Assets/IFimg_TDSA.webp"
import IFimg_TDC from "./Assets/IFimg_TDC.webp"
import IFimg_LP from "./Assets/IFimg_LP.webp"
import IFimg_BREO from "./Assets/IFimg_BREO.webp"
import IFimg_PDS from "./Assets/IFimg_PDS.webp"
import IFimg_HUN from "./Assets/IFimg_HUN.webp"
import IFimg_DEEB from "./Assets/IFimg_DEEB.webp"
import IFimg_EM from "./Assets/IFimg_EM.webp"
import IFimg_CC from "./Assets/IFimg_CC.webp"
import IFimg_GGC from "./Assets/IFimg_GGC.webp"
import IFimg_CAL from "./Assets/IFimg_CAL.webp"
import IFimg_BBUI from "./Assets/IFimg_BBUI.webp"

import IBimg_LP from "./Assets/IBimg_LP.webp"
import IBimg_TDL from "./Assets/IBimg_TDL.webp"
import IBimg_TDR from "./Assets/IBimg_TDR.webp"
import IBimg_BREO from "./Assets/IBimg_BREO.webp"
import IBimg_PDS from "./Assets/IBimg_PDS.webp"
import IBimg_HUN from "./Assets/IBimg_HUN.webp"
import IBimg_BBUI from "./Assets/IBimg_BBUI.webp"
import IBimg_DEEB from "./Assets/IBimg_DEEB.webp"
import IBimg_CC from "./Assets/IBimg_CC.webp"
import IBimg_EM from "./Assets/IBimg_EM.webp"
import IBimg_GGC from "./Assets/IBimg_GGC.webp"

import ThemeSwitch from "./Components/ThemeSwitch"
import LanguageSwitch from "./Components/LanguageSwitch"
import Button from "./Components/Button"
import Download from "./Components/Download"

function App() {

  // Language switcher:
  const [language, setLanguage] = useState("english")
  const handleLanguageSwitch = (isChecked) => { setLanguage(isChecked ? "spanish" : "english")}

  // Map Theme switcher:
  const [theme, setTheme] = useState("main")
  const handleThemeSwitch = (isChecked) => {setTheme(isChecked ? "secondary" : "main")}

  const lang = {
    english: {
      //-------------------------------------------------------------------------
      Created: "Created with:",
      Job: "Looking for job.",
      Nav_Intro: "Intro",
      Nav_Projects: "Projects",
      Nav_Software: "Software",
      Nav_About: "About",
      Nav_Contact: "Contact",
      Nav_Education: "Education",
      Button: "Visit",
      Visit: "Visit",
      Play: "Play",
      Try: "Try",
      //-------------------------------------------------------------------------
      Intro_TAh1: "Welcome 👋",
      Intro_01_Tp: "I'm <span>Francisco</span>, a nomad frontend developer from Argentina. Right now I'm applying my strong experience in UX/UI to develop and bring to life projects with ReactJS having fun creating components.",
      Intro_02_Th4: "🛩️ Indonesia, April 2024",
      Intro_03_Tp: "Switch Language",
      Intro_04_Tp: "Switch Theme",
      Intro_05_Th4: "🏠 Nevada, USA (until July 2024)",
      Intro_06_Tp: "Download Resume:",
      //-------------------------------------------------------------------------
      Projects_TAh1: "Projects 💻",
      Projects_01_Th4: "Programming:",
      Projects_BBUI_Tp: "Created with: ReactJS.",
      Projects_GGC_Tp: "Created with: JavaScript.",
      Projects_EM_Tp: "Restaurant placed <br> in Wellington, NZ.",
      Projects_CAL_Tp: "Created with: <br> JavaScript.",
      Projects_CC_Tp: "Created with: <br> Bento Box UI.",

      Projects_02_Th4: "Design:",
      Projects_HUN_Tp: "UX/UI Design for a RPG.",
      Projects_PDS_Tp: "Design System for a mobile app for pets.",
      Projects_BREO_Tp: "UX/UI for my own app that worked during the covid-19.",
      Projects_LP_Tp: "UX/UI Design for a TBS Game.",
      Projects_TDE_Tp: "European Clubs.",
      Projects_TDA1_Tp: "Argentine Teams.",
      Projects_TDA2_Tp: "Argentine Teams.",
      Projects_TDC_Tp: "Colón de Santa Fe.",
      Projects_TDSA_Tp: "Argentina National Team.",
      Projects_DEEB_Tp: "Music App UX/UI.",
      //-------------------------------------------------------------------------
      Software_TAh1: "Tools & Software ⚙️",
      Software_TAp: "Progression according to roadmap.sh",
      Software_01_Th4: "Website development:",
      Software_02_Th4: "UX/UI & Design tools:",
      Software_03_Th4: "Version Control Systems & Hosting:",
      Software_04_Th4: "Videogames development:",
      Software_Advanced: "Advanced",
      Software_Intermediate: "Intermediate",
      Software_Basics: "Basics",
      Software_Introducing: "Introducing",
      //-------------------------------------------------------------------------
      Contact_TAh1: "Profiles & Contact 🤙",
      //-------------------------------------------------------------------------
      Education_TAh1: "Education 📚",
      Education_TAp: "More than 180 hours of study with courses.",
      Education_UNL_Th4: "Software Engineer",
      Education_UNL_Tp: "Universidad Nacional del Litoral (2016 - 2018 not finished)",
      Education_JS1_Dal_Tp: "JavaScript course from zero - Junior Level. [10:00:41]",
      Education_JS2_Dal_Tp: "JavaScript course from zero - Mid Level. [7:56:53]",
      Education_JS3_Dal_Tp: "JavaScript course from zero - Master Level. [9:23:19]",
      Education_JS_Dom_Tp: "Introduction to JavaScript programming. [3:02:00]",
      Education_HTMLCSS_Dal_Tp: "HTML & CSS course from scratch. [24:01:03]",
      Education_HTMLCSS_Dom_Tp: "Responsive Web Development with HTML/CSS. [2:18:00]",
      Education_CSS_Dal_Tp: "CSS course from zero. [9:46:55]",
      Education_HTML_Dal_Tp: "HTML5 course from scratch. [2:24:46]",
      Education_SQL_Dal_Tp: "SQL course from zero. [7:21:27]",
      Education_GIT_Dal_Tp: "Git & Github course from zero. [4:11:47]",
      Education_HOS_Dal_Tp: "Hosting course from zero. [2:15:34]",
      Education_VSC_Dal_Tp: "Visual Studio Code course from zero. [2:20:02]",
      Education_XD_Dom_Tp: "Getting started with Adobe XD for mobile apps. [7:21:00]",
      Education_FIG_Dom_Tp: "Introduction to Design Systems with Figma. [4:38:00]",
      Education_UNI1_Dom_Tp: "Advanced RPG video game design with Unity. [7:36:00]",
      Education_UNI2_Dom_Tp: "Introduction to Unity for 2D video games. [10:18:00]",
      Education_PS1_Dom_Tp: "2D animation with Photoshop: drawing, camera and action! [4:39:00]",
      Education_PS2_Dom_Tp: "Introduction to Adobe Photoshop. [6:54:00]",
      Education_IL1_Dom_Tp: "Introduction to Adobe Illustrator. [10:09:00]",
      Education_IL2_Dom_Tp: "Vector illustration for beginners. [8:03:00]",
      Education_IL3_Dom_Tp: "Advanced Adobe Illustrator for illustration. [11:22:00]",
      Education_WP_Dom_Tp: "Creating a professional website with WordPress. [5:33:00]",
      Education_AE_Dom_Tp: "Introduction to Affter Effects. [14:02:00]",
      //-------------------------------------------------------------------------
      About_TAh1: "About me 🤿",
      //-------------------------------------------------------------------------
    },
    spanish: {
      //-------------------------------------------------------------------------
      Created: "Creado con:",
      Job: "Buscando trabajo.",
      Nav_Intro: "Intro",
      Nav_Projects: "Proyectos",
      Nav_Software: "Programas",
      Nav_About: "Acerca",
      Nav_Contact: "Contacto",
      Nav_Education: "Educación",
      Button: "Visitar",
      Visit: "Visitar",
      Play: "Jugar",
      Try: "Probar",
      //-------------------------------------------------------------------------
      Intro_TAh1: "Bienvenidos 👋",
      Intro_01_Tp: "Soy <span>Francisco</span>, desarrollador frontend nómada de Argentina. Ahora mismo estoy aplicando mi sólida experiencia en UX/UI para desarrollar y traer a la vida proyectos con ReactJS divirtiéndome creando componentes.",
      Intro_02_Th4: "🛩️ Indonesia, Abril 2024",
      Intro_03_Tp: "Cambiar idioma",
      Intro_04_Tp: "Cambiar tema",
      Intro_05_Th4: "🏠 Nevada, USA (hasta julio 2024)",
      Intro_06_Tp: "Descargar CV:",
      //-------------------------------------------------------------------------
      Projects_TAh1: "Proyectos 💻",
      Projects_01_Th4: "Programación:",
      Projects_BBUI_Tp: "Creado con: ReactJS.",
      Projects_GGC_Tp: "Creado con: JavaScript.",
      Projects_EM_Tp: "Restaurant ubicado <br> en Wellington, NZ.",
      Projects_CAL_Tp: "Creado con: <br> JavaScript.",
      Projects_CC_Tp: "Creado con: <br> Bento Box UI.",

      Projects_02_Th4: "Diseño:",
      Projects_HUN_Tp: "Diseño UX/UI para un RPG.",
      Projects_PDS_Tp: "Design System para una app de mascotas.",
      Projects_BREO_Tp: "UX/UI para mi app que funcionó durante el covid-19.",
      Projects_LP_Tp: "Diseño UX/UI para un juego TBS.",
      Projects_TDE_Tp: "Clubes Europeos.",
      Projects_TDA1_Tp: "Fútbol Argentino.",
      Projects_TDA2_Tp: "Fútbol Argentino.",
      Projects_TDC_Tp: "Colón de Santa Fe.",
      Projects_TDSA_Tp: "Selección Argentina.",
      Projects_DEEB_Tp: "Music App UX/UI.",
      //-------------------------------------------------------------------------
      Software_TAh1: "Herramientas y Programas ⚙️",
      Software_TAp: "Progreso según roadmap.sh",
      Software_01_Th4: "Desarrollo web:",
      Software_02_Th4: "UX/UI y Diseño:",
      Software_03_Th4: "Sistemas de control de versión y alojamiento web:",
      Software_04_Th4: "Desarrollo de videojuegos:",
      Software_Advanced: "Avanzado",
      Software_Intermediate: "Intermedio",
      Software_Basics: "Básicos",
      Software_Introducing: "Principiante",
      //-------------------------------------------------------------------------
      Contact_TAh1: "Perfil y Contacto 🤙",
      //-------------------------------------------------------------------------
      Education_TAh1: "Educación 📚",
      Education_TAp: "Mas de 180 horas de cursado.",
      Education_UNL_Th4: "Ingeniería Informática",
      Education_UNL_Tp: "Universidad Nacional del Litoral (2016 - 2018 sin finalizar)",
      Education_JS1_Dal_Tp: "Curso de JavaScript desde cero - Junior Level. [10:00:41]",
      Education_JS2_Dal_Tp: "Curso de JavaScript desde cero - Mid Level. [7:56:53]",
      Education_JS3_Dal_Tp: "Curso de JavaScript desde cero - Master Level. [9:23:19]",
      Education_JS_Dom_Tp: "Introducción a programación en JavaScript. [3:02:00]",
      Education_HTMLCSS_Dal_Tp: "Curso de HTML & CSS desde cero. [24:01:03]",
      Education_HTMLCSS_Dom_Tp: "Desarrollo Web Responsive con HTML/CSS. [2:18:00]",
      Education_CSS_Dal_Tp: "Curso de CSS desde cero. [9:46:55]",
      Education_HTML_Dal_Tp: "Curso de HTML5 desde cero. [2:24:46]",
      Education_SQL_Dal_Tp: "Curso de SQL desde cero. [7:21:27]",
      Education_GIT_Dal_Tp: "Curso de Git & Github desde cero. [4:11:47]",
      Education_HOS_Dal_Tp: "Curso de Hosting desde cero. [2:15:34]",
      Education_VSC_Dal_Tp: "Curso de Visual Studio Code desde cero. [2:20:02]",
      Education_XD_Dom_Tp: "Comenzando con Adobe XD para aplicaciones móviles. [7:21:00]",
      Education_FIG_Dom_Tp: "Introducción a System Design con Figma. [4:38:00]",
      Education_UNI1_Dom_Tp: "Diseño avanzado de videojuegos RPG con Unity. [7:36:00]",
      Education_UNI2_Dom_Tp: "Introducción a Unity para videojuegos 2D. [10:18:00]",
      Education_PS1_Dom_Tp: "Animaciones 2D con Photoshop: dibujo, cámara y acción! [4:39:00]",
      Education_PS2_Dom_Tp: "Introducción a Adobe Photoshop. [6:54:00]",
      Education_IL1_Dom_Tp: "Introducción a Adobe Illustrator. [10:09:00]",
      Education_IL2_Dom_Tp: "Ilustración vectorial para principiantes. [8:03:00]",
      Education_IL3_Dom_Tp: "Adobe Illustrator avanzado para ilustración. [11:22:00]",
      Education_WP_Dom_Tp: "Creando un sitio web profesional con WordPress. [5:33:00]",
      Education_AE_Dom_Tp: "Introducción a Affter Effects. [14:02:00]",
      //-------------------------------------------------------------------------
      About_TAh1: "Acerca de mi:",
      //-------------------------------------------------------------------------
    }
  }

  //Header list:
  const links = [
    { name: lang[language].Nav_Intro, href: "Intro"},
    { name: lang[language].Nav_Projects, href: "Projects"},
    { name: lang[language].Nav_Software, href: "Software" },
    { name: lang[language].Nav_Education, href: "Education" },
    { name: lang[language].Nav_About, href: "About" },
    { name: lang[language].Nav_Contact, href: "Contact" },
  ]

  return (
    <>
      <Header links={links}/>

      <BentoGrid id="Intro" TAh1={lang[language].Intro_TAh1}>
        <Bento id="Presentation" Bv="2" Bh="4" Bs="BL2" Limg={Limg1} Tp={lang[language].Intro_01_Tp} />
        <Bento Bv="4" Bh="4" IFimg={IFimg1} Th4c="var(--white)" Th4={lang[language].Intro_02_Th4}/>
        <Bento Bv="1" Bh="2" Bs="BC2" Tp={lang[language].Intro_03_Tp} Com={() => <LanguageSwitch onChange={handleLanguageSwitch} checked={language === 'spanish'}/>} />
        <Bento Bv="1" Bh="2" Bs="BC2" Tp={lang[language].Intro_04_Tp} Com={() => <ThemeSwitch onChange={handleThemeSwitch}/>} />
        <Map Bv="2" Bh="4" Th4={lang[language].Intro_05_Th4} theme={theme}/>
        <Bento Bv="1" Bh="4" Bs="BC2" Tp={lang[language].Intro_06_Tp} Com={Download}/>
      </BentoGrid>

      <BentoGrid id="Projects" TAh1={lang[language].Projects_TAh1}>
      <Bento Bv="1" Bh="8" Bs="BE1" Th4={lang[language].Projects_01_Th4} Bbgc="transparent"/>
      <Bento Bv="4" Bh="4" Bs="BL4" Th4="Bento Box UI" Limg={Limg_BBUI} IBimg={IBimg_BBUI} IFimg={IFimg_BBUI} Tp={lang[language].Projects_BBUI_Tp} Com={Button} Bt={lang[language].Visit}  Lurl="https://bentoboxui.vercel.app" />
      <Bento Bv="2" Bh="4" Bs="BR1" Th4="Geo Game Challenge" Limg={Limg_GGC} IBimg={IBimg_GGC} IFimg={IFimg_GGC} Tp={lang[language].Projects_GGC_Tp} Com={Button} Bt={lang[language].Play} Lurl="https://geogamechallenge.netlify.app/"/>
      <Bento Bv="2" Bh="4" Bs="BR1" Th4="Café Café" Limg={Limg_CC} IBimg={IBimg_CC} IFimg={IFimg_CC} Tp={lang[language].Projects_CC_Tp} Com={Button} Bt={lang[language].Visit} Lurl="https://cafe-cafe.vercel.app"/>
      <Bento Bv="2" Bh="4" Bs="BL1" Th4="El Matador" Limg={Limg_EM} IBimg={IBimg_EM} IFimg={IFimg_EM} Tp={lang[language].Projects_EM_Tp} Com={Button} Bt={lang[language].Visit} Lurl="https://el-matador-website.netlify.app/"/>
      <Bento Bv="2" Bh="2" Bs="BL1" Th4="Calculator" IFimg={IFimg_CAL} Tp={lang[language].Projects_CAL_Tp} Com={Button} Bt={lang[language].Try} Lurl="https://main--atlanticocalculator.netlify.app/"/>

      <Bento Bv="1" Bh="8" Bs="BE1" Th4={lang[language].Projects_02_Th4} Bbgc="transparent"/>
      <Bento Bv="2" Bh="2" Bs="BR1" Th4="Hunterlands" IBimg={IBimg_HUN} IFimg={IFimg_HUN} Tp={lang[language].Projects_HUN_Tp} Com={Button} Bt="Behance" Lurl="https://www.behance.net/gallery/119558215/Game-project-Hunterlands" />
      <Bento Bv="2" Bh="2" Bs="BR4" Th4="Pr1mero" IBimg={IBimg_PDS} IFimg={IFimg_PDS} Tp={lang[language].Projects_PDS_Tp} Com={Button} Bt="Behance" Lurl="https://www.behance.net/gallery/164341397/Design-System-Primero" />
      <Bento Bv="2" Bh="4" Bs="BL5" Th4="Breo App" IBimg={IBimg_BREO} IFimg={IFimg_BREO} Tp={lang[language].Projects_BREO_Tp} Com={Button} Bt="Behance" Lurl="https://www.behance.net/gallery/119558477/Breo-Project" />
      <Bento Bv="2" Bh="4" Bs="BR2" Th4="Light Project" IBimg={IBimg_LP} IFimg={IFimg_LP} Tp={lang[language].Projects_LP_Tp} Com={Button} Bt="Behance" Lurl="https://www.behance.net/gallery/129629049/Light-Project" />
      <Bento Bv="2" Bh="2" Bs="BR1" Th4="T-Shirt Designs" IFimg={IFimg_TDE} IBimg={IBimg_TDR} Tp={lang[language].Projects_TDE_Tp} Com={Button} Bt="Behance" Lurl="https://www.behance.net/gallery/119338033/ADIDAS-TSHIRT-DESIGNS-(EUROPEAN-CLUBS)" />
      <Bento Bv="2" Bh="2" Bs="BR1" Th4="T-Shirt Designs" IFimg={IFimg_TDSA} IBimg={IBimg_TDR} Tp={lang[language].Projects_TDSA_Tp} Com={Button} Bt="Behance" Lurl="https://www.behance.net/gallery/119338289/ADIDAS-TSHIRT-DESIGNS-(national-soccer-teams)" />
      <Bento Bv="2" Bh="2" Bs="BL1" Th4="T-Shirt Designs" IFimg={IFimg_TDA1} IBimg={IBimg_TDL} Tp={lang[language].Projects_TDA1_Tp} Com={Button} Bt="Behance" Lurl="https://www.behance.net/gallery/119087517/ADIDAS-TSHIRT-DESIGNS-(argentine-soccer)" />
      <Bento Bv="2" Bh="2" Bs="BL1" Th4="T-Shirt Designs" IFimg={IFimg_TDA2} IBimg={IBimg_TDL} Tp={lang[language].Projects_TDA2_Tp} Com={Button} Bt="Behance" Lurl="https://www.behance.net/gallery/120843373/ADIDAS-2021-T-SHIRT-DESIGN-PROJECT-ARGENTINA-TEAMS" />
      <Bento Bv="2" Bh="2" Bs="BL1" Th4="T-Shirt Designs" IFimg={IFimg_TDC} IBimg={IBimg_TDL} Tp={lang[language].Projects_TDC_Tp} Com={Button} Bt="Behance" Lurl="https://www.behance.net/gallery/121012871/T-SHIRT-DESIGN-KELME-COLON-DE-SANTA-FE-2021" />
      <Bento Bv="2" Bh="2" Bs="BR5" Th4="Deeb App" IFimg={IFimg_DEEB} IBimg={IBimg_DEEB} Tp={lang[language].Projects_DEEB_Tp} Com={Button} Bt="Behance" Lurl="https://www.behance.net/gallery/164341235/Deeb-App" />
      </BentoGrid>

      <BentoGrid id="Software" TAh1={lang[language].Software_TAh1} TAp={lang[language].Software_TAp}>
        <Bento Bv="1" Bh="8" Bs="BE1" Th4={lang[language].Software_01_Th4} Bbgc="transparent"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg8} Th4="React" Tp={lang[language].Software_Intermediate} PBd="10" PBn="7"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg9} Th4="JavaScript" Tp={lang[language].Software_Intermediate} PBd="10" PBn="8"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg11} Th4="CSS" Tp={lang[language].Software_Advanced} PBd="10" PBn="9"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg12} Th4="HTML" Tp={lang[language].Software_Advanced} PBd="10" PBn="9"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg15} Th4="Redux" Tp={lang[language].Software_Introducing} PBd="10" PBn="2"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg28} Th4="VS Code" Tp={lang[language].Software_Advanced} PBd="10" PBn="8"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg10} Th4="SASS" Tp={lang[language].Software_Intermediate} PBd="10" PBn="6"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg13} Th4="Bootstrap" Tp={lang[language].Software_Basics} PBd="10" PBn="5"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg14} Th4="Tailwind" Tp={lang[language].Software_Basics} PBd="10" PBn="5"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg29} Th4="SQL" Tp={lang[language].Software_Introducing} PBd="10" PBn="1"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg25} Th4="Wordpress" Tp={lang[language].Software_Introducing} PBd="10" PBn="2"/>

        <Bento Bv="1" Bh="8" Bs="BE1" Th4={lang[language].Software_02_Th4} Bbgc="transparent"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg19} Th4="Figma" Tp={lang[language].Software_Advanced} PBd="10" PBn="8"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg16} Th4="AdobeXD" Tp={lang[language].Software_Advanced} PBd="10" PBn="8"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg17} Th4="Photoshop" Tp={lang[language].Software_Basics} PBd="10" PBn="5"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg18} Th4="Illustrator" Tp={lang[language].Software_Basics} PBd="10" PBn="5"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg26} Th4="AfterEffects" Tp={lang[language].Software_Introducing} PBd="10" PBn="2"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg23} Th4="Movavi" Tp={lang[language].Software_Basics} PBd="10" PBn="4"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg27} Th4="Procreate" Tp={lang[language].Software_Intermediate}/>

        <Bento Bv="1" Bh="8" Bs="BE1" Th4={lang[language].Software_03_Th4} Bbgc="transparent"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg2} Th4="Github"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg20} Th4="Git"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg21} Th4="Vercel"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg22} Th4="Netlify"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg30} Th4="Hostinger"/>

        <Bento Bv="1" Bh="8" Bs="BE1" Th4={lang[language].Software_04_Th4} Bbgc="transparent"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg24} Th4="Unity" Tp={lang[language].Software_Basics} PBd="10" PBn="4"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg31} Th4="C#" Tp={lang[language].Software_Basics} PBd="10" PBn="3"/>
      </BentoGrid>

      <BentoGrid id="About" TAh1={lang[language].About_TAh1}>
        <Bento Bv="2" Bh="8" Bs="BC2"/>
      </BentoGrid>

      <BentoGrid id="Contact" TAh1={lang[language].Contact_TAh1}>
        <Bento Bv="1" Bh="2" Bs="BC2" Limg={Limg2} Th4="Github" Tp="/franciscobuchini" Com={Button} Lurl="https://github.com/franciscobuchini" Bt="Github"  />
        <Bento Bv="1" Bh="2" Bs="BC2" Limg={Limg3} Th4="Linkedin" Tp="/franciscobuchini" Com={Button} Lurl="https://www.linkedin.com/in/franciscobuchini/" Bt="Linkedin"  />
        <Bento Bv="1" Bh="2" Bs="BC2" Limg={Limg7} Th4="Facebook" Tp="@franciscobuchini" Com={Button} Lurl="https://www.facebook.com/francisco.buchini.37/" Bt="Facebook"  />
        <Bento Bv="1" Bh="2" Bs="BC2" Limg={Limg5} Th4="Behance" Tp="/franciscobuchini" Com={Button} Lurl="https://www.behance.net/franciscobuchini" Bt="Behance"  />
        <Bento Bv="1" Bh="2" Bs="BC2" Limg={Limg4} Th4="Instagram" Tp="@franciscobuchini" Com={Button} Lurl="https://www.instagram.com/franciscobuchini" Bt="Instagram"  />
        <Bento Bv="1" Bh="2" Bs="BC2" Limg={Limg6} Th4="eMail" Tp="franciscobuchini@gmail.com" Com={Button} Lurl="mailto:franciscobuchini@gmail.com" Bt="eMail"  />
      </BentoGrid>

      <BentoGrid id="Education" TAh1={lang[language].Education_TAh1} TAp={lang[language].Education_TAp}>
        <Bento Bv="1" Bh="4" Bs="BE1" Th4={lang[language].Education_UNL_Th4} Tp={lang[language].Education_UNL_Tp} />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg9} Th4="JavaScript - Soy Dalto" Tp={lang[language].Education_JS3_Dal_Tp} Lurl="https://www.youtube.com/watch?v=EbMi1Qj4rVE&list=PLE8uP447fYpiWxfqCnoHZx03zCsUAzDUW&index=22&t=18912s&pp=iAQB" />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg9} Th4="JavaScript - Soy Dalto" Tp={lang[language].Education_JS2_Dal_Tp} Lurl="https://www.youtube.com/watch?v=xOinGb2MZSk&list=PLE8uP447fYpiWxfqCnoHZx03zCsUAzDUW&index=14&pp=iAQB" />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg9} Th4="JavaScript - Soy Dalto" Tp={lang[language].Education_JS1_Dal_Tp} Lurl="https://www.youtube.com/watch?v=z95mZVUcJ-E&list=PLE8uP447fYpiWxfqCnoHZx03zCsUAzDUW&index=7&t=10071s&pp=iAQB" />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg9} Th4="JavaScript - Domestika" Tp={lang[language].Education_JS_Dom_Tp} Lurl="https://www.domestika.org/es/courses/390-introduccion-a-la-programacion-en-javascript" />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg30} Th4="Hosting - Soy Dalto" Tp={lang[language].Education_HOS_Dal_Tp} Lurl="https://www.youtube.com/watch?v=hikoV1Q9EzY&list=PLE8uP447fYpiWxfqCnoHZx03zCsUAzDUW&index=48&pp=iAQB" />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg33} Th4="Git & Github - Soy Dalto" Tp={lang[language].Education_GIT_Dal_Tp} Lurl="https://www.youtube.com/watch?v=9ZJ-K-zk_Go&list=PLE8uP447fYpiWxfqCnoHZx03zCsUAzDUW&index=44&t=14226s&pp=iAQB" />
        {/* <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg29} Th4="SQL - Soy Dalto" Tp={lang[language].Education_SQL_Dal_Tp} Lurl="https://www.youtube.com/watch?v=DFg1V-rO6Pg&list=PLE8uP447fYpiWxfqCnoHZx03zCsUAzDUW&index=38&pp=iAQB" /> */}
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg32} Th4="HTML & CSS - Soy Dalto" Tp={lang[language].Education_HTMLCSS_Dal_Tp} Lurl="https://www.youtube.com/watch?v=ELSm-G201Ls&list=PLE8uP447fYpiWxfqCnoHZx03zCsUAzDUW&index=1&t=5s&pp=iAQB" />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg32} Th4="HTML & CSS - Domestika" Tp={lang[language].Education_HTMLCSS_Dom_Tp} Lurl="https://www.domestika.org/es/courses/74-introduccion-al-desarrollo-web-responsive-con-html-y-css" />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg11} Th4="CSS - Soy Dalto" Tp={lang[language].Education_CSS_Dal_Tp} Lurl="https://www.youtube.com/watch?v=OWKXEJN67FE&list=PLE8uP447fYpiWxfqCnoHZx03zCsUAzDUW&index=4&t=24664s&pp=iAQB" />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg12} Th4="HTML - Soy Dalto" Tp={lang[language].Education_HTML_Dal_Tp} Lurl="https://www.youtube.com/watch?v=kN1XP-Bef7w&list=PLE8uP447fYpiWxfqCnoHZx03zCsUAzDUW&index=2&t=7887s&pp=iAQB" />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg28} Th4="VS Code - Soy Dalto" Tp={lang[language].Education_VSC_Dal_Tp} Lurl="https://www.youtube.com/watch?v=TbzrOz8HbFM&list=PLE8uP447fYpiWxfqCnoHZx03zCsUAzDUW&index=49&t=5740s&pp=iAQB" />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg19} Th4="Figma - Domestika" Tp={lang[language].Education_FIG_Dom_Tp} Lurl="https://www.domestika.org/es/courses/1157-introduccion-a-design-systems-con-figma" />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg16} Th4="Adobe XD - Domestika" Tp={lang[language].Education_XD_Dom_Tp} Lurl="https://www.domestika.org/es/courses/616-introduccion-a-adobe-xd-para-aplicaciones-moviles" />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg24} Th4="Unity - Domestika" Tp={lang[language].Education_UNI1_Dom_Tp} Lurl="https://www.domestika.org/es/courses/1761-diseno-avanzado-de-videojuegos-rpg-con-unity" />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg24} Th4="Unity - Domestika" Tp={lang[language].Education_UNI2_Dom_Tp} Lurl="https://www.domestika.org/es/courses/716-introduccion-a-unity-para-videojuegos-2d" />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg17} Th4="Photoshop - Domestika" Tp={lang[language].Education_PS1_Dom_Tp} Lurl="https://www.domestika.org/es/courses/235-animacion-2d-con-photoshop-dibujo-camara-y-accion" />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg17} Th4="Photoshop - Domestika" Tp={lang[language].Education_PS2_Dom_Tp} Lurl="https://www.domestika.org/es/courses/387-introduccion-a-adobe-photoshop/course" />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg18} Th4="Illustrator - Domestika" Tp={lang[language].Education_IL3_Dom_Tp} Lurl="https://www.domestika.org/es/courses/2232-adobe-illustrator-avanzado-para-ilustracion" />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg18} Th4="Illustrator - Domestika" Tp={lang[language].Education_IL2_Dom_Tp} Lurl="https://www.domestika.org/es/courses/312-ilustracion-vectorial-para-principiantes" />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg18} Th4="Illustrator - Domestika" Tp={lang[language].Education_IL1_Dom_Tp} Lurl="https://www.domestika.org/es/courses/499-introduccion-a-adobe-illustrator" />
        {/* <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg25} Th4="WordPress - Domestika" Tp={lang[language].Education_WP_Dom_Tp} Lurl="https://www.domestika.org/es/courses/112-creacion-de-una-web-profesional-con-wordpress" /> */}
        {/* <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg26} Th4="After Effects - Domestika" Tp={lang[language].Education_AE_Dom_Tp} Lurl="https://www.domestika.org/es/courses/304-introduccion-a-after-effects" /> */}
      </BentoGrid>

      <Footer cb={lang[language].Created}/>
    </>
  )
}

export default App;