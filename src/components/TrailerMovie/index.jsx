//import * as S from './styles'

const TrailerMovie = () => {
  const idVideo = '14TVi51-bgc'
  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${idVideo}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  )
}

export default TrailerMovie
