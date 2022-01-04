import styled from "styled-components";

export const ImageStyled = styled.div`
  width: 20%;
  img {
    opacity: 0;
    /* position: absolute; */
    /* left: 45vw; */
    width: auto;
    height: 450px;
    /* object-fit: cover; */
    /* top: 30vh; */
    pointer-events: none;
    // This is to add timing function for  mouse image parallax
    transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
`;
