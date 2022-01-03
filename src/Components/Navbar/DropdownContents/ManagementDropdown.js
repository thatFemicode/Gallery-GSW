import React from "react";
import styled from "styled-components";
import { DropdownSection, Heading } from "./Components";
import { content2 } from "./data";
import MainTeam from "./Main/MainTeam";
const ProductsDropdownEl = styled.div`
  width: 25rem;
`;

// const Logo = styled.div`
//   width: 38px;
//   height: 38px;
//   margin-right: 16px;
//   border-radius: 100%;
//   opacity: 0.6;
//   background-color: ${({ color }) => `var(--${color})`};
// `;

// const SubProductsList = styled.ul`
//   li {
//     display: flex;
//     margin-bottom: 1rem;
//   }
//   h3 {
//     margin-right: 1rem;
//     width: 3.2rem;
//     display: block;
//   }
//   a {
//     color: var(--dark-grey);
//   }
// `;

const ProductsSection = styled.ul`
  li {
    display: flex;
    padding-top: 1rem;
    align-items: center;
  }
`;
const Flex = styled.div`
  margin-top: 3rem;
  display: flex;
  > div:first-of-type {
    margin-right: 48px;
  }
  .teams-img {
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(3, minmax(0px, 1fr));
  }
`;
// const WorksWithStripe = styled.div`
//   border-top: 2px solid #fff;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: var(--spacer);
//   padding-top: var(--spacer);

//   h3 {
//     margin-bottom: 0;
//   }
// `;

const ProductsDropdown = () => {
  return (
    <ProductsDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <ProductsSection>
          <Heading>Front Office</Heading>
          <p>Golden State Warriors Front Office </p>
          <Flex>
            <div className="teams-img">
              {content2.map((item, index) => {
                return <MainTeam team={item} key={item.id} />;
              })}
            </div>
          </Flex>
        </ProductsSection>
      </DropdownSection>
    </ProductsDropdownEl>
  );
};

export default ProductsDropdown;
