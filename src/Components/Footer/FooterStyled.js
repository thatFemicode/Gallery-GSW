import styled from "styled-components";

export const FooterStyled = styled.footer`
  /* height: 37vh; */
  background-color: #1d428a;
  padding-top: 2rem;
  padding-bottom: 2rem;
  .footer {
    display: grid;
    grid-template-columns: 2fr 1fr;

    @media (max-width: ${({ theme }) => theme.team}) {
      width: 90%;
      margin: 0 auto;
    }
    @media (max-width: ${({ theme }) => theme.mind}) {
      /* width: 100%; */
      margin: 0 auto;
    }
    @media (max-width: ${({ theme }) => theme.images}) {
      grid-template-columns: 1fr;
    }

    @media screen and (min-height: 1100px) and (max-height: 1593px) and (max-width: 1440px) {
      width: 90%;
    }
    @media screen and (min-height: 100px) and (max-height: 800px) and (max-width: 1280px) {
      width: 90%;
      margin: 0 auto;
    }
    /* place-items: center; */
    &-left {
      display: flex;
      align-items: center;
      /* justify-content:space-between; */
      img {
        width: 350px;
        @media (max-width: ${({ theme }) => theme.minss}) {
          width: 300px;
          /* margin: 0 auto; */
        }
        @media (max-width: ${({ theme }) => theme.mind}) {
          width: 220px;
          /* margin: 0 auto; */
        }

        @media screen and (min-height: 1100px) and (max-height: 1593px) and (max-width: 1440px) {
          width: 300px;
        }
        @media (max-width: ${({ theme }) => theme.balls}) {
          width: 200px;
        }
        @media screen and (min-height: 1100px) and (max-height: 1366px) and (max-width: 1024px) {
          width: 250px;
        }
        @media screen and (min-height: 100px) and (max-height: 800px) and (max-width: 1280px) {
          width: 250px;
        }
        @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
          width: 230px;
        }
        @media (max-width: ${({ theme }) => theme.images}) {
          width: 190px;
          /* display: none; */
        }
        @media screen and (min-height: 100px) and (max-height: 720px) and (max-width: 540px) {
          width: 180px;
        }
        @media (max-width: ${({ theme }) => theme.mobil}) {
          width: 130px;
          /* display: none; */
        }
        /* mix-blend-mode: darken; */
      }
      &-text {
        p {
          font-size: 4rem;
          color: #fff;
          @media (max-width: ${({ theme }) => theme.minss}) {
            font-size: 3rem;
            /* margin: 0 auto; */
          }
          @media (max-width: ${({ theme }) => theme.mind}) {
            font-size: 2.5rem;
            /* margin: 0 auto; */
          }
          /* @media (max-width: ${({ theme }) => theme.balls}) {
            font-size: 2rem;
          } */

          @media screen and (min-height: 1100px) and (max-height: 1593px) and (max-width: 1440px) {
            font-size: 3.5rem;
          }
          @media (max-width: ${({ theme }) => theme.balls}) {
            font-size: 2.5rem;
          }
          @media screen and (min-height: 1100px) and (max-height: 1366px) and (max-width: 1024px) {
            font-size: 2.5rem;
          }
          @media screen and (min-height: 100px) and (max-height: 800px) and (max-width: 1280px) {
            font-size: 2.6rem;
          }
          @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
            font-size: 2rem;
          }
          @media (max-width: ${({ theme }) => theme.desktop}) {
            font-size: 1.7rem;
          }
          @media (max-width: ${({ theme }) => theme.images}) {
            font-size: 1.5rem;
            /* display: none; */
          }
          @media screen and (min-height: 100px) and (max-height: 720px) and (max-width: 540px) {
            font-size: 1.4rem;
          }
          @media (max-width: ${({ theme }) => theme.mobil}) {
            font-size: 1.2rem;
            /* display: none; */
          }
          span {
            color: #fff;
          }

          .state {
            padding-left: 6rem;
            @media (max-width: ${({ theme }) => theme.minss}) {
              padding-left: 4rem;

              /* margin: 0 auto; */
            }
            @media (max-width: ${({ theme }) => theme.mind}) {
              padding-left: 3rem;
              /* margin: 0 auto; */
            }
            @media (max-width: ${({ theme }) => theme.desktop}) {
              padding-left: 2rem;
            }
            @media screen and (min-height: 100px) and (max-height: 800px) and (max-width: 1280px) {
              padding-left: 4rem;
            }
            @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
              padding-left: 2.5rem;
            }
            @media screen and (min-height: 100px) and (max-height: 720px) and (max-width: 540px) {
              padding-left: 1.8rem;
            }
            @media (max-width: ${({ theme }) => theme.mobil}) {
              padding-left: 1.4rem;
              /* display: none; */
            }
          }
          .warriors {
            padding-left: 12rem;
            @media (max-width: ${({ theme }) => theme.minss}) {
              padding-left: 8rem;

              /* margin: 0 auto; */
            }
            @media (max-width: ${({ theme }) => theme.mind}) {
              padding-left: 7rem;
              /* margin: 0 auto; */
            }
            @media (max-width: ${({ theme }) => theme.desktop}) {
              padding-left: 4.5rem;
            }
            @media screen and (min-height: 100px) and (max-height: 800px) and (max-width: 1280px) {
              padding-left: 8rem;
            }
            @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
              padding-left: 4.5rem;
            }
            @media screen and (min-height: 100px) and (max-height: 720px) and (max-width: 540px) {
              padding-left: 3.5rem;
            }
            @media (max-width: ${({ theme }) => theme.mobil}) {
              padding-left: 2.3rem;
              /* display: none; */
            }
          }
        }
      }
    }
    &-right {
      position: relative;
      padding-top: 1rem;
      @media screen and (min-height: 1100px) and (max-height: 1593px) and (max-width: 1440px) {
        width: 80%;
        margin: 0 auto;
      }

      &-img {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        @media (max-width: ${({ theme }) => theme.images}) {
          width: 50%;
          margin: 0 auto;
          margin-top: 1rem;
          /* display: none; */
        }
        img {
          width: 200px;

          @media (max-width: ${({ theme }) => theme.minss}) {
            width: 150px;

            /* margin: 0 auto; */
          }
          @media (max-width: ${({ theme }) => theme.mind}) {
            width: 130px;
            /* margin: 0 auto; */
          }

          @media screen and (min-height: 1100px) and (max-height: 1593px) and (max-width: 1440px) {
            width: 150px;
          }
          @media (max-width: ${({ theme }) => theme.balls}) {
            width: 80px;
          }
          @media screen and (min-height: 1100px) and (max-height: 1366px) and (max-width: 1024px) {
            width: 100px;
          }
          @media screen and (min-height: 100px) and (max-height: 800px) and (max-width: 1280px) {
            width: 150px;
          }
          @media screen and (min-height: 100px) and (max-height: 750px) and (max-width: 1024px) {
            width: 120px;
          }
          @media (max-width: ${({ theme }) => theme.desktop}) {
            max-width: 90px;
          }
          @media (max-width: ${({ theme }) => theme.mobil}) {
            width: 80px;
            /* display: none; */
          }
          @media (max-width: ${({ theme }) => theme.foot}) {
            width: 60px;
            /* display: none; */
          }
        }
      }
      &-text {
        display: flex;
        align-items: center;
        position: absolute;
        right: 0;
        bottom: 0;
        color: #fff;
        font-size: 3rem;
        @media (max-width: ${({ theme }) => theme.minss}) {
          font-size: 2rem;

          /* margin: 0 auto; */
        }
        @media (max-width: ${({ theme }) => theme.mind}) {
          font-size: 1.8rem;
          /* margin: 0 auto; */
        }

        @media screen and (min-height: 1100px) and (max-height: 1593px) and (max-width: 1440px) {
          font-size: 2.5rem;
          /* right: 140px; */
        }
        @media (max-width: ${({ theme }) => theme.balls}) {
          font-size: 1.6rem;
        }
        @media screen and (min-height: 1100px) and (max-height: 1366px) and (max-width: 1024px) {
          font-size: 2rem;
        }
        @media screen and (min-height: 100px) and (max-height: 800px) and (max-width: 1280px) {
          font-size: 2.5rem;
        }
        @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
          font-size: 2rem;
        }
        @media (max-width: ${({ theme }) => theme.desktop}) {
          font-size: 1.5rem;
        }
        @media (max-width: ${({ theme }) => theme.images}) {
          transform: rotate(-90deg);
          bottom: 120px;
          font-size: 0.875rem;
          /* display: none; */
        }
        @media (max-width: ${({ theme }) => theme.mobil}) {
          bottom: 100px;
          font-size: 0.775rem;
          /* display: none; */
        }
        svg {
          stroke: #fff;
        }
      }
    }
  }
`;
