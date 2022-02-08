import styled from 'styled-components'

export const WrapperError = styled.div`
  align-items: center;
  color: ${props => props.theme.purple};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  margin: 0 auto;

  .dory {
    animation: bounce 1s infinite alternate !important;
    margin-top: 3rem;

    @keyframes bounce {
      from {
        transform: translateY(0px);
      }
      to {
        transform: translateY(-15px);
      }
    }
  }
`
export const TitleError = styled.h1`
  font-size: 4rem;
  font-weight: ${props => props.theme.bold};
  text-transform: uppercase;
`
export const TextError = styled.p`
  font-size: 2rem;
  padding: 1rem;
`
