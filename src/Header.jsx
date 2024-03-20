import Logo from './Assets/Logo.svg'
export default function Header () {
  return (
    <div className='Header'>
      <img src={Logo}/>
      <p>Created by <a>Francisco Buchini</a></p> 
    </div>
  )
}