
function App() {
  // Objet with lang:
  const lang = {
    english: {
      cb: 'Created By:',
      h1_article1: 'BentoBox UI',
      p_article1: 'The open-source "bento box" styled UI. Design and build beautiful and usable websites with our 1.0.0 version for React JS.',
      h2_bento1: 'Version news:',
      p_bento1: 'Updates that you can find in this latest version.',
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
      h1_article1: 'BentoBox UI',
      p_article1: 'La interfaz de usuario con estilo "bento box" de código abierto. Diseñe y cree sitios web atractivos y utilizables con nuestra versión 1.0.0 para React JS.',
      h2_bento1: 'Novedades de la versión:',
      p_bento1: 'Actualizaciones que podras encontrar en esta última versión.',
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
      <BentoGrid Sh={lang[language].h1_article1} Sp={lang[language].p_article1}>
        <Bento Bsv='2' Bsh='8' Bst='B1' Bbg='transparent' Th={lang[language].h2_bento1} Tp={lang[language].p_bento1} />
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
