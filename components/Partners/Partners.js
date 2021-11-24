import _ from 'lodash'
import Accordion from './Accordion/Accordion'
import PartnersStyled from './PartnersStyled'

const Partners = ({ locale, partners }) => {
  const heading = _.get(partners, `${locale}Heading`)
  const EF = _.get(partners, `${locale}EF`)
  const ELS = _.get(partners, `${locale}ELS`)
  const LURS = _.get(partners, `${locale}LURS`)
  const partnersData = [EF, ELS, LURS]

  return (
    <PartnersStyled id="partners">
      <h1 className="heading">{heading}</h1>
      <div className="accordionWrapper">
        {partnersData.map((partner) => {
          const { content: item } = partner
          return (
            <Accordion
              title={item[0].content[0].value}
              key={item[0].content[0].value}
            >
              <div className="card" style={{ display: 'flex' }}>
                <div className="desc">
                  <p>{item[1].content[0].value}</p>
                </div>
                <div className="address">
                  <ul>
                    {item[2].content.map((line, i) => (
                      <li key={i}>{line.content[0].content[0].value}</li>
                    ))}
                  </ul>
                  <div
                    className="map"
                    dangerouslySetInnerHTML={{
                      __html: `${item[3].content[0].value}`,
                    }}
                  ></div>
                </div>
              </div>
            </Accordion>
          )
        })}
      </div>
    </PartnersStyled>
  )
}

export default Partners
