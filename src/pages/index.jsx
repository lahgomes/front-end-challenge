import Hero from '../components/Hero'
import Filter from '../components/Filter'

import * as S from './styles'

const Home = () => {
  return (
    <>
      <Hero>
        <S.Title>
          Milhões de filmes, séries e pessoas para descobrir. Explore já.
        </S.Title>
        <Filter />
      </Hero>
    </>
  )
}

export default Home
