import Image from 'next/image'
import Link from 'next/link'
import * as S from './styles'

const Header = () => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <Link href="/">
          <a>
            <Image
              src="/assets/logo-TMDB.svg"
              alt="TMDB white logo"
              width={150}
              height={20}
              quality={80}
            />
          </a>
        </Link>
      </S.HeaderContainer>
    </S.Header>
  )
}

export default Header
