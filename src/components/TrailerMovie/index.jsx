import * as S from './styles'

const TrailerMovie = () => {
  const idVideo = '14TVi51-bgc'
  return (
    <S.Trailer
      src={`https://www.youtube.com/embed/${idVideo}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}

export default TrailerMovie
