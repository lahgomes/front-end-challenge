import { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import Filter from '../../components/Filter'
import Cards from '../../components/Cards'

import * as S from './styles'

const HomeLayout = () => {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    const movies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`,
      )

      const data = await response.json()
      setPopularMovies([...data.results])
    }

    movies()
  }, [])

  useEffect(() => {
    console.log(popularMovies)
  }, [popularMovies])

  return (
    <main>
      <Hero>
        <S.Title>
          Milhões de filmes, séries e pessoas para descobrir. Explore já.
        </S.Title>
        <Filter />
      </Hero>
      <S.MovieList>
        {popularMovies.map(infos => (
          <Cards
            key={infos.id}
            name={infos.title}
            date={infos.release_date}
            poster={infos.poster_path}
          />
        ))}
      </S.MovieList>
    </main>
  )
}

export default HomeLayout
