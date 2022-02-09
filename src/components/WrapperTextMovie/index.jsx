import { formatDate, convertHours } from '../../utils'
import { PieChart } from 'react-minimal-pie-chart'

import * as S from './styles'

const WrapperTextMovie = ({ movie, releaseDates, movieCrew, movieCast }) => {
  const percentAverage = (movie.vote_average * 100) / 10

  console.log(releaseDates)

  return (
    <S.WrapperText>
      <S.TitleMovie>
        {movie.title} ({movie.release_date.slice(0, 4)})
      </S.TitleMovie>
      <S.InfosMovie>
        {releaseDates
          .filter(item => item.iso_3166_1 === 'BR')
          .map(item => {
            if (item.release_dates[0].certification === 'L') {
              return <li>Livre</li>
            }

            if (item.release_dates[0].certification !== '') {
              return <li>{item.release_dates[0].certification} anos</li>
            }
          })}

        <li>{formatDate(movie.release_date)}</li>
        <li>
          {movie.genres.map(
            (item, index) => (index ? ', ' : '') + ' ' + item.name,
          )}
        </li>
        <li>{convertHours(movie.runtime)}</li>
      </S.InfosMovie>
      <S.MovieDonutChart>
        <S.MovieDonutChartContent>
          <PieChart
            data={[
              {
                value: Math.round(percentAverage) || ' ',
                color: '#14FF00',
              },
            ]}
            totalValue={100}
            lineWidth={20}
            label={({ dataEntry }) => `${dataEntry.value}%`}
            labelPosition={0}
            rounded={true}
            startAngle={270}
            style={{ widht: '80px' }}
            labelStyle={{ fontSize: '2.2rem', fill: '#14FF00' }}
          />
        </S.MovieDonutChartContent>
        <p>
          Avaliação dos <br /> usuários
        </p>
      </S.MovieDonutChart>

      {movie.overview !== '' && (
        <>
          <S.TitleSynopsis>Sinopse</S.TitleSynopsis>
          <S.DescriptionMovie>{movie.overview}</S.DescriptionMovie>
        </>
      )}
      <S.StaffMovie>
        <div>
          <h3>{movieCast[0]?.original_name}</h3>
          <p>{movieCast[0]?.character}</p>
        </div>

        <div>
          <h3>{movieCast[1]?.original_name}</h3>
          <p>{movieCast[1]?.character}</p>
        </div>

        {movieCrew
          ?.filter(item => item.department === 'Directing')
          .slice(0, 1)
          .map(item => (
            <div key={item.id}>
              <h3>{item.original_name}</h3>
              <p>{item.job}</p>
            </div>
          ))}

        {movieCrew
          ?.filter(item => item.department === 'Writing')
          .slice(0, 2)
          .map(item => (
            <div key={Math.random(item.id)}>
              <h3>{item.original_name}</h3>
              <p>{item.job}</p>
            </div>
          ))}
      </S.StaffMovie>
    </S.WrapperText>
  )
}

export default WrapperTextMovie
