import styled from 'styled-components'
import Layout from '../Layout/Layout'

const ModuleSkeleton = () => {
  return (
    <Layout>
      <SkeletonGrid>
        <div className="lesson"></div>
        <div className="lesson"></div>
        <div className="lesson"></div>
      </SkeletonGrid>
    </Layout>
  )
}

export default ModuleSkeleton

const SkeletonGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 2rem;
  padding: 2rem 0;
  .lesson {
    height: 250px;
    border-radius: 15px 15px 0 0;
    background: lightgray;
    opacity: 0.3;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
  }
  @media (max-width: ${({ theme }) => theme.phone}) {
    grid-template-columns: repeat(1, 1fr);
  }
`
