import styled from "styled-components";

export const FutureStyled = styled.section`
  height: 100vh;
  padding-top: 5rem;
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 1rem;
    max-width: 500px;
    line-height: 1.6;
  }
  .scroll {
    font-weight: 700;
    font-size: 0.875rem;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    position: absolute;
    color: var(--black);
    bottom: -60px;
    right: 30px;
    z-index: 1;
    width: 70px;
    @media (max-width: ${({ theme }) => theme.images}) {
      width: 50px;
      bottom: -170px;
    }
    @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
      bottom: -300px;
      width: 80px;
    }
    @media (max-width: ${({ theme }) => theme.max}) {
      width: 40px;
      bottom: -170px;
    }
  }
`;
