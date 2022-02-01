import * as S from './styles'
import Image from 'next/image'

const Header = () => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <Image
          src="/assets/logo-TMDB.svg"
          alt="TMDB white logo"
          width={150}
          height={20}
          quality={80}
        />
      </S.HeaderContainer>
    </S.Header>
  )
}

export default Header
