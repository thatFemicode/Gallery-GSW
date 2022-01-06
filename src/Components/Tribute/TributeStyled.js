import styled from "styled-components";

export const TributeStyled = styled.section`
  height: 100vh;
  padding-top: 5rem;
  padding-bottom: 4rem;
  @media (min-width: ${({ theme }) => theme.auth}) {
    height: unset;
  }
  @media screen and (min-height: 100px) and (max-height: 800px) and (max-width: 1280px) {
    height: unset;
  }
  @media (max-width: ${({ theme }) => theme.mins}) {
    padding-top: 3rem;
  }
  @media (max-width: ${({ theme }) => theme.images}) {
    height: unset;
  }
  @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
    height: 80vh;
  }
  @media screen and (min-height: 900px) and (max-height: 1024px) and (max-width: 768px) {
    height: 100vh;
  }

  .video-player {
    width: 70%;
    height: 400px;
    margin: 0 auto;
    video {
      width: 100%;
      outline: none;
    }
  }
  .video-content {
    display: flex;
    justify-content: space-between;
    margin: 40px auto;
    width: 95%;
    @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
      width: 90%;
    }
    @media (max-width: ${({ theme }) => theme.mins}) {
      width: 80%;
      /* padding-top: 6rem; */
    }
    @media (max-width: ${({ theme }) => theme.mind}) {
      flex-direction: column;
      width: 95%;
    }
    @media (max-width: ${({ theme }) => theme.dont}) {
      width: 84%;
      margin-top: 4rem;
    }

    @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
      width: 80%;
    }
    .title {
      width: 50%;
      @media (max-width: ${({ theme }) => theme.mins}) {
        width: 50%;
        /* padding-top: 6rem; */
      }
      @media (max-width: ${({ theme }) => theme.mind}) {
        width: 100%;
      }

      h3 {
        font-weight: 700;
        text-transform: uppercase;
        font-size: 1.8rem;
        letter-spacing: 1.5px;
        margin: 0;
        @media (max-width: ${({ theme }) => theme.mins}) {
          font-size: 1.5rem;
          /* padding-top: 6rem; */
        }
        @media (max-width: ${({ theme }) => theme.mobil}) {
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }
        @media screen and (min-height: 100px) and (max-height: 800px) and (max-width: 1280px) {
          font-size: 1.5rem;
        }
        @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
          font-size: 1.3rem;
        }
      }
    }
    .content {
      width: 70%;
      @media (max-width: ${({ theme }) => theme.mins}) {
        width: 50%;
        /* padding-top: 6rem; */
      }
      @media (max-width: ${({ theme }) => theme.mind}) {
        width: 100%;
      }
      p {
        font-size: 1rem;
        line-height: 2rem;
        font-weight: 600;
        margin: 0;
        text-align: justify;
      }
    }
  }
  .fixed-misc {
    position: absolute;
    top: 150px;
    left: 0;
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
      top: 40%;
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
    @media (max-width: ${({ theme }) => theme.images}) {
      top: 105%;
      transform: unset;
      left: 72%;
    }
    @media (max-width: ${({ theme }) => theme.mobil}) {
      left: 60%;
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
