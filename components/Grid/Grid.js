import styled from 'styled-components'

export default styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 2rem;
  grid-row-gap: 3rem;
  padding: 2rem 3rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
  }
  @media (max-width: ${({ theme }) => theme.phone}) {
    grid-template-columns: repeat(1, 1fr);
  }
`
