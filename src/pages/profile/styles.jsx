import styled, { css } from 'styled-components';

const FnText = css`
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
`;

export const SkillItem = styled.div`
   display: inline-block;
   position: relative;
   width: 100px;
   height: 100px;
   padding: 4px;
   margin: 0 5px 10px;
   z-index: 1;
   transition: all 0.3s ease;
   & .skill_item {
      background: #202e38;
      padding: 10px 15px;
      width: 100%;
      height: 100%;
      transition: inherit;

      & > div {
         text-align: left;
         &.title {
            font-size: 34px;
            font-weight: 700;
            margin: 0.3em 0 0;
            transition: 0.8s ease 600ms;
         }
         &.text {
            font-size: 12px;
            margin-left: 2px;
         }
      }
   }
   & .skill_text {
      position: absolute;
      left: 50%;
      top: 80%;
      z-index: 10;
      transform: translateX(-50%);
      width: 180px;
      height: auto;
      line-height: 1.4;
      padding: 10px;
      text-align: center;
      font-size: 12px;
      color: #333;
      border-radius: 6px;
      border: 1px solid #eee;
      background: #fff;
      opacity: 0;
      transition: opacity 0.3s ease 0.3s, top 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s;
   }
   /* 컬러 종류 */
   &.red {
      background: linear-gradient(to bottom right, #f953c6 0%, #b91d73 100%);
      & > div {
         & > div {
            background: -webkit-linear-gradient(#f953c6, #b91d73);
            ${FnText}
         }
      }
   }
   &.yellow {
      background: linear-gradient(to bottom right, #f3f9a6 0%, #cbc634 100%);
      & > div {
         & > div {
            background: -webkit-linear-gradient(#f3f9a6, #cbc634);
            ${FnText}
         }
      }
   }
   &.blue {
      background: linear-gradient(to bottom right, #00d2ff 0%, #3a7bd5 100%);
      & > div {
         & > div {
            background: -webkit-linear-gradient(#00d2ff, #3a7bd5);
            ${FnText}
         }
      }
   }
   &.green {
      background: linear-gradient(to bottom right, #11998e 0%, #38ef7d 100%);
      & > div {
         & > div {
            background: -webkit-linear-gradient(#11998e, #38ef7d);
            ${FnText}
         }
      }
   }

   /* 호버 이벤트 */
   &:hover {
      transform: scale(1.12);
      z-index: 10;
      & .skill_item {
         background: transparent;
         & > div {
            -webkit-text-fill-color: #222;
            &.title {
            }
            &.text {
            }
         }
      }
      & .skill_text {
         top: 105%;
         opacity: 1 !important;
      }
   }
`;

export const Wrapper = styled.div`
   width: 100%;
   height: 100vh;
   background: #fff;
   background-size: cover;
   padding: 80px 20px 40px;

   & .profile {
      max-width: 1280px;
      height: 100%;
      margin: 0 auto;
      padding: 40px 0 60px;
      & > div {
         width: 100%;
         padding: 32px;
         margin-bottom: 48px;
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
         & .skill_item_wrap {
            padding: 24px 0;
            text-align: center;
         }
      }
   }
   @media (max-width: 600px) {
      & .profile {
         & .about {
            & .info {
               /* 사진 슬라이더 부분 */
               & .picture_wrap {
                  padding-right: 0;
                  max-width: 200px;
                  margin: 0 auto;
               }
            }
         }
      }
   }
`;
