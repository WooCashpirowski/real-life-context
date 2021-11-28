import styled from 'styled-components'

const Nav = styled.div`
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.colors.darkBlue};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  a:first-child {
    color: white;
    font-size: 2rem;
    transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover {
      transform: translateX(-6px) scale(1.01);
      i {
        color: ${({ theme }) => theme.colors.yellow};
      }
    }
  }
  a:last-child {
    margin-top: 3px;
  }
`

export default Nav
