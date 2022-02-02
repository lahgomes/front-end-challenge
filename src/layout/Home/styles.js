import styled from 'styled-components'

export const Title = styled.h1`
  color: ${props => props.theme.white};
  font-size: 2.4rem;
  font-weight: ${props => props.theme.bold};

  @media (min-width: 768px) {
    font-size: 4.8rem;
    text-align: center;
    width: 78rem;
  }
`
export const MovieList = styled.section`
  display: flex;
  gap: 3rem;
  justify-content: center;
  margin: 0 auto;
  max-width: 100rem;
  padding: 4rem 1.5rem;
  width: 100%;
`
