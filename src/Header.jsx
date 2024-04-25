import Logo from './Assets/Logo.webp'
export default function Header () {
  return (
    <header>
      <img src={Logo} alt="BentoBox UI Logo"/>
      <nav className='Nav'>
        <li>
          <ul><a>-</a></ul>
        </li>
      </nav>
      <div>
        <p>Created by </p>
        <a className='Me' href='https://franciscobuchini.vercel.app/' target="_blank">Francisco Buchini</a>
      </div>
    </header>
  )
}