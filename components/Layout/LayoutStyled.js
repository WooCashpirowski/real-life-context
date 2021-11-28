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
    180deg,
    rgba(40, 59, 108, 0.65) 0%,
    rgba(182, 182, 182, 0) 100%
  );
  padding: 4rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`
