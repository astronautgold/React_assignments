import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#282c34' }}>
      <Link
        to="/"
        style={{
          color: '#61dafb',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          marginRight: '1.5rem'
        }}
      >
        Home
      </Link>
      
      <Link
        to="/about"
        style={{
          color: '#61dafb',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}
      >
        About
      </Link>
      
    </nav>
  )
}

export default Navbar

