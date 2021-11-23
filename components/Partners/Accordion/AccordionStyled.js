import styled from 'styled-components'

export default styled.div`
  margin-top: 0.5rem;
  .accordion__section {
    display: flex;
    flex-direction: column;
    .accordion {
      border: none;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
      background: ${({ theme }) => theme.colors.blue};
      cursor: pointer;
      padding: 1rem 1.5rem;
      display: flex;
      align-items: center;
      outline: none;
      transition: all 0.5s ease;
      .accordion__title {
        font-weight: 400;
        font-size: 24px;
        margin: 0;
        font-family: ${({ theme }) => theme.fonts.main};
        color: white;
        font-size: 2rem;
        @media (max-width: 768px) {
          font-size: 1.5rem;
        }
      }
      .accordion__icon {
        margin-left: auto;
        transition: transform 0.5s ease;
        font-size: 2rem;
        &.rotate {
          transform: rotate(90deg);
          color: white;
        }
      }
    }
    .accordion__content {
      overflow: hidden;
      transition: max-height 0.6s ease;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      background: ${({ theme }) => theme.colors.blue};
      padding: 0 1.5rem;
    }
  }
`
