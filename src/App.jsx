import BentoGrid from "./Components/BentoGrid"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import React, { useState } from 'react';
import Bento from './Components/Bento';
import Map from './Components/Map';
import ThemeSwitch from './Components/ThemeSwitch';
import LanguageSwitch from './Components/LanguageSwitch';
import ProgressBar from './Components/ProgressBar';
import ReactImg from './Assets/ReactImg.webp';
import Button from './Components/Button'
import Download from './Components/Download';

function App() {
  // Objeto que contiene las traducciones
  const translations = {
    english: {
      created_by: 'Created By:',
      pending_tasks: 'Pending tasks:',
      start_creating: 'Start creating the BentoBoxUI web page.',
      next_tasks: 'Next tasks:',
      create_labels: 'Create labels.',
      my_location: 'My location:',
      react: 'React:',
      theme_switcher: 'Theme switcher:',
      button_example: 'Button example:',
      see_more: 'See more',
      download_example: 'Download example:',
      language_switcher: 'Language switcher:'
    },
    spanish: {
      created_by: 'Creado por:',
      pending_tasks: 'Tareas pendientes:',
      start_creating: 'Comienza a crear la página web de BentoBoxUI.',
      next_tasks: 'Próximas tareas:',
      create_labels: 'Crear etiquetas.',
      my_location: 'Mi ubicación:',
      react: 'React:',
      theme_switcher: 'Selector de tema:',
      button_example: 'Ejemplo de botón:',
      see_more: 'Ver más',
      download_example: 'Ejemplo de descarga:',
      language_switcher: 'Selector de idioma:'
    }
  };

  // Estado local para controlar el idioma
  const [language, setLanguage] = useState("english");
  const handleLanguageSwitch = (isChecked) => {
    setLanguage(isChecked ? "spanish" : "english");
  };

  // Map Theme switcher
  const [theme, setTheme] = useState("light");
  const handleThemeSwitch = (isChecked) => {setTheme(isChecked ? "dark" : "light");}
  
  return (
    <>
      <Header cb={translations[language].created_by}/>
      <BentoGrid Sh={translations[language].pending_tasks} Sp={translations[language].start_creating}>
        <Bento Bsv='2' Bsh='4' Bst='B1' Th={translations[language].next_tasks} Tp={translations[language].create_labels} />
        <Map Bsv='4' Bsh='2' Th={translations[language].my_location} ARc='Y' theme={theme} />
        <Bento Bsv='1' Bsh='2' Bst='B7' PBn='4' PBd='10' PBt={translations[language].react} PBimg={ReactImg} Com={ProgressBar}/>
        <Bento Bsv='2' Bsh='2' Bst='B7' Th={translations[language].theme_switcher} Com={() => <ThemeSwitch onChange={handleThemeSwitch} />} />
        <Bento Bsv='2' Bsh='2' Bst='B7' Th={translations[language].button_example} Com={Button} Bt={translations[language].see_more} />
        <Bento Bsv='2' Bsh='2' Bst='B7' Th={translations[language].download_example} Com={Download} />
        <Bento Bsv='2' Bsh='2' Bst='B7' Th={translations[language].language_switcher} Com={() => <LanguageSwitch onChange={handleLanguageSwitch} checked={language === "spanish"} />}/>
      </BentoGrid>
      <Footer cb={translations[language].created_by}/>
    </>
  )
}

export default App;
