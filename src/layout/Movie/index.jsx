import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { formatDate, convertHours } from '../../utils'
import Image from 'next/image'
import Head from 'next/head'
import Hero from '../../components/Hero'
import CardCast from '../../components/CardCast'
import TrailerMovie from '../../components/TrailerMovie'
import CardMovie from '../../components/CardMovie'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper'
import { IMAGE_URL } from '../../api/config'

import * as S from './styles'

const MovieLayout = () => {
  const router = useRouter()
  //const [isLoading, setIsLoading] = useState(false)
  const [detailsMovies, setDetailsMovies] = useState({})
  /* const [releaseDates, setReleaseDates] = useState([]) */
  const [movieCrew, setMovieCrew] = useState([])
  const [movieCast, setMovieCast] = useState([])
  const [movieVideo, setMovieVideo] = useState([])
  const [movieRecommendations, setMovieRecommendations] = useState([])

  const { id } = router.query

  useEffect(() => {
    const moviesdetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`,
        )

        const data = await response.json()
        setDetailsMovies(data)
      } catch (error) {
        console.log(error)
      }
    }

    if (id !== undefined) {
      moviesdetails()
    }
  }, [id])

  /* useEffect(() => {
    const releasedates = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`,
      )

      const data = await response.json()

      console.log('dates', data)
      setReleaseDates(data.results)
    }

    releasedates()
  }, [id]) */

  useEffect(() => {
    const moviescredits = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`,
        )

        const data = await response.json()
        setMovieCrew(data.crew)
        setMovieCast(data.cast)
      } catch (error) {
        console.log(error)
      }
    }

    if (id !== undefined) {
      moviescredits()
    }
  }, [id])

  useEffect(() => {
    const moviesvideos = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`,
      )

      const data = await response.json()
      setMovieVideo(data.results)
    }

    if (id !== undefined) {
      moviesvideos()
    }
  }, [id])

  useEffect(() => {
    const moviesrecommendations = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR&page=1`,
      )

      const data = await response.json()
      setMovieRecommendations(data.results)
    }

    if (id !== undefined) {
      moviesrecommendations()
    }
  }, [id])

  return (
    <main>
      <Head>
        <title>{id}</title>
      </Head>
      <Hero>
        <S.Container className="containerhero">
          <S.Poster>
            <Image
              src={`${IMAGE_URL}/${detailsMovies.poster_path}`}
              alt="poster"
              width={383}
              height={574}
            />
          </S.Poster>
          <S.WrapperText>
            <S.TitleMovie>
              {detailsMovies.title} ({detailsMovies?.release_date?.slice(0, 4)})
            </S.TitleMovie>
            <S.InfosMovie>
              <li>16 anos</li>
              <li>{formatDate(detailsMovies?.release_date)}</li>
              <li>
                {detailsMovies?.genres?.map(
                  (item, index) => (index ? ', ' : '') + ' ' + item.name,
                )}
              </li>
              <li>{convertHours(detailsMovies?.runtime)}</li>
            </S.InfosMovie>
            <S.TitleSynopsis>Sinopse</S.TitleSynopsis>
            <S.DescriptionMovie>{detailsMovies?.overview}</S.DescriptionMovie>

            <S.StaffMovie>
              <div>
                <h3>{movieCast[0]?.original_name}</h3>
                <p>{movieCast[0]?.character}</p>
              </div>

              <div>
                <h3>{movieCast[1]?.original_name}</h3>
                <p>{movieCast[1]?.character}</p>
              </div>

              {movieCrew
                ?.filter(item => item.department === 'Directing')
                .slice(0, 1)
                .map(item => (
                  <div key={item.id}>
                    <h3>{item.original_name}</h3>
                    <p>{item.job}</p>
                  </div>
                ))}

              {movieCrew
                ?.filter(item => item.department === 'Writing')
                .slice(0, 2)
                .map(item => (
                  <div key={item.id}>
                    <h3>{item.original_name}</h3>
                    <p>{item.job}</p>
                  </div>
                ))}
            </S.StaffMovie>
          </S.WrapperText>
        </S.Container>
      </Hero>

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
              spaceBetween: 50,
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

      {movieVideo.length > 0 && (
        <S.Container>
          <h1>Trailer</h1>
          <TrailerMovie moviekey={movieVideo[0].key} />
        </S.Container>
      )}

      <S.Container>
        <h1>Recomendações</h1>
        <S.WrapperRecommendation>
          {movieRecommendations
            .filter((_, index) => index < 5)
            .map(movie => {
              console.log(movie)
              return (
                <CardMovie
                  key={movie.id}
                  name={movie.title}
                  date={movie.release_date}
                  poster={movie.poster_path}
                />
              )
            })}
        </S.WrapperRecommendation>
      </S.Container>
    </main>
  )
}

export default MovieLayout
