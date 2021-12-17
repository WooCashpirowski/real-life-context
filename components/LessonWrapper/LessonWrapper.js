import styled from 'styled-components'

const LessonWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default LessonWrapper

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 129px);
  .buttons {
    display: flex;
    flex-direction: column;
    height: 100%;
    button {
      border: none;
      flex: 1;
      background: ${({ theme }) => theme.colors.darkBlue};
      color: white;
      font-family: 'Amatic SC', cursive;
      font-size: 2rem;
      letter-spacing: inherit;
      padding: 0 1rem;
      cursor: pointer;
      border-bottom: 1px solid ${({ theme }) => theme.colors.blue};
      border-right: 1px solid ${({ theme }) => theme.colors.blue};
      transition: all 0.3s ease;
      &:last-child {
        border-bottom: none;
      }
      &:hover {
        background: ${({ theme }) => theme.colors.blue};
      }
      &.active {
        background: ${({ theme }) => theme.colors.blue};
      }
    }
  }
  .mediaWrapper {
    width: 100%;
    background: ${({ theme }) => theme.colors.darkBlue};
    iframe {
      width: 100%;
      height: 100%;
      border: none;
    }
  }
`
