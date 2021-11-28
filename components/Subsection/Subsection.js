import styled from 'styled-components'
import Image from 'next/image'

const Subsection = ({ image, children }) => {
  return (
    <Section>
      <div className="imageWrapper">
        <Image
          src={`https:${image.url}`}
          width={image.details.image.width}
          height={image.details.image.height}
          alt={image.fieldName}
        />
      </div>
      <div className="links">{children}</div>
    </Section>
  )
}

export default Subsection

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1.5rem 0 0;
  height: 120px;
  .imageWrapper {
    flex: 5;
  }
  .links {
    display: flex;
    flex-direction: column;
    flex: 7;
    align-items: flex-end;
    justify-content: space-between;
    height: 100%;
    a {
      color: ${({ theme }) => theme.colors.darkBlue};
      text-decoration: none;
      font-size: 1.2rem;
      display: block;
      i {
        background: ${({ theme }) => theme.colors.darkBlue};
        color: white;
        padding: 0.3rem;
        margin-left: 0.5rem;
        transition: all 0.5s ease;
      }
      &:hover {
        i {
          transform: translateX(3px);
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column-reverse;
    justify-content: center;
    .links {
      margin-bottom: 2rem;
    }
  }
`