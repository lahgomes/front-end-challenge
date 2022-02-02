import Hero from '../../components/Hero'
import Filter from '../../components/Filter'
import Cards from '../../components/Cards'

import * as S from './styles'

const HomeLayout = () => {
  return (
    <main>
      <Hero>
        <S.Title>
          Milhões de filmes, séries e pessoas para descobrir. Explore já.
        </S.Title>
        <Filter />
      </Hero>
      <S.MovieList>
        <Cards />
        <Cards />
      </S.MovieList>
    </main>
  )
}

export default HomeLayout
