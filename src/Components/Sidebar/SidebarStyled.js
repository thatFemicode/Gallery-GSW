import styled from "styled-components";
export const SidebarStyled = styled.nav`
  position: fixed;
  top: 380px;
  /* left: 0; */
  z-index: 9;
  /* height: 100vh; */
  right: 60px;

  @media (min-width: ${({ theme }) => theme.team}) {
    right: 40px;
  }
  @media (min-width: ${({ theme }) => theme.auth}) {
    right: 700px;
    top: 40px;
  }
  @media screen and (min-height: 100px) and (max-height: 800px) and (max-width: 1280px) {
    top: 370px;
  }
  @media screen and (min-height: 100px) and (max-height: 750px) and (max-width: 1024px) {
    top: 180px;
  }

  @media (max-width: ${({ theme }) => theme.images}) {
    top: 300px;
  }
  @media (max-width: ${({ theme }) => theme.mins}) {
    right: 5px;
  }
  @media (max-width: ${({ theme }) => theme.mobil}) {
    display: none;
  }
  @media (min-width: ${({ theme }) => theme.auth}) {
    display: none;
    /* padding-top: 6rem; */
  }
  .sidebar-list {
    /* position: absolute; */
    /* top: 50%; */
    /* margin: auto 0; */
    /* transform: translateY(-50%); */
    list-style-type: none;
    text-align: center;
  }
`;
export const ItemStyled = styled.li`
  width: 8px;
  height: 8px;
  margin: 30px 20px;
  background-color: #000;
  border: 2px solid #000;
  border-radius: 50%;
  transition: all 0.3s;
  &.active {
    background-color: #fff;
    transform: scale(1.1);
    /* mix-blend-mode: difference; */
  }
`;
