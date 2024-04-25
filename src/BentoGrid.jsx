import Bento from './Bento'
import ThemeSwitch from './Components/ThemeSwitch'
import Button from './Components/Button'

export default function BentoGrid() {

  return (
    <main className='BentoGrid'>
      <Bento Bsv='2' Bsh='4' Bst='B9' Th='Proximas tareas:' Tp='1) Animación y mods para botones. 2) Investigar patrones y probar backgrounds parallax. 3) problema con la pantalla estirada en la version mobile. 4) Agregar APIs.' Tta='center' Tjc='center' />
      <Bento Bsv='4' Bsh='2' Bst='B7' Com={Button} />
      <Bento Bsv='2' Bsh='2' Bst='B7' Com={ThemeSwitch} />
    </main>
    )
  }