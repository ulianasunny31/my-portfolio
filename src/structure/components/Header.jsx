import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="navigation">
      <navigation>
        <NavLink to="/">About</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </navigation>
    </div>
  );
};

export default Header;
