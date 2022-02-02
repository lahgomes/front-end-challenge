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
