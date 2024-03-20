import Logo from './Assets/Logo.svg'
export default function Header () {
  return (
    <div className='Header'>
      <img src={Logo}/>
      <p>Created by <a id='Me' href='https://franciscobuchini.vercel.app/' target="_blank">Francisco Buchini</a></p> 
    </div>
  )
}