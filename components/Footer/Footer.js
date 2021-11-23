import FooterStyled from './FooterStyled'
import Image from 'next/image'

const Footer = ({ footer }) => {
  return (
    <FooterStyled>
      <div className="iconWrapper">
        <Image
          src={`https:${footer.erasmusIcon.fields.file.url}`}
          alt="erasmus plus logo"
          width={footer.erasmusIcon.fields.file.details.image.width / 1.5}
          height={footer.erasmusIcon.fields.file.details.image.height / 1.5}
        />
      </div>
      <div className="infoWrapper">
        <p>{footer.text}</p>
      </div>
    </FooterStyled>
  )
}

export default Footer
