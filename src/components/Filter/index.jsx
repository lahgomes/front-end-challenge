import * as S from './styles'

const Filter = () => {
  return (
    <S.Form>
      <S.FormTitle> Filtre por: </S.FormTitle>
      <S.Wrapper>
        <span>
          <S.FormLabel htmlFor="drama">Drama</S.FormLabel>
          <S.CheckBoxGenre type="checkbox" id="drama" />
        </span>
        <span>
          <S.FormLabel htmlFor="terror">Terror</S.FormLabel>
          <S.CheckBoxGenre type="checkbox" id="terror" />
        </span>
        <span>
          <S.FormLabel htmlFor="acao">Ação</S.FormLabel>
          <S.CheckBoxGenre type="checkbox" id="acao" />
        </span>
        <span>
          <S.FormLabel htmlFor="Aventura">Aventura</S.FormLabel>
          <S.CheckBoxGenre type="checkbox" id="Aventura" />
        </span>
        <span>
          <S.FormLabel htmlFor="ficcaocientifica">
            Ficção Científica
          </S.FormLabel>
          <S.CheckBoxGenre type="checkbox" id="ficcaocientifica" />
        </span>
      </S.Wrapper>
    </S.Form>
  )
}

export default Filter
