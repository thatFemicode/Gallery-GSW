import styled from "styled-components";

export const StoryStyled = styled.section`
  /* display: flex; */
  /* align-items: center; */
  /* background-color: var(--white); */
  position: relative;
  height: 100vh;
  /* height: 100%; */
  padding-top: 8rem;
  padding-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.kobe}) {
    padding-top: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.mind}) {
    padding-top: 1rem;
  }
  @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
    padding-top: 3rem;
  }
  @media screen and (min-height: 900px) and (max-height: 1024px) and (max-width: 768px) {
    padding-top: 3rem;
  }
  @media (max-width: ${({ theme }) => theme.image}) {
    height: unset;
    /* padding-top: 6rem; */
  }
  @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
    height: 100vh;
    padding-top: 5rem;
  }
  @media screen and (min-height: 900px) and (max-height: 1024px) and (max-width: 768px) {
    height: 100vh;
    padding-top: 6rem;
  }
  @media (min-width: ${({ theme }) => theme.auth}) {
    height: unset;
    /* padding-top: 6rem; */
  }
  .story {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: ${({ theme }) => theme.dont}) {
      flex-direction: column;
    }
    @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
      flex-direction: column;
    }
    &-img {
      width: 45%;
      margin: 0 auto;
      height: 620px;
      position: relative;
      transition: all 0.1s ease-in-out;
      @media (max-width: ${({ theme }) => theme.mins}) {
        height: 500px;
      }
      @media screen and (min-height: 300px) and (max-height: 800px) and (max-width: 1280px) {
        height: 500px;
      }
      @media (max-width: ${({ theme }) => theme.mind}) {
        height: 460px;
      }
      @media (max-width: ${({ theme }) => theme.kobe}) {
        /* width: 40%; */
        /* top: 30px; */
      }
      @media (max-width: ${({ theme }) => theme.dont}) {
        width: 60%;
        height: 420px;
        margin: 0 auto;
      }
      @media (max-width: ${({ theme }) => theme.text}) {
        height: 450px;
        width: 60%;
      }
      @media (max-width: ${({ theme }) => theme.desktop}) {
        height: 420px;
        width: 55%;
      }
      @media (max-width: ${({ theme }) => theme.images}) {
        height: 440px;
        width: 60%;
      }
      @media (max-width: ${({ theme }) => theme.blogNav}) {
        height: 350px;
      }
      @media (max-width: ${({ theme }) => theme.min}) {
        width: 70%;
      }
      @media (max-width: ${({ theme }) => theme.max}) {
        width: 80%;
      }
      @media (max-width: ${({ theme }) => theme.adapt}) {
        width: 70%;
      }

      @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
        height: 500px;
      }
      @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
        width: 80%;
        height: 600px;
      }
      @media screen and (min-height: 900px) and (max-height: 1024px) and (max-width: 768px) {
        height: 400px;
        width: 60%;
      }
      z-index: 7;
      .top-right {
        position: absolute;
        width: 280px;
        top: 0;
        left: 0;
        z-index: 4;
        @media (max-width: ${({ theme }) => theme.mins}) {
          width: 220px;
          /* top: 30px; */
        }
        @media (max-width: ${({ theme }) => theme.kobe}) {
          width: 220px;
        }
        @media screen and (min-height: 100px) and (max-height: 800px) and (max-width: 1280px) {
          width: 230px;
        }
        @media (max-width: ${({ theme }) => theme.mind}) {
          width: 200px;
        }
        @media (max-width: ${({ theme }) => theme.dont}) {
          width: 190px;
        }
        @media (max-width: ${({ theme }) => theme.text}) {
          width: 210px;
        }
        @media (max-width: ${({ theme }) => theme.desktop}) {
          width: 170px;
        }
        @media (max-width: ${({ theme }) => theme.blogNav}) {
          width: 150px;
        }
        @media (max-width: ${({ theme }) => theme.adapt}) {
          width: 120px;
        }
        @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
          width: 350px;
        }
        @media screen and (min-height: 900px) and (max-height: 1024px) and (max-width: 768px) {
          width: 210px;
        }
        @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
          width: 200px;
        }
      }
      .bottom-left {
        position: absolute;
        width: 280px;
        right: 0;
        bottom: 0;
        @media (max-width: ${({ theme }) => theme.mins}) {
          width: 220px;

          /* top: 30px; */
        }
        @media (max-width: ${({ theme }) => theme.kobe}) {
          width: 220px;
          /* top: 30px; */
          /* bottom: 100px; */
        }
        @media screen and (min-height: 100px) and (max-height: 800px) and (max-width: 1280px) {
          width: 230px;
        }
        @media (max-width: ${({ theme }) => theme.mind}) {
          width: 200px;

          /* bottom: 140px; */
        }
        @media (max-width: ${({ theme }) => theme.dont}) {
          width: 190px;
          right: 0;
          bottom: 90px;
        }

        @media (max-width: ${({ theme }) => theme.desktop}) {
          width: 170px;
        }
        @media (max-width: ${({ theme }) => theme.blogNav}) {
          width: 150px;
        }
        @media (max-width: ${({ theme }) => theme.adapt}) {
          width: 120px;
        }
        @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
          width: 350px;
        }
        @media screen and (min-height: 900px) and (max-height: 1024px) and (max-width: 768px) {
          width: 210px;
        }
        @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
          width: 200px;
          bottom: 100px;
        }
      }
      .side-image {
        width: 170px;
        position: absolute;
        left: 120px;

        /* &.bottom {
          bottom: -20px;
          height: 100px;
        } */
      }
      /* .main-image {
        width: 180px;
        position: absolute;
        right: 0;
        top: 60%;
        transform: translateY(-50%);
      } */
    }
    &-text {
      width: 45%;
      align-self: center;
      @media (max-width: ${({ theme }) => theme.kobe}) {
        /* width: 55%; */
        /* top: 30px; */
      }
      @media (max-width: ${({ theme }) => theme.dont}) {
        width: 80%;
        margin: 0 auto;
        margin-top: -3rem;
      }
      @media (max-width: ${({ theme }) => theme.text}) {
        width: 80%;
      }
      @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
        width: 80%;
        margin-top: 2rem;
      }
      h3 {
        font-weight: 700;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        font-size: 1.8rem;
        @media (max-width: ${({ theme }) => theme.blogNav}) {
          font-size: 1.5rem;
        }
      }
      p {
        font-weight: 600;
        font-size: 1rem;
        line-height: 2rem;
        margin: 40px 0 72px;
        text-align: justify;
        max-width: 500px;
        @media (max-width: ${({ theme }) => theme.kobe}) {
          max-width: 400px;
        }
        @media (max-width: ${({ theme }) => theme.dont}) {
          max-width: 700px;
          margin: 0 auto;
        }
        @media (max-width: ${({ theme }) => theme.blogNav}) {
          font-size: 0.85rem;
          line-height: 1.7rem;
        }
        @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
          max-width: 800px;
        }
        @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
          font-size: 0.75rem;
          max-width: 400px;
          line-height: 1.7rem;
        }
      }
    }
  }
  .fixed-misc {
    position: absolute;
    top: 70%;
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
    @media (max-width: ${({ theme }) => theme.image}) {
      top: 50%;
    }
    @media (max-width: ${({ theme }) => theme.blogNav}) {
      font-size: 0.75rem;
    }
    @media (max-width: ${({ theme }) => theme.max}) {
      font-size: 0.75rem;
      letter-spacing: 5px;
      left: -40px;
    }
    @media screen and (min-height: 900px) and (max-height: 1024px) and (max-width: 768px) {
      top: 120%;
      transform: unset;
      left: 560px;
    }
    @media (max-width: ${({ theme }) => theme.make}) {
      top: 60%;
    }
    @media (max-width: ${({ theme }) => theme.adapt}) {
      top: 25%;
      font-size: 0.65rem;
    }
    @media screen and (min-height: 900px) and (max-height: 1024px) and (max-width: 768px) {
      top: 85vh;
    }
    svg {
      @media (max-width: ${({ theme }) => theme.max}) {
        width: 20px;
      }
      @media (max-width: ${({ theme }) => theme.adapt}) {
        width: 15px;
      }
    }
  }
`;
