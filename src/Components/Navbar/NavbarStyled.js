import styled from "styled-components";

export const NavbarStyled = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  /* background: transparent; */
  width: 100%;
  z-index: 10;
  .navigation {
    position: relative;
    /* background: transparent; */

    /* width: 100%; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    /* @media (max-width: ${({ theme }) => theme.desktop}) {
      padding: 0 2rem;
    } */
    .logo {
      @media (max-width: ${({ theme }) => theme.images}) {
        width: 55px;
      }
    }
    .mid-nav {
      transition: all 0.2s ease-in-out;
      @media (max-width: ${({ theme }) => theme.images}) {
        display: none;
      }
    }
    .hashtag {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      @media (max-width: ${({ theme }) => theme.images}) {
        display: none;
      }
    }
  }
`;
export const Buttons = styled.button`
  background-color: var(--black);
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }
  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  @media (min-width: ${({ theme }) => theme.images}) {
    display: none;
  }
`;
