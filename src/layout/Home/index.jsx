import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Pagination from '@mui/material/Pagination'

import Hero from '../../components/Hero'
import Filter from '../../components/Filter'
import CardMovie from '../../components/CardMovie'

import * as S from './styles'

const HomeLayout = () => {
  const router = useRouter()
  const [popularMovies, setPopularMovies] = useState([])
  const [page, setPage] = useState(parseInt(router.query.page) || 1)
  const [genres, setGenres] = useState([])
  const [selectedGenres, setSelectedGenres] = useState([])

  useEffect(() => {
    const movies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=${page}&language=pt-BR`,
      )

      const data = await response.json()
      setPopularMovies([...data.results])
    }

    movies()
  }, [page])

  useEffect(() => {
    if (router.query.page) {
      setPage(parseInt(router.query.page))
    }
  }, [router.query.page])

  const handleChange = (event, value) => {
    setPage(value)
    router.push(`/?page=${value}`)
  }

  useEffect(() => {
    const genres = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`,
      )

      const data = await response.json()
      setGenres([...data.genres])
    }

    genres()
  }, [])

  const handleFilterGenres = (e, idMovie) => {
    if (e.target.checked) {
      setSelectedGenres(prevState => [...prevState, idMovie])
      return
    }

    const removeGenres = selectedGenres.filter(value => value !== idMovie)
    setSelectedGenres(removeGenres)
  }

  return (
    <main>
      <Hero>
        <S.Title>
          Milhões de filmes, séries e pessoas para descobrir. Explore já.
        </S.Title>

        <Filter genres={genres} handleFilterGenres={handleFilterGenres} />
      </Hero>

      <S.MovieList>
        {selectedGenres.length === 0
          ? popularMovies.map(infos => (
              <CardMovie
                key={infos.id}
                name={infos.title}
                date={infos.release_date}
                poster={infos.poster_path}
              />
            ))
          : popularMovies
              .filter(infos =>
                infos.genre_ids.some(item => selectedGenres.includes(item)),
              )
              .map(infos => (
                <CardMovie
                  key={infos.id}
                  name={infos.title}
                  date={infos.release_date}
                  poster={infos.poster_path}
                />
              ))}
      </S.MovieList>

      {selectedGenres.length === 0 && (
        <S.WrapperPagination>
          <Pagination
            count={100}
            page={page}
            onChange={handleChange}
            color="standard"
            className="pagination"
          />
        </S.WrapperPagination>
      )}
    </main>
  )
}

export default HomeLayout
