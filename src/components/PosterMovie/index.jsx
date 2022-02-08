import Image from 'next/image'
import { IMAGE_URL } from '../../api/config'

import * as S from './styles'

const PosterMovie = ({ poster }) => {
  return (
    <S.Poster>
      <Image
        src={`${IMAGE_URL}/${poster}`}
        alt="poster"
        width={383}
        height={574}
        quality={80}
        loading="lazy"
      />
    </S.Poster>
  )
}

export default PosterMovie
