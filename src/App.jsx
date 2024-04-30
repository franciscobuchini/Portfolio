// APP.JSX
import BentoGrid from "./BentoGrid"
import Header from "./Header"
import Footer from "./Footer"
import React, { useState } from 'react';
import Bento from './Bento';
import Map from './Components/Map';
import ThemeSwitch from './Components/ThemeSwitch';
import ProgressBar from './Components/ProgressBar';
import ReactImg from './Assets/ReactImg.webp';
import Button from './Components/Button'
import Download from './Components/Download';

function App() {

  //Map Theme switcher
  const [theme, setTheme] = useState("light");
  const handleSwitch = (isChecked) => {setTheme(isChecked ? "dark" : "light");}
  
  return (
    <>
      <Header/>
      <BentoGrid>
        <Bento Bsv='2' Bsh='4' Bst='B1' Th='Proximas tareas:' Tp='1) Crear labels.' />
        <Map Bsv='4' Bsh='2' Th='My location:' ARc='Y' theme={theme} />
        <Bento Bsv='1' Bsh='2' Bst='B7' PBn='4' PBd='10' PBt='React:' PBimg={ReactImg} Com={ProgressBar}/>
        <Bento Bsv='2' Bsh='2' Bst='B7' Th='Theme switcher:' Com={() => <ThemeSwitch onChange={handleSwitch} />} />
        <Bento Bsv='2' Bsh='2' Bst='B7' Th='Button example:' Com={Button} />
        <Bento Bsv='2' Bsh='2' Bst='B7' Th='Download example:' Com={Download} />
      </BentoGrid>
      <Footer/>
    </>
  )
}

export default App