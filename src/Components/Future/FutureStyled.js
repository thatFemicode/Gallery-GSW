import styled from "styled-components";

export const FutureStyled = styled.section`
  height: 100vh;
  padding-top: 5rem;
  overflow: hidden;
  .future {
    @media (max-width: ${({ theme }) => theme.minss}) {
      width: 90%;
      margin: 0 auto;
    }
    @media (max-width: ${({ theme }) => theme.image}) {
      width: 83%;
      margin: 0 auto;
    }

    @media (max-width: ${({ theme }) => theme.blogNav}) {
      width: 80%;
    }

    @media screen and (min-height: 900px) and (max-height: 1024px) and (max-width: 768px) {
      width: 80%;
    }
  }
  @media screen and (min-height: 1100px) and (max-height: 1593px) and (max-width: 1440px) {
    height: 50vh;
    padding-top: 6rem;
  }
  @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
    height: 100vh;
    padding-top: 0;
  }

  @media screen and (min-height: 900px) and (max-height: 1024px) and (max-width: 768px) {
    height: 100vh;
  }
  @media (min-width: ${({ theme }) => theme.auth}) {
    height: unset;
    /* padding-top: 6rem; */
  }
  h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
    font-weight: 700;
    @media (max-width: ${({ theme }) => theme.image}) {
      font-size: 2.5rem;
    }
    @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
      font-size: 2rem;
    }
    @media (max-width: ${({ theme }) => theme.blogNav}) {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1rem;
    max-width: 500px;
    line-height: 2rem;
    position: relative;
    font-weight: 400;
    z-index: 10;
    margin-bottom: 2rem;
    @media (max-width: ${({ theme }) => theme.image}) {
      font-size: 0.975rem;
    }
    @media (max-width: ${({ theme }) => theme.make}) {
      margin-bottom: 4rem;
    }
    @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
      font-size: 0.875rem;
    }
    @media screen and (min-height: 900px) and (max-height: 1024px) and (max-width: 768px) {
      margin-bottom: 5rem;
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
    @media (max-width: ${({ theme }) => theme.image}) {
      bottom: -180px;
    }
    @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
      bottom: -300px;
      width: 80px;
    }
    @media screen and (min-height: 900px) and (max-height: 1024px) and (max-width: 768px) {
      bottom: -350px;
      width: 60px;
      right: 80px;
    }
    @media (max-width: ${({ theme }) => theme.max}) {
      width: 40px;
      bottom: -170px;
    }
    @media (max-width: ${({ theme }) => theme.make}) {
      bottom: -90px;
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

    @media (max-width: ${({ theme }) => theme.image}) {
      font-size: 0.675rem;
      /* bottom: -500px; */
      top: 600px;
      left: 80px;
      transform: unset;
      z-index: unset;
    }
    @media (max-width: ${({ theme }) => theme.make}) {
      top: 600px;
      left: 40px;
    }
    @media (max-width: ${({ theme }) => theme.mobil}) {
      left: 35px;
    }
    @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
      font-size: 0.675rem;
    }
    svg {
      @media (max-width: ${({ theme }) => theme.max}) {
        width: 20px;
      }
      @media (max-width: ${({ theme }) => theme.image}) {
        width: 15px;
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
