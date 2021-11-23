import OutputStyled from './OutputStyled'
import Image from 'next/image'

const Output = ({ output }) => {
  const {
    data: { target: icon },
  } = output.content.filter(
    (item) => item.nodeType === 'embedded-asset-block',
  )[0]

  const outputInfo = output.content.filter(
    (item) => item.nodeType !== 'embedded-asset-block',
  )

  return (
    <OutputStyled>
      <div className="imageWrapper">
        <Image
          src={`https:${icon.fields.file.url}`}
          alt={icon.sys.id}
          width={icon.fields.file.details.image.width}
          height={icon.fields.file.details.image.height}
        />
      </div>
      <div className="outputInfo">
        <h2>{outputInfo[0].content[0].value}</h2>
        <p className="paragraph">{outputInfo[1].content[0].value}</p>
      </div>
    </OutputStyled>
  )
}

export default Output
