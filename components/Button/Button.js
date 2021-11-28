import styled from 'styled-components'

const Button = ({ text, style, disabled, children }) => {
  return (
    <Btn className={style} disabled={disabled}>
      {text} {children}
    </Btn>
  )
}

export default Button

const Btn = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.blue};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  color: white;
  cursor: pointer;
  padding: 0.5rem 2rem;
  z-index: 1;
  font-family: 'Amatic SC', cursive;
  font-size: 1.2rem;
  letter-spacing: 2px;
  font-weight: 900;
  &.big {
    font-size: 3rem;
    letter-spacing: 2px;
    margin-top: 10rem;
  }
  &:disabled {
    color: gray;
    pointer-events: none;
  }
`
