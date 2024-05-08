import BentoGrid from './Components/BentoGrid'
import Header from './Components/Header'
import Footer from './Components/Footer'
import React, { useState } from 'react'
import Bento from './Components/Bento'
import Map from './Components/Map'
import ThemeSwitch from './Components/ThemeSwitch'
import LanguageSwitch from './Components/LanguageSwitch'
import Button from './Components/Button'
import Download from './Components/Download'

function App() {

  // Language switcher:
  // const [language, setLanguage] = useState('english')
  // const handleLanguageSwitch = (isChecked) => { setLanguage(isChecked ? 'spanish' : 'english')}

  // // Map Theme switcher:
  // const [theme, setTheme] = useState('light')
  // const handleThemeSwitch = (isChecked) => {setTheme(isChecked ? 'dark' : 'light')}

  //Header list:
  const links = [
    {}
  ]

  // const lang = {
  //   english: {
  //     cb: 'Created by:',
  //   },
  //   spanish: {
  //     cb: 'Creado por:',
  //   }
  // }

  return (
    <>
      <Header cb='Created By:' links={links}/>

      <BentoGrid>
      </BentoGrid>

      <Footer cb='Created By:'/>
    </>
  )
}

export default App;