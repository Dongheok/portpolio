import styled from 'styled-components';

export const Wrapper = styled.div`
   width: 100%;
   height: 100vh;
   background: #fff;
   background-size: cover;
   padding: 80px 0 40px;

   & .profile {
      max-width: 1280px;
      height: 100%;
      margin: 0 auto;
      padding: 40px 0 60px;
      & > div {
         width: 100%;
         padding: 32px;

         transition: all 0.4s;
         & > .title {
            text-align: center;
            & span {
               position: relative;
               display: inline-block;
               padding: 24px 0;
               font-size: 36px;
               font-weight: 500;
               color: #444;
               text-align: center;
               &::before {
                  content: '';
                  position: absolute;
                  left: 0;
                  right: 0;
                  width: 0;
                  bottom: 0;
                  height: 4px;
                  background: #444;
                  transition: all 0.4s;
               }
            }
         }
         &:hover {
            box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
         }
         &:hover .title span::before {
            width: 100%;
         }
      }
      & .about {
         & .info {
            padding-top: 24px;
            /* 사진 슬라이더 부분 */
            & .picture_wrap {
               padding-right: 104px;
               & .slide {
                  position: relative;
                  max-width: 200px;
                  width: 100%;
                  height: 200px;
                  &.picture {
                     & img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                     }
                  }
                  &.text {
                     background: #444;
                     & span {
                        display: inline-block;
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        width: 100%;
                        line-height: 22px;
                        text-align: center;
                        font-size: 14px;
                        color: #fff;
                        transform: translate(-50%, -50%);
                     }
                  }
               }
            }
            & > .info {
               & > div {
                  padding-bottom: 40px;
                  color: #141414;
                  & .title {
                     padding-bottom: 8px;
                     font-size: 20px;
                     font-weight: bold;
                  }
                  & .text {
                     font-size: 18px;
                     line-height: 22px;
                  }
               }
            }
         }
      }
      & .skill {
         padding-top: 60px;
         & .skill_wrap {
            padding-top: 24px;
            & .skill_item {
               width: 100px;
               height: 100px;
               padding: 4px;
               margin: 0 4px 8px;
               & .skill_content {
                  height: 100%;
                  padding: 10px 15px;
                  background: #202e38;
                  transition: all 0.3s ease;
                  & .title {
                     margin-top: 15px;
                     font-size: 34px;
                  }
                  & .text {
                     margin-top: 3px;
                     font-size: 12px;
                     letter-spacing: 0.5px;
                  }
               }
               &.green {
                  background: linear-gradient(to bottom right, #58ac30 0%, #a7df62 100%);
                  & > div {
                     & > div {
                        background: -webkit-linear-gradient(#58ac30, #a7df62);
                        font-weight: 700;
                        -webkit-text-fill-color: transparent;
                        -webkit-background-clip: text;
                     }
                  }
               }
            }
         }
      }
   }
`;
