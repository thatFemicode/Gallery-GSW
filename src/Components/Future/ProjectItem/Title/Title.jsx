import React from "react";
import { TitleStyled } from "./TitleStyled";

const Title = ({ title, handleMouseEnter, handleMouseLeave }) => {
  return (
    <TitleStyled
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className="menu-title">{title}</h1>
      <h1 className="menu-title clone">{title}</h1>
    </TitleStyled>
  );
};

export default Title;
