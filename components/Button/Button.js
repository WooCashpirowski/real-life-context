import ButtonStyled from './ButtonStyled'

const Button = ({ text, style }) => {
  return <ButtonStyled className={style}>{text}</ButtonStyled>
}

export default Button
