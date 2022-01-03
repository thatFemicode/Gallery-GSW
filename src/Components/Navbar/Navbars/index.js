import React, { Component } from "react";
import styled from "styled-components";

const NavbarEl = styled.nav`
  margin: auto;
`;

const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
`;

class Navbars extends Component {
  render() {
    const { children, onMouseLeave } = this.props;
    return (
      <NavbarEl onMouseLeave={onMouseLeave}>
        <NavbarList>{children}</NavbarList>
      </NavbarEl>
    );
  }
}

export default Navbars;
