import styled from "styled-components";

export const ImageStyled = styled.div`
  /* width: 20%; */
  img {
    opacity: 0;
    z-index: -1;
    position: absolute;
    right: 200px;
    width: auto;
    /* height: 300px; */
    /* object-fit: cover; */
    top: 20vh;
    /* pointer-events: none; */
    // This is to add timing function for  mouse image parallax
    transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1);

    @media (max-width: ${({ theme }) => theme.mins}) {
      width: 270px;
      top: 35vh;
    }
    @media (max-width: ${({ theme }) => theme.image}) {
      width: 230px;
      top: 40vh;
      right: 120px;
    }
    @media (max-width: ${({ theme }) => theme.desktop}) {
      right: 150px;
    }
    @media (max-width: ${({ theme }) => theme.blogNav}) {
      right: 60px;
      width: 180px;
    }
    @media (max-width: ${({ theme }) => theme.make}) {
      width: 150px;
    }
    @media (max-width: ${({ theme }) => theme.mobil}) {
      width: 100px;
      top: 50vh;
    }
    @media screen and (min-height: 1000px) and (max-height: 1366px) and (max-width: 1024px) {
      width: 270px;
      top: 25vh;
      right: 150px;
    }

    @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
      width: 250px;
      top: 30vh;
    }
    @media screen and (min-height: 900px) and (max-height: 1024px) and (max-width: 768px) {
      width: auto;
      height: clamp(400px, 20vw, 20vw);
      top: 32vh;
    }
    @media (min-width: ${({ theme }) => theme.auth}) {
      right: -30px;
      width: 300px;
    }
  }
`;
