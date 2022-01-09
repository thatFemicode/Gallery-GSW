import React, { useEffect, useRef } from "react";
import { OuterLayout } from "../../../Layout/Layout";
import {
  HamburgerStyled,
  Heading,
  Flex,
  FlexD,
  FlexS,
} from "./HamburgerStyled";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import Steph from "../img/Stephens.jpg";

import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  handleCity,
  staggerRevealClose,
} from "./Animation";
import content, { content2, content3 } from "../DropdownContents/data";

import MainTeam from "../DropdownContents/Main/MainTeam";

const Hamburger = ({ state }) => {
  // varibles of our dom nodes

  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);
  useEffect(() => {
    if (state.clicked === false) {
      // Close menu
      staggerRevealClose(reveal2, reveal1);
      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Open the menu
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
      staggerText(line1);
    }
  }, [state]);
  return (
    <HamburgerStyled ref={(el) => (menuLayer = el)}>
      <div
        ref={(el) => (reveal1 = el)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={(el) => (reveal2 = el)} className="menu-layer">
        <OuterLayout>
          <div className="wrapper">
            <div className="menu-links">
              <div className="img">
                <img
                  onMouseEnter={(e) => handleHover(e)}
                  onMouseOut={(e) => handleHoverExit(e)}
                  ref={(el) => (line1 = el)}
                  src={Steph}
                  alt=""
                />
              </div>
              {/* <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line1 = el)}
                      to="/opportunities"
                    >
                      Opportunities
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line2 = el)}
                      to="/solutions"
                    >
                      Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line3 = el)}
                      to="/contact-us"
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
              </nav> */}
              {/* <div className="image"></div> */}
              <div ref={(el) => (info = el)} className="info">
                <Heading>Warriors franchise</Heading>

                <div className="main">
                  <div className="coaches">
                    <Heading>Coaches</Heading>
                    <p className="coaches-text">Warriors Coaching Staff</p>
                    <FlexD>
                      <div className="teams-img">
                        {content3.map((item, index) => {
                          return <MainTeam team={item} key={item.id} />;
                        })}
                      </div>
                    </FlexD>
                  </div>
                  <div className="roster">
                    <Heading>Roster</Heading>
                    <p>Warriors Roster</p>
                    <FlexS>
                      <div className="teams-img">
                        {content.map((item, index) => {
                          return <MainTeam team={item} key={item.id} />;
                        })}
                      </div>
                    </FlexS>
                  </div>
                </div>
              </div>

              {/* <div className="locations">
                Locations:
                Returning the list of cities
                {cities.map(el => (
                  <span
                    key={el.name}
                    onMouseEnter={() => handleCity(el.image, cityBackground)}
                    onMouseOut={() => handleCityReturn(cityBackground)}>
                    {el.name}
                  </span>
                ))}
              </div> */}
            </div>
          </div>
        </OuterLayout>
      </div>
    </HamburgerStyled>
  );
};

export default Hamburger;
