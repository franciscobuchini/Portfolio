import Logo from './Assets/Logo.webp'
export default function Header () {
  return (
    <header>
      <img src={Logo}/>
      <nav className='Nav'>
        <li>
          <ul><a>-</a></ul>
        </li>
      </nav>
      <div>
        <p>Created by </p>
        <a id='Me' href='https://franciscobuchini.vercel.app/' target="_blank">Francisco Buchini</a>
      </div>
    </header>
  )
}