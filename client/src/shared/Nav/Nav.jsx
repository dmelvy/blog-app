import './Nav.css'
import { NavLink } from 'react-router-dom';
import logo from './logo192.png';

function Nav(props) {
  return (
    <>
      <img className='logo-image' src={logo} alt='our badass logo'/>
    <div className='nav'>
      <NavLink className='logo-text' to='/'>CRUD BLOG</NavLink>
      <div className='nav-links'>
        <NavLink className='nav-link' to='/posts'>Posts</NavLink>
        <NavLink className='nav-link' to='/add-post'>Add Post</NavLink>
        </div>
      </div>
      </>
  )
}

export default Nav;