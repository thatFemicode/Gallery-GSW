import React from "react";
import { ImageStyled } from "./ImageStyled";

const Image = ({
  url,
  active,
  rotationPosition,
  parallaxPos,
  scale,
  opacity,
}) => {
  return (
    <ImageStyled>
      <img
        className={{ active }}
        style={{
          opacity: opacity,
          transform: `translate3d(${parallaxPos.x}px, ${parallaxPos.y}px, 0px) rotate(${rotationPosition}deg)  scale(${scale} `,
        }}
        src={url}
        alt=""
      />
    </ImageStyled>
  );
};

export default Image;
