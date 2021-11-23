import Output from './Output/Output'
import OutputsStyled from './OutputsStyled'
import _ from 'lodash'

const Outputs = ({ locale, outputs }) => {
  const heading = _.get(outputs, `${locale}Heading`)
  const eBook = _.get(outputs, `${locale}Ebook`)
  const materials = _.get(outputs, `${locale}Materials`)
  const modules = _.get(outputs, `${locale}Modules`)
  const platform = _.get(outputs, `${locale}Platform`)

  return (
    <OutputsStyled id="outputs">
      <h1 className="heading">{heading}</h1>
      <div className="outputsWrapper">
        <Output output={eBook} />
        <Output output={materials} />
        <Output output={modules} />
        <Output output={platform} />
      </div>
    </OutputsStyled>
  )
}

export default Outputs
