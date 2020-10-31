import styled from 'styled-components';

export const Mask = styled.div`
   height: ${(props) => `${props.height}`};
   background: url(${(props) => `${props.bgUrl}`}) no-repeat center top;
   background-size: cover;
   transition: all 10s;
   &:hover {
      background-position: center bottom;
   }
`;

export const Wrapper = styled.div`
   width: 100%;
   padding: 80px 32px;
   background: #fff;
   word-break: keep-all;

   & .project_wrap {
      max-width: 1280px;
      width: 100%;
      margin: 0 auto;
      padding: 40px 0;
      & .main_project {
         padding: 32px 32px 56px 32px;
         margin-bottom: 60px;
         transition: all 0.4s;
         &:hover {
            box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
         }
         & .slide {
            padding-bottom: 20px;
            & .title {
               padding: 24px 0;
               font-size: 36px;
               font-weight: 500;
               color: ${(props) => props.theme.main};
            }
            & .text {
               font-size: 24px;
               color: ${(props) => props.theme.main};
            }
         }
      }
      & .sub_project {
         width: 100%;

         & > .project {
            & > .project_item {
               height: 616px;
               padding: 32px;

               transition: all 0.4s;
               &:hover {
                  box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
               }
               & > .item_wrap {
                  & .text {
                     & h2 {
                        padding: 24px 0;
                        font-size: 24px;
                        color: ${(props) => props.theme.main};
                     }
                     & h3 {
                        line-height: 24px;
                        font-size: 16px;
                        color: ${(props) => props.theme.main};
                     }
                  }
               }
            }
         }
      }
   }

   & .link {
      text-align: right;
      & a {
         display: inline-block;
         width: 24px;
         height: 24px;
         margin-top: 12px;
         text-indent: -99999px;
         background: url('/portpolio/images/link_icon.png') no-repeat;
      }
   }
`;
