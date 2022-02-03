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
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
  margin: 0 auto;
  max-width: 120rem;
  padding: 4rem 1.5rem;
  width: 100%;
`

export const WrapperPagination = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  padding: 3rem;

  .pagination {
    button {
      color: ${props => props.theme.purple};
      font-size: 1.6rem;
      font-weight: ${props => props.theme.bold};
    }
  }
`
