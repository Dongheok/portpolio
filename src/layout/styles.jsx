import styled from 'styled-components';

const Wrapper = styled.div`
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
         &.logo {
            width: 62px;
            height: 40px;
            margin-top: 20px;
            background: url('/portpolio/images/logo.png') no-repeat;
            text-indent: -99999px;
            cursor: pointer;
            &.on {
               background: url('/portpolio/images/logo_w.png') no-repeat;
            }
         }
         &.nav {
            & > ul {
               display: inline-block;
               &.gnb {
                  & li {
                     display: inline-block;
                     margin-left: 24px;
                     & span {
                        display: block;
                        color: ${(props) => props.theme.gray};
                        font-weight: 500;
                        font-size: 18px;
                        cursor: pointer;
                     }
                  }
               }
               &.util {
                  margin-top: 11px;
                  & li {
                     display: inline-block;
                     margin-left: 24px;
                     & button {
                        & svg {
                           color: ${(props) => props.theme.main};
                           font-size: 32px;
                        }
                     }
                     & a {
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
