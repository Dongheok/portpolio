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
      background: #fff;
      & .logo {
         float: left;
         display: block;
         width: 62px;
         height: 40px;
         margin-top: 20px;
         background: url('/portpolio/images/logo.png') no-repeat;
         text-indent: -99999px;
         cursor: pointer;
      }
      & .gnb {
         overflow: hidden;
         float: right;
         & li {
            float: left;
            margin-left: 10px;
            &:last-child {
               margin-left: 0;
            }
            & span {
               display: block;
               padding: 0 10px;
               color: ${(props) => props.theme.gray};
               font-weight: 500;
               font-size: 18px;
               cursor: pointer;
            }
         }
      }
   }
`;

export default Wrapper;
