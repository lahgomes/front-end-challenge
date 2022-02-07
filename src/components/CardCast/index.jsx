import Image from 'next/image'
import { IMAGE_URL } from '../../api/config'
import * as S from './styles'

const CardCast = ({ name, character, poster }) => {
  return (
    <S.PhotoCast>
      <Image
        src={
          poster === null
            ? '/assets/image-not-found.jpeg'
            : `${IMAGE_URL}/${poster}`
        }
        alt={name}
        width={256}
        height={384}
        quality={80}
        loading="lazy"
      />
      <figcaption>
        <S.NameCast>{name}</S.NameCast>
        <S.ActorCast>{character}</S.ActorCast>
      </figcaption>
    </S.PhotoCast>
  )
}

export default CardCast
