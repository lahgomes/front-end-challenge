import PropTypes from 'prop-types'
import { useContext } from 'react'
import { GlobalContext } from '../../context'
import CancelIcon from '@mui/icons-material/Cancel'
import * as S from './styles'

const Filter = ({ genres }) => {
  const { handleFilterGenres, selectedGenres } = useContext(GlobalContext)

  return (
    <S.Form>
      <S.FormTitle> Filtre por: </S.FormTitle>
      <S.Wrapper>
        {genres.map(genre => (
          <span key={genre.id}>
            <S.CheckBoxGenre
              type="checkbox"
              onChange={e => handleFilterGenres(e, genre.id)}
              id={genre.name}
              value={genre.id}
              checked={selectedGenres.includes(genre.id)}
            />
            <S.FormLabel htmlFor={genre.name}>
              {genre.name}
              <CancelIcon />
            </S.FormLabel>
          </span>
        ))}
      </S.Wrapper>
    </S.Form>
  )
}

Filter.propTypes = {
  genres: PropTypes.array.isRequired,
}

export default Filter
