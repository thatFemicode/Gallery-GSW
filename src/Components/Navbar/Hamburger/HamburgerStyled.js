import styled from "styled-components";

export const HamburgerStyled = styled.div`
  display: none;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  height: 100%;
  width: 100%;

  .menu-secondary-background-color {
    background: #1d428a;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: -1;
  }
  .menu-layer {
    position: relative;
    background: #fff;
    height: 100%;
    overflow: hidden;
    z-index: 90;

    .wrapper {
      position: relative;
      padding-left: 2rem;
      padding-right: 2rem;
    }
    .menu-links {
      display: flex;
      justify-content: space-between;
      /* align-items: center; */
      position: relative;
      width: 90%;
      margin: 0 auto;
      top: 200px;
      .img {
        position: relative;
        img {
          position: relative;
          width: 600px;
          bottom: 220px;
          /* height: clamp(400px, 70vw, 80vw); */
        }
      }
      nav {
        display: block;
        ul {
          margin: 0;
          padding: 0;
          li {
            list-style: none;
            font-size: 6rem;
            font-weight: 700;
            cursor: pointer;
            height: 135px;
            overflow: hidden;
            position: relative;
            width: 700px;
            a {
              position: absolute;
              color: #fff;
              mix-blend-mode: difference;
              text-decoration: none;
              transition: all 0.5s ease-in-out;

              &:hover {
                color: #000;
              }
            }
          }
        }
      }
      .info {
        .main {
          /* display: flex; */
          justify-content: space-between;
          align-items: center;
          margin-right: 3rem;
          .coaches {
            margin-bottom: 1rem;
            &-text {
              margin-bottom: 1rem;
              font-size: 1rem;
            }
          }
        }
        p {
          font-size: 0.8rem;
        }
      }
    }
  }
`;
export const Heading = styled.h3`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 0;

  margin-bottom: ${(props) => (props.noMarginBottom ? 0 : "1rem")};
  /* color: ${({ color }) => (color ? `var(--${color})` : "var(--blue)")}; */
`;
export const Flex = styled.div`
  margin-top: 3rem;
  display: flex;
  > div:first-of-type {
    margin-right: 48px;
  }
  .teams-img {
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(3, minmax(0px, 1fr));
  }
`;
export const FlexD = styled.div`
  display: flex;
  > div:first-of-type {
    margin-right: 48px;
  }
  .teams-img {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(7, minmax(0px, 1fr));
  }
`;
export const FlexS = styled.div`
  display: flex;
  > div:first-of-type {
    margin-right: 48px;
  }
  .teams-img {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(6, minmax(0px, 1fr));
  }
`;
