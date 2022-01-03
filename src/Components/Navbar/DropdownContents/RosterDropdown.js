import React from "react";
import styled from "styled-components";
import {
  //   Icon,
  DropdownSection,
  Heading,
  //   HeadingLink,
  //   LinkList,
} from "./Components";
import content from "./data";
import MainTeam from "./Main/MainTeam";
const DevelopersDropdownEl = styled.div`
  width: 40rem;
`;

const Flex = styled.div`
  display: flex;
  > div:first-of-type {
    margin-right: 48px;
  }
  .teams-img {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(6, minmax(0px, 1fr));
  }
`;

const DevelopersDropdown = () => {
  return (
    <DevelopersDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <div>
          <Heading>Roster</Heading>
          <p>Warriors Roster</p>
          <Flex>
            <div className="teams-img">
              {content.map((item, index) => {
                return <MainTeam team={item} key={item.id} />;
              })}
            </div>
          </Flex>
        </div>
      </DropdownSection>
    </DevelopersDropdownEl>
  );
};

export default DevelopersDropdown;
