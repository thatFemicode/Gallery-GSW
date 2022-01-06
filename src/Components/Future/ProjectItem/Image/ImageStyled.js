import styled from "styled-components";

export const ImageStyled = styled.div`
  /* width: 20%; */
  img {
    /* opacity: 0; */
    z-index: -1;
    position: absolute;
    right: 200px;
    width: auto;
    /* height: 300px; */
    /* object-fit: cover; */
    top: 20vh;
    pointer-events: none;
    // This is to add timing function for  mouse image parallax
    transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1);

    @media (max-width: ${({ theme }) => theme.mins}) {
      width: 270px;
      top: 35vh;
    }
    @media (max-width: ${({ theme }) => theme.image}) {
      width: 200px;
      top: 40vh;
    }
    @media screen and (min-height: 100px) and (max-height: 600px) and (max-width: 1024px) {
      width: 250px;
      top: 30vh;
    }
  }
`;
