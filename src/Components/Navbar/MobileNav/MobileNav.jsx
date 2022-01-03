import React from "react";
import { useGlobalContext } from "../../../Context/context";
import { MobileNavStyled } from "./MobileNavStyled";
import { Heading, PlayLink, Header } from "../DropdownContents/Components";
import ESPN from "../DropdownContents/ESPNs.png";
import TNT from "../DropdownContents/tnts.png";
import NBAtv from "../DropdownContents/nba.png";
import content from "../DropdownContents/data";
import MainTeam from "../DropdownContents/Main/MainTeam";
import { Scrollbars } from "react-custom-scrollbars-2";
import Bron from "../DropdownContents/img/bron.png";
import Joel from "../DropdownContents/img/joel.png";
import Klay from "../DropdownContents/img/klay.png";
import Steph from "../DropdownContents/img/Steph.png";
import Kd from "../DropdownContents/img/kd.png";
const MobileNav = () => {
  const { isSidebarOpen } = useGlobalContext();
  return (
    isSidebarOpen && (
      <MobileNavStyled>
        <div className="sidebar">
          <div className="channels">
            <Heading>Channels</Heading>
            <p>Catch live games on the stations below </p>
            <li>
              <Header>
                <PlayLink>
                  <img src={ESPN} alt="" />
                </PlayLink>
              </Header>
              <Header>
                <PlayLink>
                  <img src={TNT} alt="" />
                </PlayLink>
              </Header>
              <Header>
                <PlayLink>
                  <img src={NBAtv} alt="" />
                </PlayLink>
              </Header>
            </li>
          </div>
          <div className="teams">
            <Heading>Teams</Heading>
            <p>Teams in the League</p>
            <Scrollbars
              thumbSize="1px"
              autoHeight
              autoHeightMin={50}
              autoHeightMax={600}
              style={{ width: "100%", height: 70 }}
            >
              <div className="teams-img">
                {content.map((item, index) => {
                  return <MainTeam team={item} key={item.id} />;
                })}
              </div>
            </Scrollbars>
          </div>
          <div className="players">
            <Heading>Superstar Players</Heading>
            <p>Some superstars in the league </p>
            <Scrollbars
              thumbSize="1px"
              autoHeight
              autoHeightMin={50}
              autoHeightMax={600}
              style={{ width: "100%", height: 70 }}
            >
              <ul>
                <Header>
                  <PlayLink>
                    <img src={Klay} alt="" />
                  </PlayLink>
                </Header>
                <Header>
                  <PlayLink>
                    <img src={Kd} alt="" />
                  </PlayLink>
                </Header>
                <Header>
                  <PlayLink>
                    <img src={Joel} alt="" />
                  </PlayLink>
                </Header>
                <Header>
                  <PlayLink>
                    <img src={Bron} alt="" />
                  </PlayLink>
                </Header>
                <Header>
                  <PlayLink>
                    <img src={Steph} alt="" />
                  </PlayLink>
                </Header>
              </ul>
            </Scrollbars>
          </div>
        </div>
      </MobileNavStyled>
    )
  );
};

export default MobileNav;
