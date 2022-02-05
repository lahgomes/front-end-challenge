import styled from 'styled-components'

export const Thumb = styled.figure`
  overflow: hidden;
  width: 17.6rem;

  img {
    border-radius: 0.4rem;
    border: 1px solid ${props => props.theme.lightGray} !important;
  }
`
export const Legend = styled.figcaption`
  padding-top: 0.8rem;
`
export const LegendTitle = styled.h3`
  color: ${props => props.theme.black};
  font-size: 1.4rem;
  font-weight: ${props => props.theme.bold};

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`
export const LegendData = styled.p`
  color: ${props => props.theme.gray};
  font-size: 1.2rem;
  font-weight: ${props => props.theme.bold};
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`
