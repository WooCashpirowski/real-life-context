import styled from 'styled-components'

export default styled.div`
  height: 100vh;
  z-index: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding-top: 7vh;
  .titleWrapper {
    width: 100%;
    text-align: center;
    padding: 2rem;
    background: linear-gradient(
      180deg,
      rgba(40, 59, 108, 0.65) 0%,
      rgba(29, 44, 85, 0) 100%
    );
    z-index: 1;
  }
  .slogan {
    display: block;
    width: 100%;
    text-align: center;
    color: white;
    font-weight: bold;
    letter-spacing: 4px;
    font-size: 5rem;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    top: 30%;
    z-index: 1;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 3.5rem;
      letter-spacing: 2px;
    }
  }
  .erasmusIconWrapper {
    align-self: flex-start;
    padding: 1rem 3rem;
  }
`
