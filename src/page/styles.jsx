import styled from "styled-components";

const Wrapper = styled.div`
  & .Header {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 80px;
    line-height: 80px;
    padding-top: 20px;
    font-size: 24px;
    font-weight: bold;
    background: url("/images/main_bg.jpg") no-repeat center top 80px;
    color: #fff;
    text-align: center;
    box-sizing: border-box;
    & .Logo {
      display: block;
      width: 62px;
      height: 40px;
      margin: 0 auto;
      background: url("/images/logo.png") no-repeat;
      text-indent: -99999px;
    }
  }

  & .Pagination {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 99999;
    &.On {
      background: #000;
    }
    & ul {
      width: 100%;
      height: 30px;
      padding-top: 6px;
      text-align: center;
      box-sizing: border-box;
      & li {
        display: inline-block;
        margin-right: 10px;
        &::last-child {
          margin-right: 0;
        }
        & span {
          display: block;
          width: 60px;
          height: 10px;
          background: #fff;
          opacity: 0.6;
          cursor: pointer;
          &.On {
            opacity: 1;
          }
        }
      }
    }
  }
`;

export default Wrapper;
