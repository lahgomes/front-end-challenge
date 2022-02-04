import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
  margin: 0 auto;
  max-width: 120rem;
  padding: 4rem 1.5rem;
  width: 100%;
`
export const Poster = styled.figure`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  height: auto;
  margin: 0 auto;
  max-width: 100%;
  width: 80%;

  @media (min-width: 768px) {
    height: 57.4rem;
    margin: initial;
    width: 38.3rem;
  }

  img {
    border-radius: 0.8rem;
  }
`

export const WrapperText = styled.section`
  color: ${props => props.theme.white};
  max-width: 65rem;
`
export const TitleMovie = styled.h1`
  font-size: 3.2rem;
  font-weight: ${props => props.theme.bold};
  margin-bottom: 1rem;
`
export const SubtitleMovie = styled.h2`
  font-size: 1.8rem;
  font-weight: ${props => props.theme.normal};
  margin-bottom: 3rem;
`
export const TitleSynopsis = styled.h3`
  font-size: 2rem;
  font-weight: ${props => props.theme.bold};
  margin-bottom: 1.5rem;
`
export const DescriptionMovie = styled.p`
  font-size: 1.6rem;
  font-weight: ${props => props.theme.normal};
  margin-bottom: 2rem;
`
export const StaffMovie = styled.p`
  font-size: 1.6rem;
  font-weight: ${props => props.theme.normal};
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;

  p {
    font-size: 1.4rem;
    padding-bottom: 2rem;
  }
`
