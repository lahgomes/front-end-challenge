import Image from 'next/image'
import * as S from './styles'

const CardCast = () => {
  return (
    <S.PhotoCast>
      <Image
        src="/assets/cast-teste.png"
        alt="movie cast photo"
        width={175}
        height={222}
      />
      <figcaption>
        <S.NameCast>Ryan Reynolds</S.NameCast>
        <S.ActorCast>Wade Wilson / Deadpool</S.ActorCast>
      </figcaption>
    </S.PhotoCast>
  )
}

export default CardCast
