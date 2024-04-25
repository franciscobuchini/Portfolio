import Logo from './Assets/Logo.webp'
export default function Header () {
  return (
    <header>
      <img src={Logo} alt="BentoBox UI Logo"/>
      <nav className='Nav'>
        <ul>
          <li><a>-</a></li>
        </ul>
      </nav>
      <div>
        <p className='CreatedBy'>Created by </p>
        <a className='Me' href='https://franciscobuchini.vercel.app/' target="_blank">Francisco Buchini</a>
      </div>
    </header>
  )
}