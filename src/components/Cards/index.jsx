import Image from 'next/image'
import { formatDate } from '../../utils'
import * as S from './styles'

const Cards = ({ name, date, poster }) => {
  return (
    <>
      <S.Thumb>
        <Image
          src={`https://image.tmdb.org/t/p/w400/${poster}`}
          alt="poster"
          width={176}
          height={264}
        />
        <S.Legend>
          <S.LegendTitle>{name}</S.LegendTitle>
          <S.LegendData>{formatDate(date)}</S.LegendData>
        </S.Legend>
      </S.Thumb>
    </>
  )
}

export default Cards
