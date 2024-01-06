import { Link } from 'react-router-dom'
import grape from '../icons/grape.png'
import './NavBar.scss'


const NavBar = () => {
    return (
        <nav className='nav_container'>
            <Link to={'/home'}>
                <img src={grape} alt="grape-icon" />
            </Link>
        </nav>)
}
export default NavBar