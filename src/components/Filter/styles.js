import styled from 'styled-components'

export const Form = styled.form`
  margin: 3.6rem 0;
`

export const FormTitle = styled.legend`
  color: var(--white);
  font-size: 1.4rem;
  margin-bottom: 1.6rem;
  text-transform: uppercase;

  @media (min-width: 768px) {
    text-align: center;
  }
`
export const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 90rem;
  width: 100%;
  flex-wrap: wrap;
  gap: 3rem 1rem;

  @media (min-width: 768px) {
    justify-content: center;
  }

  span {
    display: inline-block;
  }
`

export const FormLabel = styled.label`
  background-color: var(--white);
  border-radius: 0.4rem;
  color: var(--black);
  font-size: 1.6rem;
  font-weight: 700;
  padding: 0.8rem 1.6rem;
  //margin: 1.2rem;
`

export const CheckBoxGenre = styled.input`
  display: none;

  &:checked {
    & ~ label {
      background-color: var(--orange);
      color: var(--white);

      svg {
        display: initial;
      }
    }
  }
`
