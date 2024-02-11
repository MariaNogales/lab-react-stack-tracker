import HomePage from '../../pages/HomePage'
import './Navbar.css'
import { Link } from 'react-router-dom'



function Navbar() {


  return (
    <nav className='navbar'>
      <Link to='/' className='links'>
        <h1>StackTracker</h1>
      </Link>

    </nav>
  )
}

export default Navbar
