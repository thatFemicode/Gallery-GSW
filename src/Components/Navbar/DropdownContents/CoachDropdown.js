import React from "react";
import styled from "styled-components";

import Steve from "./Coaches/SK.jpg";
import Chris from "./Coaches/CDjpg.jpg";
import Kenny from "./Coaches/KA.jpg";
import Ron from "./Coaches/RA.jpg";
import Mike from "./Coaches/MB.jpg";
import Bruce from "./Coaches/BF.jpg";
import Dejan from "./Coaches/DM.jpg";
import {
  Heading,
  //   HeadingLink,
  //   LinkList,
  DropdownSection,
  //   Icon,s
  CoachLink,
  Header,
} from "./Components";

const CompanyDropdownEl = styled.div`
  width: 18.5rem;
`;

const CompanyDropdown = () => {
  return (
    <CompanyDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <Heading> Coaching Staff</Heading>
        {/* <p>Some superstars in the league </p> */}
        <ul>
          <Header>
            <CoachLink>
              <img src={Steve} alt="Steve Kerr" />
            </CoachLink>
            <p>Steve Kerr</p>
          </Header>
          <Header>
            <CoachLink>
              <img src={Mike} alt="Mike Brown" />
            </CoachLink>
            <p>Mike Brown</p>
          </Header>
          <Header>
            <CoachLink>
              <img src={Kenny} alt="Kenny Atkinson" />
            </CoachLink>
            <p>Kenny Atkinson</p>
          </Header>
          <Header>
            <CoachLink>
              <img src={Ron} alt="Ron Adams" />
            </CoachLink>
            <p>Ron Adams</p>
          </Header>
          <Header>
            <CoachLink>
              <img src={Bruce} alt="Bruce Fraser" />
            </CoachLink>
            <p>Bruce Fraser</p>
          </Header>
          <Header>
            <CoachLink>
              <img src={Chris} alt="Chris Demarco" />
            </CoachLink>
            <p>Chris Demarco</p>
          </Header>
          <Header>
            <CoachLink>
              <img src={Dejan} alt="Dejan Milojevic" />
            </CoachLink>
            <p>Dejan Milojevic</p>
          </Header>
        </ul>
      </DropdownSection>
    </CompanyDropdownEl>
  );
};

export default CompanyDropdown;
