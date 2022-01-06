import React, { forwardRef, useState, useRef, useEffect } from "react";
import { TributeStyled } from "./TributeStyled";
import { OuterLayout } from "../../Layout/Layout";
import ReactPlayer from "react-player";
import Steph from "./img/Steph.jpg";
import { Hash } from "react-feather";
// import VideoPlayer from "react-video-js-player";
const Tribute = forwardRef(({ id, children }, ref) => {
  const [control, setControls] = useState(true);
  return (
    <TributeStyled ref={ref} id={id}>
      <OuterLayout>
        <div className="fixed-misc">
          <Hash />
          DubNation
        </div>
        <div className="video-player">
          <ReactPlayer
            className="react-player"
            url="https://youtu.be/9kt-DSTX4js"
            controls={control}
            width="100%"
            height="100%"
            light={Steph}
          />
        </div>
        <div className="video-content">
          <div className="title">
            <h3>Relieve The Dynasty years</h3>
          </div>
          <div className="content">
            <p>
              Relieving the Dubs greatness and how this franchise came into what
              it is today is a testament to the front office and ownership group
              that runs the franchise, the investment made in a young and skinny
              kid coming out of Davidson College, a former great player son in
              Klay thompson out of Washington State University and a chubby NCAA
              champion of of Michigan State. The warriors groomed and developed
              this players into what they are today building and unstoppable
              trio core who ran the league for close to six years with the
              addition of great players such as Andre Iguodala, Kevin Durant
              etc. Watch the Video to follow the Journey and look through the
              bus run..DubNation
            </p>
          </div>
        </div>

        {/* <video
            poster="https://www.nbcsports.com/sites/rsnunited/files/styles/article_hero_image/public/article/hero/Steph-Curry-FistPump-USATSI-17408684.jpg"
            controls
            type="video/mp4"
            src="https://youtu.be/P0zWjaXmrTE"
          /> */}
        {/* <video
            poster="https://www.nbcsports.com/sites/rsnunited/files/styles/article_hero_image/public/article/hero/Steph-Curry-FistPump-USATSI-17408684.jpg"
            width="750"
            height="500"
            controls
          >
            <source src="https://youtu.be/9kt-DSTX4js" type="video/mp4" />
          </video> */}
        {/* <VideoPlayer
            controls={true}
            src="https://youtu.be/9kt-DSTX4js"
            poster="https://www.nbcsports.com/sites/rsnunited/files/styles/article_hero_image/public/article/hero/Steph-Curry-FistPump-USATSI-17408684.jpg"
            width="720"
            height="420"
          /> */}
      </OuterLayout>
    </TributeStyled>
  );
});

export default Tribute;
