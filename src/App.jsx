import BentoGrid from "./Components/BentoGrid"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import React, { useState } from "react"
import Bento from "./Components/Bento"

import IFimg1 from "./Assets/IFimg1.webp"
import IFimg2 from "./Assets/IFimg2.webp"
import IFimg3 from "./Assets/IFimg3.webp"
import IFimg4 from "./Assets/IFimg4.webp"
import IFimg5 from "./Assets/IFimg5.webp"
import IFimgMap from "./Assets/IFimgMap.webp"

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
import Limg34 from "./Assets/Limg34.webp"
import Limg35 from "./Assets/Limg35.webp"
import Limg36 from "./Assets/Limg36.webp"
import Limg37 from "./Assets/Limg37.webp"
import Limg38 from "./Assets/Limg38.webp"
import Limg39 from "./Assets/Limg39.webp"

import Limg_EM from "./Assets/Limg_EM.webp"
import Limg_CC from "./Assets/Limg_CC.webp"
import Limg_GGC from "./Assets/Limg_GGC.webp"
import Limg_BBUI from "./Assets/Limg_BBUI.webp"
import Limg_ARG from "./Assets/Limg_ARG.webp"
import Limg_USA from "./Assets/Limg_USA.webp"
import Limg_BRA from "./Assets/Limg_BRA.webp"
import Limg_ITA from "./Assets/Limg_ITA.webp"
import Limg_SHU from "./Assets/Limg_SHU.webp"

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
import IFimg_BBUI from "./Assets/IFimg_BBUI.webp"
import IFimg_SHU from "./Assets/IFimg_SHU.webp"
import IFimg_BLO from "./Assets/IFimg_BLO.webp"

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
import IBimg_TDE from "./Assets/IBimg_TDE.webp"
import IBimg_BLO from "./Assets/IBimg_BLO.webp"
import IBimg_SHU from "./Assets/IBimg_SHU.webp"

import ThemeSwitch from "./Components/ThemeSwitch"
import LanguageSwitch from "./Components/LanguageSwitch"
import Button from "./Components/Button"
import Download from "./Components/Download"

import CV from "./Files/Francisco_Buchini_CV.pdf"

function App() {

  // Language switcher:
  const [Lang, setLang] = useState("english")
  const handleLangSwitch = (isChecked) => { setLang(isChecked ? "spanish" : "english")}

  // Map Theme switcher:
  const [theme, setTheme] = useState("dark")
  const handleThemeSwitch = (isChecked) => {setTheme(isChecked ? "dark" : "light")}

  const L = {
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
      // Intro_05_Th4: "🏠 Incline Village, USA",
      Intro_06_Tp: "Download Resume:",
      //-------------------------------------------------------------------------
      Projects_TAh1: "Projects 💻",
      Projects_TAp: "My highlights in coding and design:",
      Projects_01_Th4: "Programming:",
      Projects_SHU_Tp: "An innovative application designed to help coaches worldwide efficiently manage their teams, with over 100 clubs registered globally, hired me to improve its performance and functionality. Recently, I updated the framework from Pico 1.5.13 to 2.0.6, enhancing performance and security, and advised on aesthetic changes for a better user experience. Shula App already offers key features such as team management, effective communication, and performance analysis, facilitating the organization and success of sports teams.",
      Projects_BBUI_Tp: "I developed this interface from scratch to organize information and elements into modular blocks for my projects. Its intuitive and visually appealing design enhances navigation and accessibility, making it easy for users to find what they need. My goal is to optimize both web usability and aesthetics.",
      Projects_GGC_Tp: "This is my first project in web development. It is a game built from scratch with pure JavaScript. Users must guess the silhouette of countries, with a scoring system based on response time. Used HTML, CSS and JavaScript to develop an interactive and challenging experience for players.",
      Projects_EM_Tp: "Updated the <a href='https://www.elmatador.co.nz/' target='_blank'>website</a> of a restaurant in Wellington, New Zealand, improving design, SEO and memory usage.",
      Projects_CC_Tp: "Website for cafes with an attractive and functional presentation that organizes information and visual elements in blocks.",

      Projects_02_Th4: "Design:",
      Projects_BLO_Tp: "A popular mobile game with more than 7,000 monthly users, available on the AppStore and PlayStore, is undergoing a complete UX/UI redesign of its app and website. The company hired me to carry out this progressive redesign, which will give a new face to the app, improving usability, aesthetics, and adding new functionalities that will enhance user engagement and retention. With these improvements, an exponential growth in the user base and a significant increase in revenue are expected.",
      Projects_HUN_Tp: "Developed from cero a UX/UI prototype for an RPG in which I collaborated with a team of three people to create a visually clean gaming experience.",
      Projects_PDS_Tp: "I created this interface for a lost pets app.",
      Projects_BREO_Tp: "I founded a delivery app in Argentina, during the COVID-19 pandemic, which managed to bring together more than 400 participating businesses. We stand out by eliminating commissions from traditional app monopolies, helping to mitigate the difficult economic situation. I was in charge of creating the UX/UI from scratch and collaborated with programmers to complete the app, later adding design updates based on the Instagram UI for greater user comfort and familiarity. After a year of work, I sold the app for three times the total investment.",
      Projects_LP_Tp: "I designed the user interface for a TBS game for PC from scratch, collaborating with a team of four people and learning to work as a team, receive feedback and apply useful methodologies for future projects.",
      Projects_TDE_Tp: "European Clubs.",
      Projects_TDA1_Tp: "Argentine Teams.",
      Projects_TDA2_Tp: "Argentine Teams.",
      Projects_TDC_Tp: "Colón de Santa Fe.",
      Projects_TDSA_Tp: "Argentina National Team.",
      Projects_DEEB_Tp: "UI sketch for a music app with a modern interface.",
      //-------------------------------------------------------------------------
      Software_TAh1: "Tools & Software ⚙️",
      Software_TAp: "Progression according to <a href='https://roadmap.sh/' target='_blank'>roadmap.sh</a>",
      Software_01_Th4: "Website development:",
      Software_02_Th4: "UX/UI & Design tools:",
      Software_03_Th4: "Version Control Systems & Hosting:",
      Software_04_Th4: "Videogames development:",
      Software_Advanced: "Advanced",
      Software_Intermediate: "Intermediate",
      Software_Basics: "Basics",
      Software_Introducing: "Introducing",
      //-------------------------------------------------------------------------
      Contact_TAh1: "Profile & Contact 🤙",
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
      About_TAh1: "About me 🛸",
      About_B1_Th4: "Designer turned Developer 👨‍💻",
      About_B1_Tp: "I am a passionate frontend designer and programmer with a diverse background. I began my journey in the world of graphic design, later exploring the fascinating field of UX/UI. For two years, I immersed myself in web programming, fusing my solid foundation in design with technical skills to create memorable and functional digital experiences.",
      About_B2_Th4: "Underwater Hockey 🤿",
      About_B2_Tp: "It is my main sporting focus. Representing Argentina three times and competing in the best tournaments in the world, including Euro-clubs, nationals and world championships, has enriched my career. I have played in five internationally recognized clubs on par with the best in the world. Each competition has been an opportunity to push my limits and demonstrate my passion for this sport and has also been a source of pride and constant motivation.",
      About_B3_Th4: "Globetrotter 🌎",
      About_B3_Tp: "I have had the opportunity to visit 30 countries, immersing myself in cultural diversity and enjoying the excitement of discovering new places. Each trip fuels my curiosity to learn more about different cultures and traditions. My goal is to continue expanding my horizons and eventually visit every country in the world, turning each destination into an unforgettable experience on my personal journey of discovery.",
      About_B4_Th4: "Professional objectives 🔭",
      About_B4_Tp: "I seek to combine my passion for design with my programming skills to build intuitive and responsive user interfaces that enhance user interaction and satisfaction. With a strong background in both development and design, I can create comprehensive and efficient solutions. I prefer to work remotely to maintain a balance between professional and personal life, but I am open to relocation offers if they present interesting opportunities.",
      About_Sp_Th4: "Spanish",
      About_Sp_Tp: "Native",
      About_En_Th4: "English",
      About_En_Tp: "Intermediate",
      About_Pt_Th4: "Portuguese",
      About_Pt_Tp: "Basic",
      About_It_Th4: "Italian",
      About_It_Tp: "Learning",
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
      // Intro_05_Th4: "🏠 Incline Village, USA",
      Intro_06_Tp: "Descargar CV:",
      //-------------------------------------------------------------------------
      Projects_TAh1: "Proyectos 💻",
      Projects_TAp: "Mis aspectos más destacados en código y diseño:",
      Projects_01_Th4: "Programación:",
      Projects_SHU_Tp: "Una innovadora aplicación diseñada para ayudar a coaches de todo el mundo en la administración eficiente de sus equipos, con más de 100 clubes registrados globalmente, me contrató para mejorar su rendimiento y funcionalidad. Recientemente, he actualizado el framework de Pico 1.5.13 a 2.0.6, mejorando el rendimiento y la seguridad, y he asesorado en cambios estéticos para una mejor experiencia de usuario. Shula App ya ofrece funciones clave como la gestión de equipos, comunicación efectiva y análisis de rendimiento.",
      Projects_BBUI_Tp: "Desarrollé esta interfaz desde cero para organizar información y elementos en bloques modulares para mis proyectos. Su diseño intuitivo y visualmente atractivo mejora la navegación y la accesibilidad, facilitando a los usuarios encontrar lo que necesitan. Mi objetivo es optimizar tanto la usabilidad como la estética de la web.",
      Projects_GGC_Tp: "Este es mi primer proyecto en desarrollo web. Es un juego creado desde cero con JavaScript puro. Los usuarios deben adivinar la silueta de países, con un sistema de puntuación basado en el tiempo de respuesta. Utilicé HTML, CSS y JavaScript para desarrollar una experiencia interactiva y desafiante para los jugadores.",
      Projects_EM_Tp: "Actualicé el <a href='https://www.elmatador.co.nz/' target='_blank'>sitio web</a> de un restaurante en Wellington, Nueva Zelanda, mejorando el diseño, SEO y uso de memoria.",
      Projects_CC_Tp: "Sitio web para cafeterías con presentación atractiva y funcional que organiza información y elementos visuales en bloques.",

      Projects_02_Th4: "Diseño:",
      Projects_BLO_Tp: "Un popular juego móvil con mas de 7000 usuarios mensuales, disponible en AppStore y PlayStore, está en proceso de un rediseño completo de UX/UI en su aplicación y sitio web. La empresa me contrató para este rediseño, que mejorará la usabilidad, la estética y añadirá nuevas funcionalidades para potenciar el engagement y la retención de usuarios. Se espera una evolución exponencial en la base de usuarios y un incremento significativo en los ingresos.",
      Projects_HUN_Tp: "Desarrollé desde cero un prototipo de UX/UI para un RPG en el cual colaboré con un equipo de tres personas para crear una experiencia de juego visualmente limpia.",
      Projects_PDS_Tp: "Creé esta interfaz para una app de mascotas perdidas.",
      Projects_BREO_Tp: "Fundé una app de delivery en Argentina, durante la pandemia de COVID-19, que logró reunir a más de 400 comercios adheridos. Nos destacamos eliminando las comisiones de los monopolios de apps tradicionales, ayudando a mitigar la difícil situación económica. Me encargué de crear la UX/UI desde cero y colaboré con programadores para completar la app, añadiendo luego actualizaciones de diseño basadas en la UI de Instagram para mayor comodidad y familiaridad del usuario. Tras un año de trabajo, vendí la app por tres veces la inversión total.",
      Projects_LP_Tp: "Diseñé desde cero la interfaz de usuario para un juego TBS para PC, colaborando con un equipo de cuatro personas y aprendiendo a trabajar en equipo, recibir feedback y aplicar metodologías útiles para futuros proyectos.",
      Projects_TDE_Tp: "Clubes Europeos.",
      Projects_TDA1_Tp: "Fútbol Argentino.",
      Projects_TDA2_Tp: "Fútbol Argentino.",
      Projects_TDC_Tp: "Colón de Santa Fe.",
      Projects_TDSA_Tp: "Selección Argentina.",
      Projects_DEEB_Tp: "Boceto de UI para una app de música con una interfaz moderna.",
      //-------------------------------------------------------------------------
      Software_TAh1: "Herramientas y Programas ⚙️",
      Software_TAp: "Progreso según <a href='https://roadmap.sh/' target='_blank'>roadmap.sh</a>",
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
      About_TAh1: "Acerca de mi 🛸",
      About_B1_Th4: "De diseñador a desarrollador 👨‍💻",
      About_B1_Tp: "Soy un apasionado diseñador y programador frontend con una trayectoria diversa. Comencé mi viaje en el mundo del diseño gráfico, explorando luego el fascinante campo del UX/UI. Desde hace dos años, me sumergí en la programación web, fusionando mi sólida base en diseño con habilidades técnicas para crear experiencias digitales memorables y funcionales.",
      About_B2_Th4: "Hockey Subacuático 🤿",
      About_B2_Tp: "Este es mi principal enfoque deportivo. Representar a Argentina tres veces y competir en los mejores torneos del mundo, incluyendo euro-clubes, torneos nacionales y mundiales, ha enriquecido mi carrera. He jugado en cinco clubes reconocidos internacionalmente a la par de los mejores del mundo. Cada competición ha sido una oportunidad para superar mis límites y demostrar mi pasión por este deporte y también ha sido una fuente de orgullo y motivación constante.",
      About_B3_Th4: "Trotamundos 🌎",
      About_B3_Tp: "He tenido la oportunidad de visitar 30 países, sumergiéndome en la diversidad cultural y disfrutando de la emoción de descubrir nuevos lugares. Cada viaje alimenta mi curiosidad por conocer más sobre diferentes culturas y tradiciones. Mi objetivo es seguir ampliando mis horizontes y eventualmente visitar todos los países del mundo, convirtiendo cada destino en una experiencia inolvidable en mi viaje personal de descubrimiento.",
      About_B4_Th4: "Objetivos profesionales 🔭",
      About_B4_Tp: "Busco combinar mi pasión por el diseño y mis habilidades de programación para construir interfaces de usuario intuitivas y responsivas que mejoren la interacción y satisfacción del usuario. Con una sólida formación en desarrollo y diseño, puedo crear soluciones integrales y eficientes. Prefiero trabajar de forma remota para mantener un equilibrio entre vida profesional y personal, pero estoy abierto a ofertas de reubicación si representan oportunidades interesantes.",
      About_Sp_Th4: "Español",
      About_Sp_Tp: "Nativo",
      About_En_Th4: "Inglés",
      About_En_Tp: "Intermedio",
      About_Pt_Th4: "Portugues",
      About_Pt_Tp: "Básico",
      About_It_Th4: "Italiano",
      About_It_Tp: "Aprendiendo",
      //-------------------------------------------------------------------------
    }
  }

  //Header list:
  const links = [
    { name: L[Lang].Nav_Intro, href: "Intro"},
    { name: L[Lang].Nav_Projects, href: "Projects"},
    { name: L[Lang].Nav_Software, href: "Software" },
    { name: L[Lang].Nav_Education, href: "Education" },
    { name: L[Lang].Nav_About, href: "About" },
    { name: L[Lang].Nav_Contact, href: "Contact" },
  ]

  return (
    <>
      <Header links={links} Pulse={L[Lang].Job} Com1={() => <ThemeSwitch onChange={handleThemeSwitch}/>} Com2={() => <LanguageSwitch onChange={handleLangSwitch} checked={Lang === 'spanish'}/>} />

      <BentoGrid id="Intro" TAh1={L[Lang].Intro_TAh1}>
        <Bento id="Responsive_Component" Bv="1" Bh="2" Bs="BC2" Tp={L[Lang].Intro_03_Tp} Com={() => <LanguageSwitch onChange={handleLangSwitch} checked={Lang === 'spanish'}/>} />
        <Bento id="Responsive_Component" Bv="1" Bh="2" Bs="BC2" Tp={L[Lang].Intro_04_Tp} Com={() => <ThemeSwitch onChange={handleThemeSwitch}/>} />
        <Bento id="Presentation" Bv="2" Bh="4" Bs="BL2" Limg={Limg1} Tp={L[Lang].Intro_01_Tp} />
        <Bento id="Profile_Image" Bv="2" Bh="2" IFimg={IFimg1} Th4c="var(--white)"/>
        {/* <Map Bv="2" Bh="2" Th4={L[Lang].Intro_05_Th4} theme={theme}/> */}
        <Bento Bv="2" Bh="2" Th4="🏠 Copenhagen, DK" Th4c="var(--white)" IFimg={IFimgMap}/>
      </BentoGrid>

      <BentoGrid id="Projects" TAh1={L[Lang].Projects_TAh1} TAp={L[Lang].Projects_TAp}>
      <Bento Bv="1" Bh="8" Bs="BC2" Th4={L[Lang].Projects_01_Th4} Bbgc="transparent"/>
      <Bento Bv="5" Bh="4" Bs="BL1" Th4="Shula App" Limg={Limg_SHU} IBimg={IBimg_SHU} IFimg={IFimg_SHU} Tp={L[Lang].Projects_SHU_Tp} Com={Button} Bt={L[Lang].Visit}  Lurl="https://www.shula.app/" />
      <Bento Bv="4" Bh="4" Bs="BR1" Th4="Bento Box UI" Limg={Limg_BBUI} IBimg={IBimg_BBUI} IFimg={IFimg_BBUI} Tp={L[Lang].Projects_BBUI_Tp} Com={Button} Bt={L[Lang].Visit}  Lurl="https://bentoboxui.vercel.app" />
      <Bento Bv="4" Bh="4" Bs="BR1" Th4="Geo Game" Limg={Limg_GGC} IBimg={IBimg_GGC} IFimg={IFimg_GGC} Tp={L[Lang].Projects_GGC_Tp} Com={Button} Bt={L[Lang].Play} Lurl="https://geogamechallenge.netlify.app/"/>
      <Bento Bv="3" Bh="4" Bs="BL1" Th4="Café Café" Limg={Limg_CC} IBimg={IBimg_CC} IFimg={IFimg_CC} Tp={L[Lang].Projects_CC_Tp} Com={Button} Bt={L[Lang].Visit} Lurl="https://cafe-cafe.vercel.app"/>
      <Bento Bv="3" Bh="4" Bs="BL1" Th4="El Matador" Limg={Limg_EM} IBimg={IBimg_EM} IFimg={IFimg_EM} Tp={L[Lang].Projects_EM_Tp} Com={Button} Bt={L[Lang].Visit} Lurl="https://el-matador-website.netlify.app/"/>

      <Bento Bv="1" Bh="8" Bs="BC2" Th4={L[Lang].Projects_02_Th4} Bbgc="transparent"/>
      <Bento Bv="5" Bh="4" Bs="BL1" Th4="Blokky App" IBimg={IBimg_BLO} IFimg={IFimg_BLO} Tp={L[Lang].Projects_BLO_Tp} Com={Button} Bt={L[Lang].Visit} Lurl="https://blokky.app/" />
      <Bento Bv="5" Bh="4" Bs="BR1" Th4="Breo App" IBimg={IBimg_BREO} IFimg={IFimg_BREO} Tp={L[Lang].Projects_BREO_Tp} Com={Button} Bt="Behance" Lurl="https://www.behance.net/gallery/119558477/Breo-Project" />
      <Bento Bv="3" Bh="4" Bs="BR1" Th4="Light Project" IBimg={IBimg_LP} IFimg={IFimg_LP} Tp={L[Lang].Projects_LP_Tp} Com={Button} Bt="Behance" Lurl="https://www.behance.net/gallery/129629049/Light-Project" />
      <Bento Bv="5" Bh="2" Bs="BR1" Th4="Hunterlands" IBimg={IBimg_HUN} IFimg={IFimg_HUN} Tp={L[Lang].Projects_HUN_Tp} Com={Button} Bt="Behance" Lurl="https://www.behance.net/gallery/119558215/Game-project-Hunterlands" />
      <Bento Bv="3" Bh="2" Bs="BR1" Th4="Kit Design Concept" IFimg={IFimg_TDE} IBimg={IBimg_TDE} Tp={L[Lang].Projects_TDE_Tp} Com={Button} Bt="Behance" Lurl="https://www.behance.net/gallery/119338033/ADIDAS-TSHIRT-DESIGNS-(EUROPEAN-CLUBS)" />
      <Bento Bv="3" Bh="2" Bs="BR1" Th4="Kit Design Concept" IFimg={IFimg_TDSA} IBimg={IBimg_TDR} Tp={L[Lang].Projects_TDSA_Tp} Com={Button} Bt="Behance" Lurl="https://www.behance.net/gallery/119338289/ADIDAS-TSHIRT-DESIGNS-(national-soccer-teams)" />
      <Bento Bv="3" Bh="2" Bs="BL1" Th4="Kit Design Concept" IFimg={IFimg_TDA1} IBimg={IBimg_TDL} Tp={L[Lang].Projects_TDA1_Tp} Com={Button} Bt="Behance" Lurl="https://www.behance.net/gallery/119087517/ADIDAS-TSHIRT-DESIGNS-(argentine-soccer)" />
      <Bento Bv="3" Bh="2" Bs="BR1" Th4="Kit Design Concept" IFimg={IFimg_TDA2} IBimg={IBimg_TDL} Tp={L[Lang].Projects_TDA2_Tp} Com={Button} Bt="Behance" Lurl="https://www.behance.net/gallery/120843373/ADIDAS-2021-T-SHIRT-DESIGN-PROJECT-ARGENTINA-TEAMS" />
      <Bento Bv="3" Bh="2" Bs="BL1" Th4="Kit Design Concept" IFimg={IFimg_TDC} IBimg={IBimg_TDL} Tp={L[Lang].Projects_TDC_Tp} Com={Button} Bt="Behance" Lurl="https://www.behance.net/gallery/121012871/T-SHIRT-DESIGN-KELME-COLON-DE-SANTA-FE-2021" />
      <Bento Bv="2" Bh="2" Bs="BR4" Th4="Pr1mero" IBimg={IBimg_PDS} IFimg={IFimg_PDS} Tp={L[Lang].Projects_PDS_Tp} Com={Button} Bt="Behance" Lurl="https://www.behance.net/gallery/164341397/Design-System-Primero" />
      <Bento Bv="2" Bh="2" Bs="BR1" Th4="Deeb App" IFimg={IFimg_DEEB} IBimg={IBimg_DEEB} Tp={L[Lang].Projects_DEEB_Tp} Com={Button} Bt="Behance" Lurl="https://www.behance.net/gallery/164341235/Deeb-App" />

      </BentoGrid>

      <BentoGrid id="Software" TAh1={L[Lang].Software_TAh1} TAp={L[Lang].Software_TAp}>
        <Bento Bv="1" Bh="8" Bs="BC2" Th4={L[Lang].Software_01_Th4} Bbgc="transparent"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg8} Th4="React.js" Tp={L[Lang].Software_Intermediate} PBd="10" PBn="7"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg38} Th4="Vue.js" Tp={L[Lang].Software_Intermediate} PBd="10" PBn="6"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg9} Th4="JavaScript" Tp={L[Lang].Software_Intermediate} PBd="10" PBn="8"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg39} Th4="TypeScript" Tp={L[Lang].Software_Basics} PBd="10" PBn="4"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg11} Th4="CSS" Tp={L[Lang].Software_Advanced} PBd="10" PBn="9"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg12} Th4="HTML" Tp={L[Lang].Software_Advanced} PBd="10" PBn="9"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg10} Th4="SASS" Tp={L[Lang].Software_Intermediate} PBd="10" PBn="6"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg13} Th4="Bootstrap" Tp={L[Lang].Software_Basics} PBd="10" PBn="4"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg14} Th4="Tailwind" Tp={L[Lang].Software_Basics} PBd="10" PBn="4"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg15} Th4="Redux" Tp={L[Lang].Software_Introducing} PBd="10" PBn="2"/>
        {/* <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg37} Th4="Pico" Tp={L[Lang].Software_Intermediate} PBd="10" PBn="6"/> */}
        {/* <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg25} Th4="Wordpress" Tp={L[Lang].Software_Introducing} PBd="10" PBn="2"/> */}
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg28} Th4="VS Code" Tp={L[Lang].Software_Advanced} />

        <Bento Bv="1" Bh="8" Bs="BC2" Th4={L[Lang].Software_02_Th4} Bbgc="transparent"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg19} Th4="Figma" Tp={L[Lang].Software_Advanced} PBd="10" PBn="8"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg16} Th4="AdobeXD" Tp={L[Lang].Software_Advanced} PBd="10" PBn="8"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg17} Th4="Photoshop" Tp={L[Lang].Software_Basics} PBd="10" PBn="5"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg18} Th4="Illustrator" Tp={L[Lang].Software_Basics} PBd="10" PBn="4"/>
        {/* <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg26} Th4="AfterEffects" Tp={L[Lang].Software_Introducing} PBd="10" PBn="2"/> */}
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg23} Th4="Movavi" Tp={L[Lang].Software_Basics} PBd="10" PBn="4"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg27} Th4="Procreate" Tp={L[Lang].Software_Intermediate}/>

        <Bento Bv="1" Bh="8" Bs="BC2" Th4={L[Lang].Software_03_Th4} Bbgc="transparent"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg2} Th4="Github"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg35} Th4="Gitlab"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg20} Th4="Git"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg21} Th4="Vercel"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg22} Th4="Netlify"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg30} Th4="Hostinger"/>
        
        <Bento Bv="1" Bh="8" Bs="BC2" Th4="Backend" Bbgc="transparent"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg29} Th4="SQL" Tp={L[Lang].Software_Introducing} PBd="10" PBn="2"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg36} Th4="Docker" Tp={L[Lang].Software_Introducing} PBd="10" PBn="2"/>

        <Bento Bv="1" Bh="8" Bs="BC2" Th4={L[Lang].Software_04_Th4} Bbgc="transparent"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg24} Th4="Unity" Tp={L[Lang].Software_Basics} PBd="10" PBn="4"/>
        <Bento Bv="1" Bh="2" Bs="BE1" Limg={Limg31} Th4="C#" Tp={L[Lang].Software_Basics} PBd="10" PBn="3"/>

      </BentoGrid>

      <BentoGrid id="Education" TAh1={L[Lang].Education_TAh1} TAp={L[Lang].Education_TAp}>
        <Bento Bv="1" Bh="4" Bs="BE1" Th4={L[Lang].Education_UNL_Th4} Tp={L[Lang].Education_UNL_Tp} />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg9} Th4="JavaScript - Soy Dalto" Tp={L[Lang].Education_JS3_Dal_Tp} Lurl="https://www.youtube.com/watch?v=EbMi1Qj4rVE&list=PLE8uP447fYpiWxfqCnoHZx03zCsUAzDUW&index=22&t=18912s&pp=iAQB" />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg9} Th4="JavaScript - Soy Dalto" Tp={L[Lang].Education_JS2_Dal_Tp} Lurl="https://www.youtube.com/watch?v=xOinGb2MZSk&list=PLE8uP447fYpiWxfqCnoHZx03zCsUAzDUW&index=14&pp=iAQB" />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg9} Th4="JavaScript - Soy Dalto" Tp={L[Lang].Education_JS1_Dal_Tp} Lurl="https://www.youtube.com/watch?v=z95mZVUcJ-E&list=PLE8uP447fYpiWxfqCnoHZx03zCsUAzDUW&index=7&t=10071s&pp=iAQB" />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg9} Th4="JavaScript - Domestika" Tp={L[Lang].Education_JS_Dom_Tp} Lurl="https://www.domestika.org/es/courses/390-introduccion-a-la-programacion-en-javascript" />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg30} Th4="Hosting - Soy Dalto" Tp={L[Lang].Education_HOS_Dal_Tp} Lurl="https://www.youtube.com/watch?v=hikoV1Q9EzY&list=PLE8uP447fYpiWxfqCnoHZx03zCsUAzDUW&index=48&pp=iAQB" />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg33} Th4="Git & Github - Soy Dalto" Tp={L[Lang].Education_GIT_Dal_Tp} Lurl="https://www.youtube.com/watch?v=9ZJ-K-zk_Go&list=PLE8uP447fYpiWxfqCnoHZx03zCsUAzDUW&index=44&t=14226s&pp=iAQB" />
        {/* <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg29} Th4="SQL - Soy Dalto" Tp={L[Lang].Education_SQL_Dal_Tp} Lurl="https://www.youtube.com/watch?v=DFg1V-rO6Pg&list=PLE8uP447fYpiWxfqCnoHZx03zCsUAzDUW&index=38&pp=iAQB" /> */}
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg32} Th4="HTML & CSS - Soy Dalto" Tp={L[Lang].Education_HTMLCSS_Dal_Tp} Lurl="https://www.youtube.com/watch?v=ELSm-G201Ls&list=PLE8uP447fYpiWxfqCnoHZx03zCsUAzDUW&index=1&t=5s&pp=iAQB" />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg32} Th4="HTML & CSS - Domestika" Tp={L[Lang].Education_HTMLCSS_Dom_Tp} Lurl="https://www.domestika.org/es/courses/74-introduccion-al-desarrollo-web-responsive-con-html-y-css" />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg11} Th4="CSS - Soy Dalto" Tp={L[Lang].Education_CSS_Dal_Tp} Lurl="https://www.youtube.com/watch?v=OWKXEJN67FE&list=PLE8uP447fYpiWxfqCnoHZx03zCsUAzDUW&index=4&t=24664s&pp=iAQB" />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg12} Th4="HTML - Soy Dalto" Tp={L[Lang].Education_HTML_Dal_Tp} Lurl="https://www.youtube.com/watch?v=kN1XP-Bef7w&list=PLE8uP447fYpiWxfqCnoHZx03zCsUAzDUW&index=2&t=7887s&pp=iAQB" />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg28} Th4="VS Code - Soy Dalto" Tp={L[Lang].Education_VSC_Dal_Tp} Lurl="https://www.youtube.com/watch?v=TbzrOz8HbFM&list=PLE8uP447fYpiWxfqCnoHZx03zCsUAzDUW&index=49&t=5740s&pp=iAQB" />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg19} Th4="Figma - Domestika" Tp={L[Lang].Education_FIG_Dom_Tp} Lurl="https://www.domestika.org/es/courses/1157-introduccion-a-design-systems-con-figma" />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg16} Th4="Adobe XD - Domestika" Tp={L[Lang].Education_XD_Dom_Tp} Lurl="https://www.domestika.org/es/courses/616-introduccion-a-adobe-xd-para-aplicaciones-moviles" />
        {/* <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg24} Th4="Unity - Domestika" Tp={L[Lang].Education_UNI1_Dom_Tp} Lurl="https://www.domestika.org/es/courses/1761-diseno-avanzado-de-videojuegos-rpg-con-unity" />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg24} Th4="Unity - Domestika" Tp={L[Lang].Education_UNI2_Dom_Tp} Lurl="https://www.domestika.org/es/courses/716-introduccion-a-unity-para-videojuegos-2d" /> */}
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg17} Th4="Photoshop - Domestika" Tp={L[Lang].Education_PS1_Dom_Tp} Lurl="https://www.domestika.org/es/courses/235-animacion-2d-con-photoshop-dibujo-camara-y-accion" />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg17} Th4="Photoshop - Domestika" Tp={L[Lang].Education_PS2_Dom_Tp} Lurl="https://www.domestika.org/es/courses/387-introduccion-a-adobe-photoshop/course" />
        {/* <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg18} Th4="Illustrator - Domestika" Tp={L[Lang].Education_IL3_Dom_Tp} Lurl="https://www.domestika.org/es/courses/2232-adobe-illustrator-avanzado-para-ilustracion" /> */}
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg18} Th4="Illustrator - Domestika" Tp={L[Lang].Education_IL2_Dom_Tp} Lurl="https://www.domestika.org/es/courses/312-ilustracion-vectorial-para-principiantes" />
        <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg18} Th4="Illustrator - Domestika" Tp={L[Lang].Education_IL1_Dom_Tp} Lurl="https://www.domestika.org/es/courses/499-introduccion-a-adobe-illustrator" />
        {/* <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg25} Th4="WordPress - Domestika" Tp={L[Lang].Education_WP_Dom_Tp} Lurl="https://www.domestika.org/es/courses/112-creacion-de-una-web-profesional-con-wordpress" /> */}
        {/* <Bento Bv="1" Bh="4" Bs="BE1" Limg={Limg26} Th4="After Effects - Domestika" Tp={L[Lang].Education_AE_Dom_Tp} Lurl="https://www.domestika.org/es/courses/304-introduccion-a-after-effects" /> */}
      </BentoGrid>

      <BentoGrid id="About" TAh1={L[Lang].About_TAh1}>
        <Bento id="Paragraph" Bv="2" Bh="8" Bs="BL2" Bbgc="transparent" Th4={L[Lang].About_B1_Th4} Tp={L[Lang].About_B1_Tp}/>
        <Bento id="Flag" Bv="1" Bh="2" Bs="BE1" Limg={Limg_ARG} Th4={L[Lang].About_Sp_Th4} Tp={L[Lang].About_Sp_Tp} PBd="10" PBn="10"/>
        <Bento id="Flag" Bv="1" Bh="2" Bs="BE1" Limg={Limg_USA} Th4={L[Lang].About_En_Th4} Tp={L[Lang].About_En_Tp} PBd="10" PBn="7"/>
        <Bento id="Flag" Bv="1" Bh="2" Bs="BE1" Limg={Limg_BRA} Th4={L[Lang].About_Pt_Th4} Tp={L[Lang].About_Pt_Tp} PBd="10" PBn="5"/>
        <Bento id="Flag" Bv="1" Bh="2" Bs="BE1" Limg={Limg_ITA} Th4={L[Lang].About_It_Th4} Tp={L[Lang].About_It_Tp} PBd="10" PBn="3"/>
        <Bento Bv="1" Bh="8" Bs="BC2" Bbgc="transparent" Th4={L[Lang].About_B2_Th4}/>
        <Bento id="Paragraph" Bv="2" Bh="4" Bs="BL2"  Tp={L[Lang].About_B2_Tp}/>
        <Bento Bv="2" Bh="2" Bs="BL3" Th4c="var(--white)" Th4="Gold Coast, Australia. 2023" IFimg={IFimg2}/>
        <Bento Bv="2" Bh="2" Bs="BR1" Th4c="var(--white)" Th4="Tasmania, Australia. 2017" IFimg={IFimg3}/>
        <Bento Bv="1" Bh="8" Bs="BC2" Bbgc="transparent" Th4={L[Lang].About_B3_Th4}/>
        <Bento Bv="2" Bh="2" Bs="BL1" Th4c="var(--white)" Th4="London, England. 2022" IFimg={IFimg5}/>
        <Bento Bv="2" Bh="2" Bs="BR3" Th4c="var(--white)" Th4="Siem Reap, Cambodia. 2024" IFimg={IFimg4}/>
        <Bento id="Paragraph" Bv="2" Bh="4" Bs="BL2" Tp={L[Lang].About_B3_Tp}/>
      </BentoGrid>

      <BentoGrid id="Contact" TAh1={L[Lang].Contact_TAh1}>
        <Bento Bv="1" Bh="2" Bs="BC2" Limg={Limg2} Th4="Github" Tp="/franciscobuchini" Com={Button} Lurl="https://github.com/franciscobuchini" Bt="Github"  />
        <Bento Bv="1" Bh="2" Bs="BC2" Limg={Limg35} Th4="Gitlab" Tp="/franciscobuchini" Com={Button} Lurl="https://gitlab.com/franciscobuchini" Bt="Gitlab"  />
        <Bento Bv="1" Bh="2" Bs="BC2" Limg={Limg3} Th4="Linkedin" Tp="/franciscobuchini" Com={Button} Lurl="https://www.linkedin.com/in/franciscobuchini/" Bt="Linkedin"  />
        <Bento Bv="1" Bh="2" Bs="BC2" Limg={Limg7} Th4="Facebook" Tp="@franciscobuchini" Com={Button} Lurl="https://www.facebook.com/francisco.buchini.37/" Bt="Facebook"  />
        <Bento Bv="1" Bh="2" Bs="BC2" Limg={Limg5} Th4="Behance" Tp="/franciscobuchini" Com={Button} Lurl="https://www.behance.net/franciscobuchini" Bt="Behance"  />
        <Bento Bv="1" Bh="2" Bs="BC2" Limg={Limg4} Th4="Instagram" Tp="@franciscobuchini" Com={Button} Lurl="https://www.instagram.com/franciscobuchini" Bt="Instagram"  />
        <Bento Bv="1" Bh="2" Bs="BC2" Limg={Limg6} Th4="eMail" Tp="franciscobuchini@gmail.com" Com={Button} Lurl="mailto:franciscobuchini@gmail.com" Bt="eMail"/>
        <Bento Bv="1" Bh="2" Bs="BC2" Limg={Limg34} Tp={L[Lang].Intro_06_Tp} Com={Download} Lurl={CV} />
        <Bento id="Paragraph" Bv="2" Bh="8" Bs="BL2" Bbgc="transparent" Th4={L[Lang].About_B4_Th4} Tp={L[Lang].About_B4_Tp}/>

      </BentoGrid>

      <Footer cb={L[Lang].Created}/>
    </>
  )
}

export default App;