import Logo from './Assets/Logo.svg'
export default function Header () {
  return (
    <header>
      <img src={Logo}/>
      <div>
        <p>Created by </p>
        <a id='Me' href='https://franciscobuchini.vercel.app/' target="_blank">Francisco Buchini</a>
      </div>
    </header>
  )
}