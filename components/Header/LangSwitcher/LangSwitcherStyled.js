import styled from 'styled-components'

const Switcher = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.5rem;
  background: ${({ theme }) => theme.colors.darkBlue};
  transition: all 0.5s ease;
  a {
    padding: 0.5rem;
  }
`

export default Switcher
