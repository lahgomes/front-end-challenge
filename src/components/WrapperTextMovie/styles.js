import styled from 'styled-components'

export const WrapperText = styled.section`
  color: ${props => props.theme.white};
  max-width: 65rem;
`

export const TitleMovie = styled.h1`
  font-size: 3.2rem;
  font-weight: ${props => props.theme.bold};
  margin-bottom: 1rem;
`

export const InfosMovie = styled.ul`
  font-size: 1.8rem;
  font-weight: ${props => props.theme.normal};
  list-style: none;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    display: flex;
    gap: 0.5rem;

    li:not(:last-child) {
      &::after {
        content: '•';
        padding: 0 0.5rem 0 1rem;
      }
    }
  }
`
export const MovieDonutChart = styled.div`
  align-items: center;
  display: flex;
  gap: 2rem;
  margin-bottom: 2.5rem;

  p {
    font-size: 1.6rem;
    font-weight: ${props => props.theme.normal};
    line-height: 2rem;
  }
`

export const MovieDonutChartContent = styled.span`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 8rem;
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
export const StaffMovie = styled.section`
  display: flex;
  flex-wrap: wrap;
  font-size: 1.6rem;
  font-weight: ${props => props.theme.normal};
  gap: 3rem 1rem;

  div {
    width: 14rem;

    @media (min-width: 768px) {
      width: 20rem;
    }
  }

  h3 {
    font-size: 1.6rem;
    font-weight: ${props => props.theme.bold};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.4rem;
    font-weight: ${props => props.theme.normal};
  }
`
