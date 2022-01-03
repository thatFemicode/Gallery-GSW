import styled from "styled-components";

export const Heading = styled.h3`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.1rem;
  margin-top: 0;
  margin-bottom: ${(props) => (props.noMarginBottom ? 0 : "1rem")};
  /* color: ${({ color }) => (color ? `var(--${color})` : "var(--blue)")}; */
`;

export const HeadingLink = Heading.withComponent("li");

export const Header = styled.li`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  /* flex-direction: row; */
  align-items: center;
  @media (max-width: ${({ theme }) => theme.images}) {
    /* overflow: unset; */
    margin-right: 1rem;
  }

  p {
    align-self: flex-end;
    padding-left: 1rem;
  }
`;
export const PlayLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  img {
    mix-blend-mode: darken;
  }
`;
export const CoachLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  img {
    mix-blend-mode: darken;
  }
`;
export const PlayLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  img {
    mix-blend-mode: darken;
  }
`;

export const LinkList = styled.ul`
  li {
    margin-bottom: 1rem;
  }

  li:last-of-type {
    margin-bottom: 0;
  }

  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)};
`;

export const Icon = styled.div`
  width: 13px;
  height: 13px;
  margin-right: 13px;
  background-color: var(--blue);
  opacity: 0.8;
  display: inline-block;
`;

export const DropdownSection = styled.div`
  padding: var(--spacer);
  position: relative;
  z-index: 1;
`;
