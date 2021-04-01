import { useState } from 'react';
import { Link, useLocation, withRouter } from 'react-router-dom';
import logo from '../images/header/logo.svg';

function Header({setLoggedIn, history, loggedIn}) {
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);

  const burgerMenuSelectors = `header__burger-menu${isBurgerOpened ? ' header__burger-menu_opened' : ''}`

  const userContainerMobileSelectors = `header__user-container header__user-container_mobile${isBurgerOpened ? ' header__user-container_opened' : ''}`

  function toggleBurgerMenu() {
    setIsBurgerOpened(!isBurgerOpened);
  }

  function signOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('email');
    setLoggedIn(false);
    history.push('/sign-in');
  }
  
  const location = useLocation();
  function usePageViews(location) {
    if (location.pathname === '/') {
      return (
        <div className='header__user-container'>
          <span className='header__user-email'>{localStorage.email}</span>
          <Link to='/sign-in' className='header__link' onClick={signOut}>Выйти</Link>
        </div>
      )
    } else if (location.pathname === '/sign-in') {
      return <Link to='/sign-up' className='header__link'>Регистрация</Link>
    } else if (location.pathname === '/sign-up'){
      return <Link to='/sign-in' className='header__link'>Войти</Link>
    }
  }

  return (
    <header className="header">
      {loggedIn && (
        <div className={userContainerMobileSelectors}>
          <span className='header__user-email'>{localStorage.email}</span>
          <Link to='/sign-in' className='header__user-email' onClick={signOut}>Выйти</Link>
        </div>
      )}
      <div className='header__container'>
        <img src={logo} alt="Место Россия" className="header__logo" />
        {usePageViews(location)}

        {loggedIn && <div className={burgerMenuSelectors} onClick={toggleBurgerMenu}/>}
      </div>
    </header>
  );
}

export default withRouter(Header);