import React, { useState } from "react";
import { NavbarStyled, Buttons } from "./NavbarStyled";
import { OuterLayout } from "../../Layout/Layout";
import logo from "./img/GSW.svg";
import { Hash } from "react-feather";
import AnimatedNavbar from "./AnimatedNavbar";
import { useGlobalContext } from "../../Context/context.js";
const Navbar = () => {
  const [duration, setDuration] = useState(300);
  const { openSidebar, isSidebarOpen } = useGlobalContext();

  return (
    <NavbarStyled>
      <OuterLayout>
        <div className="navigation">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="mid-nav">
            <AnimatedNavbar duration={duration} />
          </div>
          <div className="hashtag">
            <Hash />
            DubNation
          </div>
          <Buttons clicked={isSidebarOpen} onClick={openSidebar} />
        </div>
      </OuterLayout>
    </NavbarStyled>
  );
};

export default Navbar;
