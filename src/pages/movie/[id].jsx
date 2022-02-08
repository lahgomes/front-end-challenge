import MovieLayout from '../../layout/Movie'

const Movie = ({ movie }) => {
  return <MovieLayout movie={movie} />
}

export async function getServerSideProps(context) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${context.query.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=pt-BR`,
  )

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
