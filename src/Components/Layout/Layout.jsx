import React, { forwardRef } from "react";
import styled from "styled-components";
// import { OuterLayout } from "../../Layout/Layout";
import Sidebar from "../Sidebar/Sidebar";
import { LayoutStyled } from "./LayoutStyled";

const SectionStyled = styled.section``;
const Section = forwardRef(({ id, children }, ref) => {
  return (
    <SectionStyled ref={ref} id={id}>
      {children}
    </SectionStyled>
  );
});

export { Section };
const Layout = ({ children, refs }) => {
  return (
    <LayoutStyled>
      <Sidebar sections={children} refs={refs} />
      <main>{children}</main>
    </LayoutStyled>
  );
};

export default Layout;
