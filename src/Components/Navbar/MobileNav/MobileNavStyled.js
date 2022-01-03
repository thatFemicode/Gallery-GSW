import styled from "styled-components";
export const MobileNavStyled = styled.nav`
  position: fixed;
  top: 10%;
  /* left: 0; */
  width: 100%;
  height: 80vh;
  display: grid;
  margin: 0 auto;
  place-items: center;
  /* visibility: hidden; */
  z-index: 10;
  transition: var(--transition);

  /* transform: scale(0); */
  /* background: rgba(0, 0, 0, 0.5); */

  .sidebar {
    width: 90vw;
    height: 80vh;
    max-width: var(--fixed-width);
    background: var(--white);
    border-radius: 0.4rem;
    box-shadow: var(--dark-shadow);
    position: relative;
    padding: 4rem 2rem;
    @media screen and (min-height: 100px) and (max-height: 667px) and (max-width: 375px) {
      height: 100vh;
    }
    .channels {
      margin-bottom: 1rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid rgba(207, 215, 223, 0.25);

      li {
        display: flex;
        padding-top: 1rem;
        align-items: center;
      }
    }
    .teams {
      width: 100%;
      margin-bottom: 1rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid rgba(207, 215, 223, 0.25);
      p {
        margin-bottom: 1.4rem;
      }
      .teams-img {
        padding-left: 2rem;
        padding-right: 2rem;
        /* height: 30vh; */
        /* width: 90%; */
        /* margin: 0 auto; */
        /* overflow: scroll; */
        display: grid;
        gap: 4rem;
        grid-template-columns: repeat(30, minmax(0px, 1fr));
      }
    }
    .players {
      ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;
