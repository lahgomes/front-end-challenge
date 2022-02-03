import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Pagination from '@mui/material/Pagination'

import Hero from '../../components/Hero'
import Filter from '../../components/Filter'
import Cards from '../../components/Cards'

import * as S from './styles'

const HomeLayout = () => {
  const router = useRouter()
  const [popularMovies, setPopularMovies] = useState([])
  const [page, setPage] = useState(parseInt(router.query.page) || 1)

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
      <S.WrapperPagination>
        <Pagination
          count={100}
          page={page}
          onChange={handleChange}
          color="standard"
          className="pagination"
        />
      </S.WrapperPagination>
    </main>
  )
}

export default HomeLayout
