import React, { forwardRef } from "react";
import { OuterLayout } from "../../Layout/Layout";
import { StoryStyled } from "./StoryStyled";

const Story = forwardRef(({ id, children }, ref) => {
  return (
    <StoryStyled ref={ref} id={id}>
      <OuterLayout></OuterLayout>
    </StoryStyled>
  );
});

export default Story;
