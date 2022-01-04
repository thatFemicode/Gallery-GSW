import React, { forwardRef } from "react";
import { OuterLayout } from "../../Layout/Layout";
import { StoryStyled } from "./StoryStyled";
import DSJ from "./img/DSJ.JPG";
import DS from "./img/DS.jpg";
import { Hash } from "react-feather";

// import SK from "./img/SK.jpg";
const Story = forwardRef(({ id, children }, ref) => {
  return (
    <StoryStyled ref={ref} id={id}>
      <OuterLayout>
        <div className="story">
          <div className="story-img">
            <div className="top-right">
              <img src={DS} alt="DSJ" />
            </div>
            <div className="bottom-left ">
              <img src={DSJ} alt="DSJ" />
            </div>
            {/* <div className="side-image bottom">
              <img src={SK} alt="DSJ" />
            </div> */}
          </div>
          <div className="story-text">
            <h3>The Dynasty Years</h3>
            <p>
              Having ran the league for several years with an historic team
              winning Three championships and multiple finals run, the Dubs hold
              the record for the best record in the regular season (73-9) will
              be distracted by the readable content of a page when looking at
              its layout. The point of using lorem ipsum is that it has
              more-o-less normal distribution of letters as opposed to using
              Content here, making it look like readable english. Many desktop
              publishing packages and web page editors now use Lorem ipsum as
              their default model text and search for lorem ipsum will uncover
              many websites still in their infancy. Various versions have
              evolved over the years, sometimes by accidents sometimes on
              purpose (injected humour and like)
            </p>
          </div>
        </div>
        <div className="fixed-misc">
          <Hash />
          DubNation
        </div>
      </OuterLayout>
    </StoryStyled>
  );
});

export default Story;
