import styled from 'styled-components'

export default styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.blue};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  color: ${({ theme }) => theme.colors.yellow};
  cursor: pointer;
  padding: 0.5rem 2rem;
  z-index: 1;
  font-family: 'Amatic SC', cursive;
  font-size: 2rem;
  letter-spacing: 2px;
  font-weight: 900;
  &.big {
    font-size: 3rem;
    letter-spacing: 2px;
    margin-top: 10rem;
  }
`
