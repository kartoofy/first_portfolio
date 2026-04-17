import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header>
      <NavLink to="/" className="logo">
        kartoofy
      </NavLink>
      <nav>
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
          Services
        </NavLink>
        <NavLink to="/skills" className={({ isActive }) => (isActive ? 'active' : '')}>
          Skills
        </NavLink>
        <NavLink to="/experience" className={({ isActive }) => (isActive ? 'active' : '')}>
          Experience
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
