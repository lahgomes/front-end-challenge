import PropTypes from 'prop-types'
import * as S from './styles'

const TrailerMovie = ({ moviekey }) => {
  return (
    <S.Trailer
      src={`https://www.youtube.com/embed/${moviekey}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}

TrailerMovie.propTypes = {
  moviekey: PropTypes.string.isRequired,
}

export default TrailerMovie
