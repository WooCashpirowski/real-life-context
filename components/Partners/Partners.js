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
          const { content: items } = partner
          const description = items
            .filter((item) => item.nodeType === 'paragraph')
            .map((item) => item.content)
            .map((item) => item[0])
          const address = items.filter(
            (item) => item.nodeType === 'unordered-list',
          )[0]
          const map = items.filter(
            (item) => item.nodeType === 'embedded-entry-block',
          )[0].data.target
          return (
            <Accordion
              title={items[0].content[0].value}
              key={items[0].content[0].value}
            >
              <div className="card" style={{ display: 'flex' }}>
                <div className="desc">
                  {description.map((paragraph, i) => (
                    <p key={i} style={{ padding: '0.5rem 0' }}>
                      {paragraph.value}
                    </p>
                  ))}
                </div>
                <div className="address">
                  <ul>
                    {address.content.map((line, i) => (
                      <li key={i}>{line.content[0].content[0].value}</li>
                    ))}
                  </ul>
                  <div
                    className="map"
                    dangerouslySetInnerHTML={{
                      __html: `${map.fields.iframe}`,
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
