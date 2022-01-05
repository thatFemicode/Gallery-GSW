import styled, { css } from "styled-components";

function createCSS() {
  let styles = "";
  for (let i = 0; i < 4; i += 1) {
    styles += `p:nth-child(${i + 1}n){
span{
    transition-delay:${i / 10}s;
 
}
      }
      `;
  }
  return css`
    ${styles}
  `;
}
export const IndexStyled = styled.li`
  cursor: pointer;
  line-height: 1.25;
  padding: 5px 0;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  height: 140px;
  width: 80%;
  margin: 0 auto;
  .info-block {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 65vw;
    z-index: 1;
    text-align: left;
    font-size: 20px;

    .info-block-header {
      margin-bottom: 20px;
      color: black;
      font-weight: 500;
      font-size: 2rem;
      /* svg {
        margin-right: 4px;
      } */
      span {
        /* display: flex; */
        /* align-items: center; */
      }
    }
    p {
      margin-bottom: 10px;
      overflow: hidden;
      color: #999;
      span {
        display: block;
        opacity: 0;
        transition: all 0.25s ease-in-out;
        transform: translateY(10px);
      }
    }

    &.as-active {
      ${createCSS()}
      /* @for $i from 0 through 4 {
        p:nth-child(#{$i + 1}n) {
          span {
            transition-delay: #{$i/10}s;
          }
        }
      } */
      span {
        transform: translateY(0px);

        opacity: 1;
      }
    }
  }
`;
