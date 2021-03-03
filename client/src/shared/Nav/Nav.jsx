import './Nav.css'
import { NavLink } from 'react-router-dom';

function Nav(props) {
  return (
    <div className='nav'>
      <NavLink className='logo' to='/'>App Name!</NavLink>
      <div className='nav-links'>
        <NavLink className='nav-link' to='/posts'>Posts</NavLink>
        <NavLink className='nav-link' to='/add-post'>Add Post</NavLink>
        </div>
    </div>
  )
}

export default Nav;