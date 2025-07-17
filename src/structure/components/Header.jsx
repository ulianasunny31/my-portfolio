import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RiCloseLargeLine } from 'react-icons/ri';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header className={`header ${isOpen ? 'is-open' : ''}`}>
      <button onClick={() => toggleMenu()} className="open-menu-btn">
        {isOpen ? (
          <RiCloseLargeLine className="menu-icon" />
        ) : (
          <RxHamburgerMenu className="menu-icon" />
        )}
      </button>
      <nav className="navigation">
        <NavLink className="navlink" to="/">
          About
        </NavLink>
        <NavLink className="navlink" to="/resume">
          Resume
        </NavLink>
        <NavLink className="navlink" to="/projects">
          Projects
        </NavLink>
      </nav>{' '}
    </header>
  );
};

export default Header;
