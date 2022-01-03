import React from "react";
import { MainTeamStyled } from "./MainTeamStyled";
import { PlayLink } from "../Components";
const MainTeam = ({ team }) => {
  const { image, name } = team;
  return (
    <MainTeamStyled>
      <PlayLink>
        <img src={image} alt="" />
      </PlayLink>
      <p>{name}</p>
    </MainTeamStyled>
  );
};

export default MainTeam;
