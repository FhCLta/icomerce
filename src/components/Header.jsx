import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../hook/useAuthContext';
import { useContext } from 'react';
import { SearchContext } from '../context/Searchcontext';
import './header.scss';

const Header = () => {
  const { logout, isAuth } = useAuthContext();
  const { setSearchQuery } = useContext(SearchContext);

  const linkIsActive = (isActive) => isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link';

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <nav className='header'>
      <NavLink className='header__logo' to='/'>LOGO</NavLink>
      <div className='header__center'>
        <input 
          type="text" 
          placeholder="Buscar..." 
          onChange={handleSearch} 
          className='header__search-bar'
        />
      </div>
      <ul className='header__nav-list'>
        <li className='header__list-item'>
          <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/'>Home</NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/dashboard'>Dashboard</NavLink>
        </li>
        {isAuth ? (
          <>
            <li className='header__list-item'>
              <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/secret'>Secret</NavLink>
            </li>
            <li className='header__list-item'>
              <NavLink className='header__item-link' onClick={logout}>Logout</NavLink>
            </li>
          </>
        ) : (
          <>
            <li className='header__list-item'>
              <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/login'>Login</NavLink>
            </li>
            <li className='header__list-item'>
              <NavLink className={({ isActive }) => linkIsActive(isActive)} to='/signup'>Signup</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;


