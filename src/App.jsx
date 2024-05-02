import BentoGrid from './Components/BentoGrid'
import Header from './Components/Header'
import Footer from './Components/Footer'
import React, { useState } from 'react'
import Bento from './Components/Bento'
import Map from './Components/Map'
import ThemeSwitch from './Components/ThemeSwitch'
import LanguageSwitch from './Components/LanguageSwitch'
import ProgressBar from './Components/ProgressBar'
import ReactImg from './Assets/ReactImg.webp'
import Button from './Components/Button'
import Download from './Components/Download'

function App() {
  // Objet with lang:
  const lang = {
    english: {
      cb: 'Created By:',
      pending_tasks: 'Pending tasks:',
      start_creating: 'Start creating the BentoBoxUI web page.',
      next_tasks: 'Next tasks:',
      create_labels: 'Create labels.',
      my_location: 'My location:',
      react: 'React:',
      theme_switcher: 'Theme switcher:',
      button_example: 'Button example:',
      button1: 'See more',
      download_example: 'Download example:',
      language_switcher: 'Language switcher:'
    },
    spanish: {
      cb: 'Creado por:',
      pending_tasks: 'Tareas pendientes:',
      start_creating: 'Comienza a crear la página web de BentoBoxUI.',
      next_tasks: 'Próximas tareas:',
      create_labels: 'Crear etiquetas.',
      my_location: 'Mi ubicación:',
      react: 'React:',
      theme_switcher: 'Selector de tema:',
      button_example: 'Ejemplo botón:',
      button1: 'Ver mas',
      download_example: 'Ejemplo descarga:',
      language_switcher: 'Selector de idioma:'
    }
  };

  // Language switcher:
  const [language, setLanguage] = useState('english')
  const handleLanguageSwitch = (isChecked) => { setLanguage(isChecked ? 'spanish' : 'english')}

  // Map Theme switcher:
  const [theme, setTheme] = useState('light')
  const handleThemeSwitch = (isChecked) => {setTheme(isChecked ? 'dark' : 'light')}
  
  return (
    <>
      <Header cb={lang[language].cb}/>
      <BentoGrid Sh={lang[language].pending_tasks} Sp={lang[language].start_creating}>
        <Bento Bsv='2' Bsh='4' Bst='B1' Th={lang[language].next_tasks} Tp={lang[language].create_labels} />
        <Map Bsv='4' Bsh='2' Th={lang[language].my_location} ARc='Y' theme={theme} />
        <Bento Bsv='1' Bsh='2' Bst='B7' PBn='4' PBd='10' PBt={lang[language].react} PBimg={ReactImg} Com={ProgressBar}/>
        <Bento Bsv='2' Bsh='2' Bst='B7' Th={lang[language].theme_switcher} Com={() => <ThemeSwitch onChange={handleThemeSwitch} />} />
        <Bento Bsv='2' Bsh='2' Bst='B7' Th={lang[language].button_example} Com={Button} Bt={lang[language].button1} />
        <Bento Bsv='2' Bsh='2' Bst='B7' Th={lang[language].download_example} Com={Download} />
        <Bento Bsv='2' Bsh='2' Bst='B7' Th={lang[language].language_switcher} Com={() => <LanguageSwitch onChange={handleLanguageSwitch} checked={language === 'spanish'} />}/>
      </BentoGrid>
      <Footer cb={lang[language].cb}/>
    </>
  )
}

export default App;
