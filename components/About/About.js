import AboutStyled from './AboutStyled'
import Image from 'next/image'

const About = ({ locale, about }) => {
  const {
    en,
    pl,
    sl,
    image: {
      fields: { file: image },
    },
  } = about

  return (
    <AboutStyled id="about">
      <h1 className="heading">
        {locale === 'pl'
          ? pl.content[0].content[0].value
          : locale === 'sl'
          ? sl.content[0].content[0].value
          : en.content[0].content[0].value}
      </h1>
      <div className="wrapper">
        <div className="text">
          {locale === 'pl'
            ? pl.content
                .filter((item) => item.nodeType === 'paragraph')
                .map((paragraph, i) => (
                  <p className="paragraph" key={i}>
                    {paragraph.content[0].value}
                  </p>
                ))
            : locale === 'sl'
            ? sl.content
                .filter((item) => item.nodeType === 'paragraph')
                .map((paragraph, i) => (
                  <p className="paragraph" key={i}>
                    {paragraph.content[0].value}
                  </p>
                ))
            : en.content
                .filter((item) => item.nodeType === 'paragraph')
                .map((paragraph, i) => (
                  <p className="paragraph" key={i}>
                    {paragraph.content[0].value}
                  </p>
                ))}
        </div>
        <div className="image">
          <Image
            src={`https:${image.url}`}
            alt="people smiling image"
            layout="fill"
            objectFit="cover"
          />
          <div className="overlay" />
        </div>
      </div>
    </AboutStyled>
  )
}

export default About
