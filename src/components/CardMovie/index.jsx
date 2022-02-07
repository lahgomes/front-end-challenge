import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '../../utils'
import * as S from './styles'

const CardMovie = ({ id, name, date, poster }) => {
  return (
    <>
      <S.Thumb>
        <Link href={`/movie/${id}`}>
          <a>
            <Image
              src={`https://image.tmdb.org/t/p/w400/${poster}`}
              alt="poster"
              width={176}
              height={264}
            />
          </a>
        </Link>
        <S.Legend>
          <S.LegendTitle>{name}</S.LegendTitle>
          <S.LegendData>{formatDate(date)}</S.LegendData>
        </S.Legend>
      </S.Thumb>
    </>
  )
}

export default CardMovie
