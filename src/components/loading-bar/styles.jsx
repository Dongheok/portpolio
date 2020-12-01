import styled, { keyframes } from "styled-components";

const rotateAni = keyframes`
   100% {
      transform: rotate(360deg);
   }
`;

const loadingAni = keyframes`
   0% {
      stroke-dashoffset: 157;
   }
   75% {
      stroke-dashoffset: -147;
   }
   100% {
      stroke-dashoffset: -157;
   }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1600;
  width: 100%;
  height: 100%;
  background: #fff url("http://sn237x.cafe24.com/web/portpolio_img/dg_icon.png")
    no-repeat center center;
  background-size: 50%;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s;
  &.on {
    visibility: visible;
    opacity: 1;
  }
  & .loading_circle {
    width: 54px;
    height: 54px;
    transform: rotate(1deg);
    animation: ${rotateAni} 3s infinite;
    & circle {
      stroke: black;
      stroke-width: 4px;
      stroke-dasharray: 157;
      fill: none;
      animation: ${loadingAni} 1s infinite;
    }
  }
`;

export default Wrapper;
