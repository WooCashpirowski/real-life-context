import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  footer {
    padding: 0.5rem 3rem;
    .iconWrapper {
      border: none;
    }
  }
`
export const MediaWrapper = styled.div`
  min-height: calc(100vh - 60px);
  background: linear-gradient(
    15deg,
    rgba(36, 153, 256, 0.65) 0%,
    rgba(182, 182, 182, 0) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .lessonHeading {
    width: 100%;
    text-align: center;
    background: ${({ theme }) => theme.colors.blue};
    color: white;
    padding: 0.75rem;
    font-size: 2.2rem;
    text-transform: uppercase;
  }
`
