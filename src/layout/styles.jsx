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
            background: url('http://sn237x.cafe24.com/web/portpolio_img/project/logo.png') no-repeat;
            text-indent: -99999px;
            cursor: pointer;
            &.on {
               background: url('http://sn237x.cafe24.com/web/portpolio_img/project/logo_w.png') no-repeat;
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
