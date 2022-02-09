import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'
import { formatDate } from '../../utils'
import { IMAGE_URL } from '../../api/config'

import * as S from './styles'

const CardMovie = ({ id, name, date, poster }) => {
  return (
    <>
      <S.Thumb>
        <Link href={`/movie/${id}`}>
          <a>
            <Image
              src={`${IMAGE_URL}/${poster}`}
              alt="poster"
              width={176}
              height={264}
              quality={80}
              loading="lazy"
            />
          </a>
        </Link>
        <S.Legend>
          <S.LegendTitle>{name}</S.LegendTitle>
          <S.LegendData>{formatDate(date, 'short')}</S.LegendData>
        </S.Legend>
      </S.Thumb>
    </>
  )
}

CardMovie.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
}

export default CardMovie
