import styled from 'styled-components';

export const Mask = styled.div`
   height: ${(props) => `${props.height}`};
   background: url(${(props) => `${props.bgUrl}`}) no-repeat center top;
   background-size: cover;
   transition: all ${(props) => props.speed}s;
   &:hover {
      background-position: center bottom;
   }
`;

export const Wrapper = styled.div`
   width: 100%;
   padding: 80px 32px;
   background: ${(props) => props.theme.bg};
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
            box-shadow: 0 3px 3px -2px ${(props) => props.theme.shadow};
         }
         & .slide {
            padding-bottom: 20px;
            & .title {
               position: relative;
               padding: 24px 0;
               font-size: 36px;
               font-weight: 500;
               color: ${(props) => props.theme.main};
            }
            & .text_1 {
               line-height: 1.3;
               font-size: 24px;
               color: ${(props) => props.theme.main};
            }
            & .text_2 {
               line-height: 1.3;
               margin-top: 16px;
               font-size: 16px;
               color: ${(props) => props.theme.main};
            }
         }
         & .slick-dots {
            & .slick-active {
               & button {
                  &::before {
                     color: ${(props) => props.theme.black};
                  }
               }
            }
            & button {
               &::before {
                  color: ${(props) => props.theme.black};
               }
            }
         }
      }
      & .sub_project {
         width: 100%;
         & > .project {
            & > .project_item {
               width: 100%;
               height: auto;
               padding: 32px;
               transition: all 0.4s;
               &:hover {
                  box-shadow: 0 3px 3px -2px ${(props) => props.theme.shadow};
               }
               & > .item_wrap {
                  & > div {
                     &.title {
                        & > div {
                           padding: 24px 0;
                           font-size: 24px;
                           color: ${(props) => props.theme.main};
                        }
                     }
                     &.text {
                        font-size: 16px;
                        color: ${(props) => props.theme.main};
                        &.text_1 {
                           padding-bottom: 8px;
                        }
                        &.text_2 {
                           line-height: 1.6;
                        }
                     }
                  }
               }
            }
         }
      }
   }

   & .link {
      & a {
         display: inline-block;
         width: 24px;
         height: 24px;
         text-indent: -99999px;
         background: url('/portpolio/images/link_icon.png') no-repeat;
      }
      &.on {
         & a {
            background: url('/portpolio/images/link_icon_w.png') no-repeat;
         }
      }
   }
   @media (max-width: 960px) {
      & .project_wrap {
         & .main_project {
            & .slide {
               & .title {
                  font-size: 24px;
               }
               & .text {
                  font-size: 16px;
               }
            }
         }
      }
   }
`;
