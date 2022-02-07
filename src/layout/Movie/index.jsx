import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { formatDate, convertHours } from '../../utils'
import Image from 'next/image'
import Head from 'next/head'
import Hero from '../../components/Hero'
import CardCast from '../../components/CardCast'
import TrailerMovie from '../../components/TrailerMovie'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Scrollbar } from 'swiper'

import * as S from './styles'

const MovieLayout = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [detailsMovies, setDetailsMovies] = useState({})
  const [movieCast, setMovieCast] = useState([])
  const [movieCrew, setMovieCrew] = useState([])

  const { id } = router.query

  useEffect(() => {
    const moviesdetails = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`,
        )

        const data = await response.json()

        console.log('data', data)
        setDetailsMovies(data)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    moviesdetails()
  }, [id])

  useEffect(() => {
    const moviescredits = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`,
      )

      const data = await response.json()

      console.log('credits', data)
      setMovieCast(data.cast)
      setMovieCrew(data.crew)
    }

    moviescredits()
  }, [id])

  return (
    <main>
      <Head>
        <title>{id}</title>
      </Head>
      <Hero>
        {!isLoading && (
          <S.Container className="containerhero">
            <S.Poster>
              <Image
                src={`https://image.tmdb.org/t/p/w400/${detailsMovies.poster_path}`}
                alt="poster"
                width={383}
                height={574}
              />
            </S.Poster>
            <S.WrapperText>
              <S.TitleMovie>
                {detailsMovies.title} (
                {detailsMovies?.release_date?.slice(0, 4)})
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
              <S.DescriptionMovie>{detailsMovies.overview}</S.DescriptionMovie>
              <S.StaffMovie>
                <div>
                  <h3>Rob Liefeld</h3>
                  <p>Characters</p>
                  <h3>Fabian Nicieza</h3>
                  <p>Characters</p>
                </div>
                <div>
                  <h3>Rhett Reese</h3>
                  <p>Screenplay</p>
                  <h3>Paul Wernick</h3>
                  <p>Screenplay</p>
                </div>
              </S.StaffMovie>
            </S.WrapperText>
          </S.Container>
        )}
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
        >
          <SwiperSlide>
            <CardCast />
          </SwiperSlide>
          <SwiperSlide>
            <CardCast />
          </SwiperSlide>
          <SwiperSlide>
            <CardCast />
          </SwiperSlide>
          <SwiperSlide>
            <CardCast />
          </SwiperSlide>
          <SwiperSlide>
            <CardCast />
          </SwiperSlide>
          <SwiperSlide>
            <CardCast />
          </SwiperSlide>
          <SwiperSlide>
            <CardCast />
          </SwiperSlide>
          <SwiperSlide>
            <CardCast />
          </SwiperSlide>
          <SwiperSlide>
            <CardCast />
          </SwiperSlide>
        </Swiper>
      </S.Container>

      <S.Container>
        <h1>Trailer</h1>
        <TrailerMovie />
      </S.Container>

      <S.Container>
        <h1>Recomendações</h1>
      </S.Container>
    </main>
  )
}

export default MovieLayout
