import styled from 'styled-components'

export const Header = styled.header`
  background-color: ${props => props.theme.purple};
  height: 5.6rem;
  width: 100%;
`
export const HeaderContainer = styled.div`
  align-items: center;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 120rem;
  padding: 0 2rem;
  width: 100%;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`
