import styled from "styled-components";

export const HeroStyled = styled.section`
  display: flex;
  align-items: center;
  background-color: var(--white);
  position: relative;
  /* height: 100vh; */
  padding-top: 10rem;
  @media (max-width: ${({ theme }) => theme.kobe}) {
    height: 100vh;
    padding-top: 2rem;
  }
  @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
    height: unset;
    padding-top: 10rem;
  }
  @media (max-width: ${({ theme }) => theme.make}) {
    padding-top: 4rem;
  }
  .row {
    position: relative;
    .main-text {
      /* font-size: 5.8rem; */
      font-size: 3.4rem;
      text-transform: uppercase;
      font-weight: 700;
      /* letter-spacing: 42px; */
      letter-spacing: 25px;
      color: var(--white);
      position: absolute;
      width: 100%;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      text-align: center;
      z-index: 9;
      mix-blend-mode: difference;
      @media (max-width: ${({ theme }) => theme.mins}) {
        font-size: 2.8rem;
        letter-spacing: 20px;
      }
      @media (max-width: ${({ theme }) => theme.mind}) {
        font-size: 2rem;
        letter-spacing: 20px;
      }
      @media (max-width: ${({ theme }) => theme.kobe}) {
        font-size: 1.4rem;
        letter-spacing: 15px;
      }
      @media (max-width: ${({ theme }) => theme.desktop}) {
        letter-spacing: 10px;
      }
      @media (max-width: ${({ theme }) => theme.make}) {
        letter-spacing: 5px;
      }
      @media (max-width: ${({ theme }) => theme.max}) {
        letter-spacing: 2px;
        font-size: 1.4rem;
        top: 0;

        /* right: -40px; */

        /* transform: ; */
        transform: rotate(-90deg) translateY(120px);
      }
      @media (max-width: ${({ theme }) => theme.foot}) {
        font-size: 1rem;
        top: 0;

        /* right: -40px; */

        /* transform: ; */
        transform: rotate(-90deg) translateY(120px);
      }
    }
    .main-image {
      width: 320px;
      margin: 0 auto;
      /* position: relative; */

      /* @media screen and (min-height: 100px) and (max-height: 800px) and (max-width: 1280px) {
        width: 230px;
      } */
      @media (max-width: ${({ theme }) => theme.mins}) {
        width: 290px;
        /* top: 30px; */
      }
      @media (max-width: ${({ theme }) => theme.kobe}) {
        width: 240px;
      }
      @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
        width: 200px;
      }
      @media (max-width: ${({ theme }) => theme.hero}) {
        width: 220px;
      }
      @media (max-width: ${({ theme }) => theme.desktop}) {
        width: 180px;
      }
      @media (max-width: ${({ theme }) => theme.images}) {
        width: 160px;
      }
      @media (max-width: ${({ theme }) => theme.make}) {
        width: 120px;
      }
      @media (max-width: ${({ theme }) => theme.foot}) {
        width: 120px;
      }
    }
    .side-image {
      width: 190px;
      position: absolute;

      @media screen and (min-height: 600px) and (max-height: 800px) and (max-width: 1281px) {
        width: 180px;
      }
      @media (max-width: ${({ theme }) => theme.mins}) {
        width: 160px;
      }
      @media (max-width: ${({ theme }) => theme.kobe}) {
        width: 120px;
      }
      @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
        width: 120px;
      }
      @media (max-width: ${({ theme }) => theme.hero}) {
        width: 120px;
      }
      @media (max-width: ${({ theme }) => theme.desktop}) {
        width: 100px;
      }
      @media (max-width: ${({ theme }) => theme.images}) {
        width: 90px;
      }
      @media (max-width: ${({ theme }) => theme.make}) {
        width: 90px;
      }
      @media (max-width: ${({ theme }) => theme.foot}) {
        width: 80px;
      }
      &.left {
        left: 128px;
        top: 12px;
        @media (max-width: ${({ theme }) => theme.kobe}) {
          left: 80px;
          top: 0;
        }
        @media (max-width: ${({ theme }) => theme.hero}) {
          top: -80px;
        }
        @media screen and (min-height: 900px) and (max-height: 1024px) and (max-width: 768px) {
          top: 0;
        }
        @media (max-width: ${({ theme }) => theme.make}) {
          top: -100px;
          left: 40px;
        }
        @media (max-width: ${({ theme }) => theme.max}) {
          top: -160px;
          left: 20px;
        }
      }
      &.right {
        right: 128px;
        bottom: 12px;
        @media (max-width: ${({ theme }) => theme.kobe}) {
          right: 80px;
          bottom: 0;
        }
        @media (max-width: ${({ theme }) => theme.hero}) {
          bottom: -80px;
        }
        @media screen and (min-height: 900px) and (max-height: 1024px) and (max-width: 768px) {
          bottom: 0;
        }
        @media (max-width: ${({ theme }) => theme.make}) {
          bottom: -100px;
          right: 40px;
        }
        @media (max-width: ${({ theme }) => theme.max}) {
          bottom: -160px;
          right: 20px;
        }
      }
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
    bottom: -10px;
    left: 10px;
    z-index: 1;
    width: 50px;
    @media (max-width: ${({ theme }) => theme.images}) {
      width: 50px;
      bottom: -170px;
    }
    @media (max-width: ${({ theme }) => theme.max}) {
      width: 40px;
      bottom: -170px;
    }
  }
  .fixed-misc {
    position: absolute;
    top: 50%;
    left: -20px;
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
    @media (max-width: ${({ theme }) => theme.max}) {
      font-size: 0.75rem;
      letter-spacing: 5px;
      left: -40px;
    }
    @media (max-width: ${({ theme }) => theme.make}) {
      top: 60%;
    }
    svg {
      @media (max-width: ${({ theme }) => theme.max}) {
        width: 20px;
      }
    }
  }
`;
