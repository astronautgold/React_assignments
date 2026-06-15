import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <main style={{ padding: '2rem' }}>
     
      
      
        <Link
          to="/taskone"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.25rem',
            background: '#2563eb',
            color: '#fff',
            borderRadius: '999px',
            textDecoration: 'none',
            fontWeight: '600'
          }}
        >
          Go to Taskone
        </Link>

        <Link
          to="/tasktwo"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.25rem',
            background: '#2563eb',
            color: '#fff',
            borderRadius: '999px',
            textDecoration: 'none',
            fontWeight: '600'
          }}
        >
          Go to Tasktwo
        </Link>
      
    </main>
  )
}

export default Home
