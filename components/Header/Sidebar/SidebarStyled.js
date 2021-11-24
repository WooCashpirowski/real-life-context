import styled from 'styled-components'

export default styled.div`
  position: fixed;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  background: ${({ theme }) => theme.colors.darkBlue};
  height: 100vh;
  width: 100vw;
  transition: all 0.8s cubic-bezier(0.6, 0.04, 0.98, 0.335);
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &.expanded {
    transform: translateX(0);
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: aliceblue;
    li {
      font-size: 3rem;
      margin: 1rem 0;
    }
  }
`
