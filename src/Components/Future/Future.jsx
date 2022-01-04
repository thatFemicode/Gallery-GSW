import React, { forwardRef } from "react";
import { OuterLayout } from "../../Layout/Layout";
import { FutureStyled } from "./FutureStyled";
import { pageData } from "./pageData";
import Index from "./ProjectItem/Index";
const Future = forwardRef(({ id, children }, ref) => {
  return (
    <FutureStyled ref={ref} id={id}>
      <OuterLayout>
        <h1>The future of the Warriors</h1>
        <ul>
          {pageData.map((item, index) => {
            return <Index key={index} project={item} itemIndex={index} />;
          })}
        </ul>
      </OuterLayout>
    </FutureStyled>
  );
});

export default Future;
