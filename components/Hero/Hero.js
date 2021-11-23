import HeroStyled from './HeroStyled'
import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll'
import Button from '../Button/Button'

const Hero = ({ hero }) => {
  const {
    erasmusIcon: {
      fields: { file: erasmusIcon },
    },
    title: {
      fields: { file: title },
    },
    slogan,
  } = hero

  return (
    <HeroStyled id="hero">
      <Image
        src="/img/hero.jpg"
        alt="hero background"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL="/img/hero-thumb.jpg"
      />
      <div className="titleWrapper">
        <Image
          src={`https:${title.url}`}
          alt="Real Life Context"
          width={title.details.image.width}
          height={title.details.image.height}
        />
      </div>
      <p className="slogan">{slogan}</p>
      <ScrollLink to="about" smooth style={{ zIndex: 1 }}>
        <Button style="big" text="Read More" />
      </ScrollLink>
      <div className="erasmusIconWrapper">
        <Image
          src={`https:${erasmusIcon.url}`}
          alt="erasmus plus icon"
          width={erasmusIcon.details.image.width}
          height={erasmusIcon.details.image.height}
        />
      </div>
    </HeroStyled>
  )
}

export default Hero
