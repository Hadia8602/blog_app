import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
         Home
      </NavLink>
      <NavLink to="/posts" className={({ isActive }) => isActive ? 'active' : ''}>
         Posts
      </NavLink>
      <NavLink to="/new" className={({ isActive }) => isActive ? 'active' : ''}>
         New Post
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
         About
      </NavLink>
    </nav>
  );
};

export default Navbar;