import BentoGrid from './Components/BentoGrid'
import Header from './Components/Header'
import Footer from './Components/Footer'
import React, { useState } from 'react'
import Bento from './Components/Bento'
import Map from './Components/Map'
import ThemeSwitch from './Components/ThemeSwitch'
import LanguageSwitch from './Components/LanguageSwitch'
import ProgressBar from './Components/ProgressBar'
import IBimg1 from './Assets/IBimg1.webp'
import IFimg1 from './Assets/IFimg1.webp'
import Button from './Components/Button'
import Download from './Components/Download'

function App() {
  // Objet with lang:
  const lang = {
    english: {
      cb: 'Created by:',
      h1_article1: 'BentoBox UI',
      p_article1: 'The open-source "bento box" styled UI. Design and build beautiful and usable websites with our 1.0.0 version for React JS.',
      h2_bento1: 'First of all...',
      p_bento1: 'Choose your preferencies:',
      theme: 'Theme switcher',
      language: 'Language switcher',
      h2_bento2: 'Version news:',
      p_bento2: 'Updates that you can find in this latest version:',
      h2_map: 'Location component',
      p_map: 'Show everyone the place you want in the world!',

      h1_article2: 'All the components we have:',
      p_article2: 'Discover the variety of components available in our user interface: a complete guide to all the options at your disposal.',
      h2_bento3: 'In addition to the components that you saw previously, you can use the following:',
      button1: 'Button example',
      bt1: 'Example',
      download1: 'Download:',
    },
    spanish: {
      cb: 'Creado por:',
      h1_article1: 'BentoBox UI',
      p_article1: 'La interfaz de usuario con estilo "bento box" de código abierto. Diseñe y cree sitios web atractivos y utilizables con nuestra versión 1.0.0 para React JS. ',
      h2_bento1: 'Antes que nada...',
      p_bento1: 'Elije tus preferencias:',
      theme: 'Selector de tema',
      language: 'Selector de idioma',
      h2_bento2: 'Novedades de la versión:',
      p_bento2: 'Actualizaciones que podras encontrar en esta última versión:',
      h2_map: 'Componente de ubicación',
      p_map: '¡Muéstrale a todos el lugar que tu quieras en el mundo!',

      h1_article2: 'Todos los componentes que tenemos:',
      p_article2: 'Descubre la variedad de componentes disponibles en nuestra interfaz de usuario: una guía completa para conocer todas las opciones a tu disposición.',
      h2_bento3: 'Además de los componentes que viste anteriormente, puedes utilizar los siguientes:',
      button1: 'Ejemplo de botón',
      bt1: 'Ejemplo',
      download1: 'Descargar:',
    }
  }

  // Language switcher:
  const [language, setLanguage] = useState('english')
  const handleLanguageSwitch = (isChecked) => { setLanguage(isChecked ? 'spanish' : 'english')}

  // Map Theme switcher:
  const [theme, setTheme] = useState('light')
  const handleThemeSwitch = (isChecked) => {setTheme(isChecked ? 'dark' : 'light')}
  
  return (
    <>
      <Header cb={lang[language].cb}/>

      <BentoGrid Sh={lang[language].h1_article1} Sp={lang[language].p_article1}>
        <Bento Bsv='2' Bsh='8' Bst='B1' Bbg='transparent' Th={lang[language].h2_bento1} Tp={lang[language].p_bento1} />
        <Bento Bsv='2' Bsh='4' Bst='B7' Th={lang[language].language} Com={() => <LanguageSwitch onChange={handleLanguageSwitch} checked={language === 'spanish'} />} />
        <Bento Bsv='2' Bsh='4' Bst='B7' Th={lang[language].theme} Com={() => <ThemeSwitch onChange={handleThemeSwitch} />} />
        <Bento Bsv='1' Bsh='8' Bbg='transparent' />
        <Bento Bsv='2' Bsh='8' Bst='B1' Bbg='transparent' Th={lang[language].h2_bento2} Tp={lang[language].p_bento2} />
        <Map Bsv='3' Bsh='8' Th={lang[language].h2_map} Tp={lang[language].p_map} ARc='Y' theme={theme} />
      </BentoGrid>

      <BentoGrid Sh={lang[language].h1_article2} Sp={lang[language].p_article2}>
        <Bento Bsv='2' Bsh='8' Bst='B1' Bbg='transparent' Th={lang[language].h2_bento3} />
        <Bento Bsv='2' Bsh='2' Bst='B7' ARc='Y' Th={lang[language].button1} Com={Button} Bt={lang[language].bt1} />
        <Bento Bsv='2' Bsh='2' Bst='B7' ARc='Y' Th={lang[language].download1} Com={Download} />
        <Bento Bsv='2' Bsh='4' Bst='B7' ARc='Y' Th={lang[language].image1} IBimg={IBimg1} IFimg={IFimg1}/>
        <Bento Bsv='2' Bsh='4' Bst='B7' ARc='Y' Th={lang[language].image2} />
        <Bento Bsv='2' Bsh='4' Bst='B7' ARc='Y' Th={lang[language].image3} />
      </BentoGrid>

      <Footer cb={lang[language].cb}/>
    </>
  )
}

export default App;
