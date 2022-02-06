import { useRouter } from 'next/router'
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
  const { id } = router.query

  return (
    <main>
      <Head>
        <title>{id}</title>
      </Head>
      <Hero>
        <S.Container className="containerhero">
          <S.Poster>
            <Image
              src="/assets/poster-teste.png"
              alt="poster"
              width={383}
              height={574}
            />
          </S.Poster>
          <S.WrapperText>
            <S.TitleMovie>Deadpool (2016)</S.TitleMovie>
            <S.SubtitleMovie>
              16 anos • 11/02/2016 (BR) • Ação, Aventura, Comédia, Ficção
              científica • 1h 47m
            </S.SubtitleMovie>
            <S.TitleSynopsis>Sinopse</S.TitleSynopsis>
            <S.DescriptionMovie>
              Baseado no anti-herói não convencional da Marvel Comics, Deadpool
              conta a história da origem do ex-agente das Forças Especiais que
              se tornou o mercenário Wade Wilson. Depois de ser submetido a um
              desonesto experimento que o deixa com poderes de cura acelerada,
              Wade adota o alter ego de Deadpool. Armado com suas novas
              habilidades e um senso de humor negro e distorcido, Deadpool
              persegue o homem que quase destruiu sua vida.
            </S.DescriptionMovie>
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
