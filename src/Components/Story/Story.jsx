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
              the record for the best record in the regular season (73-9) which
              will never likely be broken by any other team in the league in
              years to come. Looking at the dubs story, Analyst in the Media
              always talk about the team having All stars but critically other
              than Kevin Durant, the warriors just drafted the right players who
              know the true meaning of hard work and being great, the team from
              the Bay Area is just one of a kind, a franchise that has good feel
              from ownership to the last person on the payroll. The dubs success
              will always be attributed to mark Jackson who came and changed the
              mindset of the young players back in 20113/2014 before steve kerr
              and his revolutionary Motion offense came into existence. The
              warriors will always be on the revolutionary teams in the history
              of the NBA because they brought about this modern basketball that
              we are all witnessing today.
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
