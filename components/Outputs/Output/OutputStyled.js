import styled from 'styled-components'

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.5s ease;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    align-items: flex-start;
  }
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  }
  .imageWrapper {
    flex: 1;
    padding: 1rem 2rem;
  }
  .outputInfo {
    flex: 5;
    padding: 1rem;
    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
  }
`
