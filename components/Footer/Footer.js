import FooterStyled from './FooterStyled'
import Image from 'next/image'

const Footer = ({ footer }) => {
  const info =
    'This project has been funded with support from the European Commission. This publication reflects the views only of the author, and the Commission cannot be held responsible for any use which may be made of the information contained therein. Grant Agreement number: 2020-1-PL01-KA204-081771'

  const icon = '/img/Erasmus-logo.png'

  return (
    <FooterStyled>
      <div className="iconWrapper">
        <Image
          src={footer ? `https:${footer.erasmusIcon.fields.file.url}` : icon}
          alt="erasmus plus logo"
          width={
            footer
              ? footer.erasmusIcon.fields.file.details.image.width / 1.5
              : 478
          }
          height={
            footer
              ? footer.erasmusIcon.fields.file.details.image.height / 1.5
              : 138
          }
        />
      </div>
      <div className="infoWrapper">
        <p>{footer ? footer.text : info}</p>
      </div>
    </FooterStyled>
  )
}

export default Footer
