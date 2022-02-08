import styled from 'styled-components'

export const Form = styled.form`
  margin: 3.6rem 0;
`

export const FormTitle = styled.legend`
  color: ${props => props.theme.white};
  font-size: 1.4rem;
  margin-bottom: 1.6rem;
  text-transform: uppercase;

  @media (min-width: 768px) {
    text-align: center;
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem 1.2rem;
  margin: 0 auto;
  max-width: 90rem;
  padding: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    justify-content: center;
  }

  span {
    display: inline-block;
  }
`

export const FormLabel = styled.label`
  background-color: ${props => props.theme.white};
  border-radius: 0.4rem;
  color: ${props => props.theme.black};
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: ${props => props.theme.bold};
  padding: 0.8rem 1.6rem;

  align-items: center;
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;

  svg {
    color: ${props => props.theme.white};
    display: none;
  }
`

export const CheckBoxGenre = styled.input`
  display: none;

  &:checked {
    & ~ label {
      background-color: ${props => props.theme.orange};
      color: ${props => props.theme.white};

      svg {
        display: initial;
      }
    }
  }
`
