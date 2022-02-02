import Image from 'next/image'
import * as S from './styles'

const Cards = () => {
  return (
    <>
      <S.Thumb>
        <Image
          src="/assets/poster-teste.png"
          alt="poster"
          width={176}
          height={264}
        />
        <S.Legend>
          <S.LegendTitle>Deadpool</S.LegendTitle>
          <S.LegendData>12 nov 2021</S.LegendData>
        </S.Legend>
      </S.Thumb>
    </>
  )
}

export default Cards
