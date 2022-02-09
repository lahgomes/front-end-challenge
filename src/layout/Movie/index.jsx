import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper'
import Hero from '../../components/Hero'
import CardCast from '../../components/CardCast'
import TrailerMovie from '../../components/TrailerMovie'
import CardMovie from '../../components/CardMovie'
import PosterMovie from '../../components/PosterMovie'
import WrapperTextMovie from '../../components/WrapperTextMovie'

import { fetchAPI } from '../../api/config'

import * as S from './styles'

const MovieLayout = ({ movie }) => {
  const router = useRouter()
  const { id } = router.query

  const [isLoading, setIsLoading] = useState(false)
  const [releaseDates, setReleaseDates] = useState([])
  const [movieCrew, setMovieCrew] = useState([])
  const [movieCast, setMovieCast] = useState([])
  const [movieVideo, setMovieVideo] = useState([])
  const [movieRecommendations, setMovieRecommendations] = useState([])

  useEffect(() => {
    const allInfoMovie = () => {
      setIsLoading(true)
      Promise.all([
        fetchAPI(`movie/${movie.id}/credits`).then(response => response.json()),
        fetchAPI(`movie/${movie.id}/videos`).then(response => response.json()),
        fetchAPI(`movie/${movie.id}/recommendations`).then(response =>
          response.json(),
        ),
        fetchAPI(`movie/${movie.id}/release_dates`).then(response =>
          response.json(),
        ),
      ])
        .then(allResponses => {
          setMovieCrew([...allResponses[0].crew])
          setMovieCast([...allResponses[0].cast])
          setMovieVideo([...allResponses[1].results])
          setMovieRecommendations([...allResponses[2].results])
          setReleaseDates([...allResponses[3].results])
        })
        .catch(error => router.push('/'))
        .finally(() => setIsLoading(false))
    }

    allInfoMovie()
  }, [movie.id, router])

  return (
    <>
      <NextSeo
        title={`TMDB :: ${movie.title}` || ''}
        description={movie.overview || 'Desafio Frontend da Promobit'}
        canonical="https://larissagomes-frontend-challenge.vercel.app/"
        openGraph={{
          url: 'https://larissagomes-frontend-challenge.vercel.app/',
          title: 'TMDB',
          description: `${movie.overview}`,
          site_name: 'TMDB',
        }}
      />
      <main>
        <Hero>
          <S.Container className="containerhero">
            <PosterMovie poster={movie.poster_path} />
            <WrapperTextMovie
              movie={movie}
              releaseDates={releaseDates}
              movieCrew={movieCrew}
              movieCast={movieCast}
            />
          </S.Container>
        </Hero>

        {!isLoading && (
          <S.Container>
            <h1>Elenco original</h1>
            <Swiper
              scrollbar={{
                hide: false,
              }}
              modules={[Scrollbar]}
              className="mySwiper"
              slidesPerView={2}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 30,
                },
              }}
              style={{ cursor: 'grab' }}
            >
              {movieCast.map(cast => {
                return (
                  <SwiperSlide key={cast.id}>
                    <CardCast
                      name={cast.original_name}
                      character={cast.character}
                      poster={cast.profile_path}
                    />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </S.Container>
        )}

        {!isLoading && movieVideo.length > 0 && (
          <S.Container>
            <h1>Trailer</h1>
            <TrailerMovie moviekey={movieVideo[0].key} />
          </S.Container>
        )}

        {!isLoading && movieRecommendations.length > 0 && (
          <S.Container>
            <h1>Recomendações</h1>
            <S.WrapperRecommendation>
              {movieRecommendations
                .filter((_, index) => index < 6)
                .map(movie => {
                  return (
                    <CardMovie
                      key={movie.id}
                      id={movie.id}
                      name={movie.title}
                      date={movie.release_date}
                      poster={movie.poster_path}
                    />
                  )
                })}
            </S.WrapperRecommendation>
          </S.Container>
        )}
      </main>
    </>
  )
}

export default MovieLayout
