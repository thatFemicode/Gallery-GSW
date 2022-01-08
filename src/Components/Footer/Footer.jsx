import React from "react";
import { OuterLayout } from "../../Layout/Layout";
import { FooterStyled } from "./FooterStyled";
import Klay from "./img/klaytjpg.jpg";
import Rak from "./img/Rakuten.png";
import Nike from "./img/nike.png";
import { Hash } from "react-feather";
const Footer = () => {
  return (
    <FooterStyled>
      <OuterLayout>
        <div className="footer">
          <div className="footer-left">
            <img src={Klay} alt="" />
            <div className="footer-left-text">
              <p>
                Golden <br /> <span className="state"> State </span> <br />{" "}
                <span className="warriors"> Warriors</span>
              </p>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-right-img">
              <img src={Rak} alt="" />
              <img src={Nike} alt="" />
            </div>
            <div className="footer-right-text">
              <Hash />
              DubNation
            </div>
          </div>
        </div>
      </OuterLayout>
    </FooterStyled>
  );
};

export default Footer;
