import styled from 'styled-components'

const Navbar = styled.header`
  position: fixed;
  z-index: 100;
  width: 100vw;
  div:first-child {
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    background: ${({ theme }) => theme.colors.darkBlue};
    text-transform: uppercase;
    font-family: 'Amatic SC', cursive;
    transition: all 0.5s ease;
    nav {
      ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        li {
          padding: 1rem;
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all 0.5s ease;
          &:hover {
            color: ${({ theme }) => theme.colors.yellow};
          }
        }
      }
    }
    .logo {
      position: absolute;
      transform: translateX(-50%);
      left: 50%;
      top: 0.5rem;
      cursor: pointer;
      width: 100px;
      height: 82px;
      transition: all 0.5s ease;
    }
  }
  &.shrink {
    div:first-child {
      background: rgba(255, 255, 255, 0.9);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      nav {
        ul {
          li {
            padding: 0.25rem 1rem;
            color: ${({ theme }) => theme.colors.darkBlue};
            &:hover {
              color: ${({ theme }) => theme.colors.yellow};
            }
          }
        }
      }
      .logo {
        width: 60px;
        height: 49px;
        top: 0.25rem;
      }
      div[class*='Switcher'] {
        padding: 0.25rem 0.5rem;
      }
    }
  }
`

export default Navbar
