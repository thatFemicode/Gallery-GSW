import styled from "styled-components";

export const StoryStyled = styled.section`
  /* display: flex; */
  /* align-items: center; */
  /* background-color: var(--white); */
  position: relative;
  height: 100vh;
  /* height: 100%; */
  padding-top: 5rem;
  @media (max-width: ${({ theme }) => theme.image}) {
    height: unset;
  }
  .story {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: ${({ theme }) => theme.image}) {
      flex-direction: column;
    }
    &-img {
      width: 50%;
      height: 640px;
      position: relative;
      @media (max-width: ${({ theme }) => theme.kobe}) {
        width: 40%;
        /* top: 30px; */
      }
      @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
        height: 600px;
      }

      z-index: 7;
      .top-right {
        position: absolute;
        width: 320px;
        top: 0;
        left: 0;
        z-index: 4;
        @media (max-width: ${({ theme }) => theme.mins}) {
          width: 260px;
          /* top: 30px; */
        }

        @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
          width: 200px;
        }
      }
      .bottom-left {
        position: absolute;
        width: 320px;
        right: 0;
        bottom: 0;
        @media (max-width: ${({ theme }) => theme.mins}) {
          width: 260px;
          /* top: 30px; */
        }
        @media (max-width: ${({ theme }) => theme.kobe}) {
          /* width: 200px; */
          /* top: 30px; */
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
        width: 55%;
        /* top: 30px; */
      }
      h3 {
        font-weight: 700;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        font-size: 1.8rem;
      }
      p {
        font-weight: 600;
        font-size: 1rem;
        line-height: 2rem;
        margin: 40px 0 72px;
        text-align: justify;
        max-width: 500px;
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
