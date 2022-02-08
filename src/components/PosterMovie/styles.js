import styled from 'styled-components'

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
