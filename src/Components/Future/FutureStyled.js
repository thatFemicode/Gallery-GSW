import styled from "styled-components";

export const FutureStyled = styled.section`
  height: 100vh;
  padding-top: 5rem;
  .future {
    @media (max-width: ${({ theme }) => theme.minss}) {
      width: 90%;
      margin: 0 auto;
    }
    @media (max-width: ${({ theme }) => theme.image}) {
      width: 90%;
      margin: 0 auto;
    }
  }

  @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
    height: 60vh;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
    @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1rem;
    max-width: 500px;
    line-height: 1.6;
    position: relative;
    font-weight: 400;
    z-index: 10;
    margin-bottom: 2rem;

    @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
      font-size: 0.875rem;
    }
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
    @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
      bottom: 0;
    }
  }
  .fixed-misc {
    position: absolute;
    top: 20%;
    right: -20px;
    transform: rotate(-90deg);
    display: flex;
    align-items: center;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 0.875rem;
    letter-spacing: 1.5px;
    color: var(--black);
    /* mix-blend-mode: difference; */
    z-index: 8;
    @media (max-width: ${({ theme }) => theme.minss}) {
      right: 70px;
    }
    @media (max-width: ${({ theme }) => theme.mins}) {
      right: 50px;
    }
    @media (max-width: ${({ theme }) => theme.max}) {
      font-size: 0.75rem;
      letter-spacing: 5px;
      left: -40px;
    }
    @media (max-width: ${({ theme }) => theme.make}) {
      top: 60%;
    }
    @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
      font-size: 0.675rem;
    }
    svg {
      @media (max-width: ${({ theme }) => theme.max}) {
        width: 20px;
      }
      @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
        width: 15px;
      }
    }
  }
`;
// export const ModalComponentStyled = styled.div`
//   .button {
//     background: blue;
//   }
// `;
