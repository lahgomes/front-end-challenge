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
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;

    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  }
`
