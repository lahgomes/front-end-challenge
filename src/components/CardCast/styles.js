import styled from 'styled-components'

export const PhotoCast = styled.figure`
  align-items: center;
  border-radius: 0.4rem;
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  height: 33.6rem;
  margin-top: 3.2rem;
  padding: 0.8rem !important;
  width: 15rem;

  @media (min-width: 768px) {
    width: 19.1rem;
  }

  img {
    border-radius: 0.4rem;
  }
`

export const NameCast = styled.h3`
  font-size: 1.8rem;
  font-weight: ${props => props.theme.bold};
  padding: 1.2rem 0;
`
export const ActorCast = styled.p`
  font-size: 1.6rem;
  font-weight: ${props => props.theme.normal};
`