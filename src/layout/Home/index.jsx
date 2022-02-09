import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import Pagination from '@mui/material/Pagination'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'

import Hero from '../../components/Hero'
import Filter from '../../components/Filter'
import CardMovie from '../../components/CardMovie'

import * as S from './styles'
import { BASE_URL } from '../../api/config'

const HomeLayout = () => {
  const router = useRouter()
  const [popularMovies, setPopularMovies] = useState([])
  const [page, setPage] = useState(parseInt(router.query.page) || 1)
  const [genres, setGenres] = useState([])
  const [selectedGenres, setSelectedGenres] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const movies = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(
          `${BASE_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=${page}&language=pt-BR`,
        )

        const data = await response.json()
        setPopularMovies([...data.results])
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
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
        `${BASE_URL}/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`,
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
    <>
      <NextSeo
        title="TMDB :: Home"
        description="Desafio Frontend da Promobit"
        canonical="https://larissagomes-frontend-challenge.vercel.app/"
        openGraph={{
          url: 'https://larissagomes-frontend-challenge.vercel.app/',
          title: 'TMDB',
          description: 'Desafio Frontend da Promobit',
          site_name: 'TMDB',
        }}
      />
      <main>
        <Hero>
          <S.Title>
            Milhões de filmes, séries e pessoas para descobrir. Explore já.
          </S.Title>

          <Filter genres={genres} handleFilterGenres={handleFilterGenres} />
        </Hero>

        {isLoading ? (
          <S.MovieList>
            {Array(10)
              .fill()
              .map((_, index) => (
                <Box key={index}>
                  <Skeleton
                    variant="rectangular"
                    width={176}
                    height={180}
                    style={{ marginBottom: '1rem' }}
                  />
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              ))}
          </S.MovieList>
        ) : (
          <S.MovieList>
            {selectedGenres.length === 0
              ? popularMovies.map(infos => (
                  <CardMovie
                    key={infos.id}
                    name={infos.title}
                    date={infos.release_date}
                    poster={infos.poster_path}
                    id={infos.id}
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
                      id={infos.id}
                    />
                  ))}
          </S.MovieList>
        )}

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
    </>
  )
}

export default HomeLayout
