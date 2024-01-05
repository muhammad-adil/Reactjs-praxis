import { useEffect, useState } from 'react'
import './App.css'
//  Framer Motion
import { motion, AnimatePresence } from 'framer-motion'
// Components
import Movie from './components/Movie'
import FilterMovies from './components/FilterMovies'

function App() {
  const [popular, setPopular] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeGenre, setActiveGenre] = useState(0)

  const fetchPpular = async () => {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=7716ce1f9f2e8811557dd7a292cb4cde&language=en-US&page=1')
    const movies = await response.json()
    console.log(movies)
    setPopular(movies.results)
    setFiltered(movies.results)
  }
  
  useEffect(() => {
    fetchPpular()
  }, [])

  return (
    <>
      <div className='App'>
        <FilterMovies popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
        <motion.div layout className='popular-movies'>
          <AnimatePresence>
          {filtered.map((movie: any) => (
            <Movie key={movie.id} movie={movie} />
          ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  )
}

export default App
