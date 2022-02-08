import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  flex-direction: column;
  margin: 0 auto;
  max-width: 120rem;
  padding: 4rem 1.5rem;
  width: 100%;

  &.containerhero {
    flex-direction: row;
    justify-content: center;
  }
`

export const WrapperRecommendation = styled.div`
  display: flex;
  gap: 3rem;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`
