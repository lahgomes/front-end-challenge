import MovieLayout from '../../layout/Movie'
import { fetchAPI } from '../../api/config'

const Movie = ({ movie }) => {
  return <MovieLayout movie={movie} />
}

export async function getServerSideProps(context) {
  const response = await fetchAPI(`movie/${context.query.id}`)

  if (response.status === 404) {
    return {
      notFound: true,
    }
  }

  const movie = await response.json()

  return {
    props: { movie },
  }
}

export default Movie
