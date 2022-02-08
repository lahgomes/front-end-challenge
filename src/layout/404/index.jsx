import * as S from './styles'
import Image from 'next/image'

const Page404Layout = () => {
  return (
    <S.WrapperError>
      <S.TitleError>Error 404</S.TitleError>
      <S.TextError>Page not found</S.TextError>
      <div className="dory">
        <Image
          src="/assets/dory-error.png"
          alt="Dory couldn't find the page"
          width={156}
          height={284}
          quality={80}
        />
      </div>
    </S.WrapperError>
  )
}

export default Page404Layout
