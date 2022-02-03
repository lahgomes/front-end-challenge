import * as S from './styles'

const Filter = ({ genres }) => {
  return (
    <S.Form>
      <S.FormTitle> Filtre por: </S.FormTitle>
      <S.Wrapper>
        {genres.map(genre => (
          <span key={genre.id}>
            <S.FormLabel htmlFor={genre.name}>{genre.name}</S.FormLabel>
            <S.CheckBoxGenre type="checkbox" id={genre.name} value={genre.id} />
          </span>
        ))}
      </S.Wrapper>
    </S.Form>
  )
}

export default Filter
