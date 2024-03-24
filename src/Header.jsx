import Logo from './Assets/Logo.svg'
export default function Header () {
  return (
    <header>
      <img src={Logo}/>
      <nav>
        <li>
          <ul><a>Home</a></ul>
          <ul><a>About Me</a></ul>
          <ul><a>Projects</a></ul>
        </li>
      </nav>
      <div>
        <p>Created by </p>
        <a id='Me' href='https://franciscobuchini.vercel.app/' target="_blank">Francisco Buchini</a>
      </div>
    </header>
  )
}