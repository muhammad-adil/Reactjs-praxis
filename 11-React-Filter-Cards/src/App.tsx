import { useEffect, useState } from 'react'
import './App.css'
import Movie from './components/Movie'
import Filter from './components/Filter'

function App() {
  const [popular, setPopular] = useState([])

  const fetchPpular = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=7716ce1f9f2e8811557dd7a292cb4cde&language=en-US&page=1')
    const movies = await response.json()
    console.log(movies)
    setPopular(movies.results)
  }
  
  useEffect(() => {
    fetchPpular()
  }, [])

  return (
    <>
      <div className='App'>
        <Filter/>
        <div className='popular-movies'>
          {popular.map((movie: any) => (
            <Movie key={movie.id} movie={movie} />
          ))}
          {/* <Movie /> */}
        </div>
      </div>
    </>
  )
}

export default App
