import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path) => currentPath === path

  return (
    <nav className="top-nav">
      <Link to="/" className="brand">
        <span className="brand-mark">R</span>
        <span>Ramya</span>
      </Link>

      <div className="nav-links">
        <Link to="/" className={isActive('/') ? 'nav-link active' : 'nav-link'}>Home</Link>
        <Link to="/projects" className={isActive('/projects') ? 'nav-link active' : 'nav-link'}>Projects</Link>
        <Link to="/assignments" className={isActive('/assignments') ? 'nav-link active' : 'nav-link'}>Assignments</Link>
      </div>

      <div className="nav-socials">
        <a href="https://www.linkedin.com/in/ramya-paranthaman-581705285?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/astronautgold" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </nav>
  )
}

export default Navbar

