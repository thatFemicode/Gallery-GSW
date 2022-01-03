import React, { forwardRef, useRef, useEffect } from "react";
import { HeroStyled } from "./HeroStyled";
import Steph from "./img/Steph.JPG";
import Klay from "./img/Klay.jpg";
import Dray from "./img/Draymond.JPG";
import { OuterLayout } from "../../Layout/Layout";
import { Hash } from "react-feather";
import Logo from "./img/Logo.png";
import anime from "animejs";
const Hero = forwardRef(({ id, children }, ref) => {
  const image = useRef(null);
  useEffect(() => {
    anime({
      targets: image.current,
      rotateY: 360,
      // keyframes: [{ rotate: 0 }, { rotate: 30 }, { rotate: 0 }],
      // translateY: 400,
      // duration: 400,
      // scale: 2,
      // easing: 'linear',
      duration: 1500,
      endDelay: 300,
      scale: 0.5,
      easing: "easeInOutSine",
      direction: "alternate",
      loop: true,
    });
  }, []);
  return (
    <HeroStyled ref={ref} id={id}>
      <OuterLayout>
        <div className="row">
          <div className="side-image left">
            <img src={Klay} alt="Klay" />
          </div>
          <div className="main-text">GOLDEN STATE WARRIORS</div>
          <div className="main-image">
            {/* <img src={diamond} alt="" /> */}
            <img src={Steph} alt="Steph" />
          </div>
          <div className="side-image right">
            <img src={Dray} alt="Draymond" />
          </div>
        </div>
        <div className="scroll">
          <img ref={image} src={Logo} alt="75anniversary" />
        </div>
        <div className="fixed-misc">
          <Hash />
          DubNation
        </div>
      </OuterLayout>
    </HeroStyled>
  );
});

export default Hero;
