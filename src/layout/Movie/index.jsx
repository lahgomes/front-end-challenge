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
import { PieChart } from 'react-minimal-pie-chart'
import { BASE_URL, IMAGE_URL } from '../../api/config'

import * as S from './styles'

const MovieLayout = ({ movie }) => {
  const router = useRouter()
  const { id } = router.query
  const percentAverage = (movie.vote_average * 100) / 10

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
        fetch(
          `${BASE_URL}/movie/${movie.id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`,
        ).then(response => response.json()),
        fetch(
          `${BASE_URL}/movie/${movie.id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`,
        ).then(response => response.json()),
        fetch(
          `${BASE_URL}/movie/${movie.id}/recommendations?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR&page=1`,
        ).then(response => response.json()),
        fetch(
          `${BASE_URL}/movie/${movie.id}/release_dates?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`,
        ).then(response => response.json()),
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
    <main>
      <Head>
        <title>{id}</title>
      </Head>
      <Hero>
        <S.Container className="containerhero">
          <S.Poster>
            <Image
              src={`${IMAGE_URL}/${movie.poster_path}`}
              alt="poster"
              width={383}
              height={574}
              quality={80}
              loading="lazy"
            />
          </S.Poster>
          <S.WrapperText>
            <S.TitleMovie>
              {movie.title} ({movie.release_date.slice(0, 4)})
            </S.TitleMovie>
            <S.InfosMovie>
              <li>
                {releaseDates
                  .filter(item => item.iso_3166_1 === 'BR')
                  .map(item => {
                    if (item.release_dates[0].certification === 'L') {
                      return 'Livre'
                    }

                    return `${item.release_dates[0].certification} anos`
                  })}
              </li>
              <li>{formatDate(movie.release_date)}</li>
              <li>
                {movie.genres.map(
                  (item, index) => (index ? ', ' : '') + ' ' + item.name,
                )}
              </li>
              <li>{convertHours(movie.runtime)}</li>
            </S.InfosMovie>
            <S.MovieDonutChart>
              <S.MovieDonutChartContent>
                <PieChart
                  data={[
                    {
                      value: Math.round(percentAverage) || ' ',
                      color: '#14FF00',
                    },
                  ]}
                  totalValue={100}
                  lineWidth={20}
                  label={({ dataEntry }) => `${dataEntry.value}%`}
                  labelPosition={0}
                  rounded={true}
                  startAngle={270}
                  style={{ widht: '80px' }}
                  labelStyle={{ fontSize: '2.2rem', fill: '#14FF00' }}
                />
              </S.MovieDonutChartContent>
              <p>
                Avaliação dos <br /> usuários
              </p>
            </S.MovieDonutChart>

            <S.TitleSynopsis>Sinopse</S.TitleSynopsis>
            <S.DescriptionMovie>{movie.overview}</S.DescriptionMovie>
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
                  <div key={Math.random(item.id)}>
                    <h3>{item.original_name}</h3>
                    <p>{item.job}</p>
                  </div>
                ))}
            </S.StaffMovie>
          </S.WrapperText>
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
  )
}

export default MovieLayout
