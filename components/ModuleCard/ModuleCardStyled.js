import styled from 'styled-components'

const Card = styled.div`
  border-radius: 15px 15px 0 0;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease;
  .wrapper {
    position: relative;
    height: 250px;
    overflow: hidden;
    border-radius: 15px 15px 0 0;
    h2,
    h3 {
      position: absolute;
      z-index: 10000 !important;
      color: white;
      text-transform: uppercase;
    }
    h2 {
      padding: 0.5rem 1rem;
      font-size: 2.5rem;
      width: 100%;
      background: linear-gradient(
        180deg,
        #283b6c 0%,
        rgba(182, 182, 182, 0) 100%
      );
      border-radius: 15px 15px 0 0;
    }
    h3 {
      bottom: 0;
      width: 100%;
      background: ${({ theme }) => theme.colors.blue};
      padding: 0.5rem 1rem;
      font-size: 1.5rem;
      font-weight: 200;
      text-align: center;
      border-radius: 15px 15px 0 0;
      transition: all 0.5s ease;
      box-shadow: 5px 0 5px rgba(0, 0, 0, 0.5);
    }
    .imageWrapper {
      z-index: 0;
      overflow: hidden;
      border-radius: 15px 15px 0 0;
      width: 100%;
      height: 100%;
      img {
        transition: transform 0.5s cubic-bezier(0.6, -0.02, 0.735, 0.045);
      }
    }
  }
  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    .imageWrapper {
      img {
        transform: rotate(5deg) scale(1.2);
      }
    }
    h3 {
      padding-top: 1.5rem;
      padding-bottom: 1.2rem;
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    .wrapper {
      height: 200px;
    }
  }
`

export default Card
