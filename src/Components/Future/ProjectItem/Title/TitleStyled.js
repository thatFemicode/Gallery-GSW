import styled from "styled-components";

export const TitleStyled = styled.div`
  position: relative;
  .menu-title {
    /* font-family: "Space Grotesk", sans-serif; */
    font-size: 5vw;
    text-transform: lowercase;
    z-index: 1;
    line-height: 1.1;

    &.clone {
      position: absolute;
      top: 0;
      pointer-events: none;
      color: black;
      /* clip-path: inset(0 100% 0 0); */
      transition: all 0.04s cubic-bezier(0.77, 0, 0.175, 1);
    }

    &:not(.clone) {
      -webkit-text-stroke: 1px rgba(0, 0, 0, 0.25);

      color: transparent;

      &:hover {
        cursor: pointer;

        ~ .clone {
          /* clip-path: inset(0 0 0 0); */
          clip-path: inset(0 100% 0 0);
          z-index: 20;
        }
        ~ .menu-image-container .menu-image {
          opacity: 1;
          transform: scale(1.1);
          filter: blur(0) brightness(1);
        }
      }
    }
  }
`;
