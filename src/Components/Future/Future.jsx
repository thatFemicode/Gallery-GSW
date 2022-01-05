import React, { forwardRef, useRef, useEffect } from "react";
import { OuterLayout } from "../../Layout/Layout";
import { FutureStyled } from "./FutureStyled";
import { pageData } from "./pageData";
import logo from "./img/GSW.svg";
import Index from "./ProjectItem/Index";
import anime from "animejs";
const Future = forwardRef(({ id, children }, ref) => {
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
    <FutureStyled ref={ref} id={id}>
      <OuterLayout>
        <h1>The future of the Warriors</h1>
        <p>
          The Warriors have played their cards right, landing talent and
          hardworking players who will lead the team into its next phase of rule
          once the trio of Klay, Steph and Draymond leave the franchise or
          retire handing over the keys to this young stars
        </p>
        <ul>
          {pageData.map((item, index) => {
            return <Index key={index} project={item} itemIndex={index} />;
          })}
        </ul>
        <div className="scroll">
          <img ref={image} src={logo} alt="logo" />
        </div>
      </OuterLayout>
    </FutureStyled>
  );
});

export default Future;
