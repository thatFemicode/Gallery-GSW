import React, { useState, useReducer, useContext, useRef } from "react";
import Image from "./Image/Image";
import { IndexStyled } from "./IndexStyled";
import Title from "./Title/Title";
import { Hash } from "react-feather";
import animate from "./animate";
import cn from "classnames";
import { CursorContext } from "../../CustomCursor/CursorManager";

const initalState = {
  rotationPosition: 0,
  opacity: 0,
  // tHE BELOW IS FOR the coordinates of our mouse
  parallaxPos: { x: 0, y: -20 },
  scale: 0.8,
  rotationPosition: 0,
  active: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "MOUSE/ENTER":
      return { ...state, active: true };
    case "MOUSE/LEAVE":
      return { ...state, active: false };
    case "CHANGE/OPACITY": {
      return { ...state, opacity: action.payload };
    }
    case "MOUSE/COORDINATES": {
      return {
        ...state,
        parallaxPos: action.payload,
      };
    }
    case "CHANGE/ROTATION": {
      return {
        ...state,
        rotationPosition: action.payload,
      };
    }

    case "CHANGE/SCALE": {
      return {
        ...state,
        scale: action.payload,
      };
    }
    default: {
      throw new Error();
    }
  }
}
const Index = ({ project, itemIndex }) => {
  // we will be creating values in the state using useReducer for multiple state
  //   sfor the image making the image persistent
  const [state, dispatch] = useReducer(reducer, initalState);
  const easeMethod = "easeInOutCubic";
  const parallax = (event) => {
    // this paralx function will reutn the event
    // gettig the x and y position of our mouse
    const speed = -5;
    const x = (window.innerWidth - event.pageX) / 100;
    const y = (window.innerWidth - event.pageY) / 100;
    // this values naturally are big so we can divide them by 100
    // we will be myultiplyinng event pagex and page y for smotth transitions
    dispatch({ type: "MOUSE/COORDINATES", payload: { x, y } });
  };
  const handleOpacity = (initialOpacity, newOpacity, duration) => {
    animate({
      fromValue: initialOpacity,
      toValue: newOpacity,
      onUpdate: (newOpacity, callback) => {
        dispatch({ type: "CHANGE/OPACITY", payload: newOpacity });
        callback();
      },
      onComplete: () => {},
      duration: duration,
      easeMethod: easeMethod,
    });
  };
  const handleScale = (initialScale, newScale, duration) => {
    animate({
      fromValue: initialScale,
      toValue: newScale,
      onUpdate: (newOpacity, callback) => {
        dispatch({ type: "CHANGE/SCALE", payload: newOpacity });
        callback();
      },
      onComplete: () => {},
      duration: duration,
      easeMethod: easeMethod,
    });
  };
  const handleRotation = (currentRotaion, duration) => {
    //   newRotation will be between two numbers (-15 and 15)
    const newRotation =
      Math.random() * 15 * (Math.round(Math.random()) ? 1 : -1);
    animate({
      fromValue: currentRotaion,
      toValue: newRotation,
      onUpdate: (newOpacity, callback) => {
        dispatch({ type: "CHANGE/ROTATION", payload: newOpacity });
        callback();
      },
      onComplete: () => {},
      duration: duration,
      easeMethod: easeMethod,
    });
  };
  const handleMouseEnter = () => {
    // setSize("regular");
    handleScale(0.8, 1, 500);
    handleOpacity(0, 1, 500);
    handleRotation(state.rotationPosition, 500);
    dispatch({ type: "MOUSE/ENTER" });
    // dispatch({ type: "CHANGE/OPACITY", payload: 1 });
    listItem.current.addEventListener("mousemove", parallax);
  };

  const handleMouseLeave = () => {
    // setSize("small");
    listItem.current.removeEventListener("mousemove", parallax);
    handleOpacity(1, 0, 800);
    handleScale(1, initalState.scale, 500);
    handleRotation(state.rotationPosition, 500);
    dispatch({ type: "MOUSE/LEAVE" });

    // dispatch({ type: "CHANGE/OPACITY", payload: 0 });

    dispatch({ type: "MOUSE/COORDINATES", payload: initalState.parallaxPos });
  };
  //   now we will have a dom reference forour reducer
  const listItem = useRef(null);
  const { setSize } = useContext(CursorContext);
  return (
    <IndexStyled ref={listItem}>
      <Title
        title={project.name}
        handleMouseLeave={handleMouseLeave}
        handleMouseEnter={handleMouseEnter}
      />
      <Image
        url={project.url}
        // active={state.active}
        scale={state.scale}
        rotationPosition={state.rotationPosition}
        parallaxPos={state.parallaxPos}
        opacity={state.opacity}
      />
      <div className={cn("info-block", { "as-active": state.active })}>
        <p className="info-block-header">
          <span>{project.info}</span>
        </p>
      </div>
    </IndexStyled>
  );
};

export default Index;
