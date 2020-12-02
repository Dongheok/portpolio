import styled from "styled-components";

const Wrapper = styled.div`
  /* 헤더 */
  & .header {
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 80px;
    line-height: 80px;
    padding: 0 32px;
    background: ${(props) => props.theme.bg};
    & > div {
      /* 로고 */
      &.logo {
        width: 62px;
        height: 40px;
        margin-top: 20px;
        background: url("http://sn237x.cafe24.com/web/portpolio_img/logo.svg")
          no-repeat;
        text-indent: -99999px;
        cursor: pointer;
        &.on {
          background: url("http://sn237x.cafe24.com/web/portpolio_img/logo_w.svg")
            no-repeat;
        }
      }
      /* 네비게이션 */
      &.nav {
        & > ul {
          display: inline-block;
          /* 글로벌 네비게이션 바 */
          &.gnb {
            & li {
              display: inline-block;
              margin-left: 24px;
              & span {
                display: block;
                color: ${(props) => props.theme.main};
                font-weight: 500;
                font-size: 18px;
                cursor: pointer;
              }
            }
          }
          /* 유틸 */
          &.util {
            padding-top: 11px;
            & li {
              display: inline-block;
              padding: 0 0 0 24px;
              & button {
                position: relative;
                & svg {
                  color: ${(props) => props.theme.main};
                  font-size: 32px;
                }
              }
              & a {
                display: block;
                & svg {
                  color: ${(props) => props.theme.main};
                  font-size: 32px;
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Wrapper;
