import styled from 'styled-components';

const Wrapper = styled.div`
   /* 메인 */
   & .main {
      overflow-x: hidden;
      & .scroll_section {
         position: relative;
         padding-top: 50vh;
         color: #fff;
         /*  */
         &.scroll_section_0 {
            & h2 {
               position: relative;
               top: -10vh;
               z-index: 5;
               font-size: 4rem;
               font-weight: bold;
               text-align: center;
            }
            /* background: ${(props) => props.theme.real_black}; */
            background: ${(props) => props.theme.real_orange};
         }
         &.scroll_section_1 {
            background: ${(props) => props.theme.real_orange};
            /* transition: all 0.1s; */
            & h2 {
               position: relative;
               top: -10vh;
               z-index: 5;
               font-size: 3.5rem;
               text-align: center;
               font-weight: bold;
            }
            /* 당근 svg */
            & .logo {
               left: 50%;
               top: 50%;
               width: 1500vw;
               transform: translate(-10%, -50%);
            }
            /* 당근 stroke */
            & .ribbon_path {
               left: 50%;
               top: 50%;
               min-width: 850px;
               transform: translate3D(-50%, -50%, 0);
               & svg {
                  & path {
                     fill: none;
                     /* stroke: ${(props) => props.theme.real_orange}; */
                     stroke: #56c271;
                     stroke-width: 62;
                     stroke-linecap: round;
                     stroke-linejoin: round;
                     stroke-dasharray: 1401;
                     stroke-dashoffset: 1401;
                  }
               }
            }
         }
         &.scroll_section_2 {
            position: relative;
            width: 100%;
            margin: 0 auto;
            padding: 20px;
            &::before {
               content: '';
               position: absolute;
               left: 0;
               bottom: 0;
               z-index: -2;
               width: 100%;
               height: 433px;
               background: url('/portpolio/images/dg_bg.png') no-repeat center bottom;
               /* background: url('/portpolio/images/dg_icon.png') no-repeat right bottom;
               background-size: 25%; */
            }
            & > .btn_wrap {
               width: auto;
               height: 100%;
               margin: 0 auto;
               & > div {
                  display: inline-block;
                  & button {
                     overflow: hidden;
                     position: relative;
                     display: inline-block;
                     width: 100%;
                     height: 100px;
                     text-transform: uppercase;
                     font-weight: bold;
                     font-size: 24px;
                     color: ${(props) => props.theme.real_green};
                     border: 4px solid ${(props) => props.theme.real_green};
                     border-radius: 8px;
                     transition: 0.5s;
                     & span {
                        position: absolute;
                        z-index: -1;
                        width: 25%;
                        height: 100%;
                        border-radius: 50%;
                        background: ${(props) => props.theme.real_green};
                        transition: 0.5s;
                        transform: translateY(150%);
                        &:nth-child(1) {
                           left: calc(0%);
                           transition-delay: calc(0.1s);
                        }
                        &:nth-child(2) {
                           left: calc(25%);
                           transition-delay: calc(0.2s);
                        }
                        &:nth-child(3) {
                           left: calc(50%);
                           transition-delay: calc(0.3s);
                        }
                        &:nth-child(4) {
                           left: calc(75%);
                           transition-delay: calc(0.4s);
                        }
                     }
                     &:hover {
                        color: #fff;
                        & span {
                           transform: translateY(0) scale(2.5);
                        }
                     }
                     /* 호버시 섹션 보더 */
                  }
               }
            }
         }
         /* scroll_section 컨텐츠들 */
         /* 이벤트 메세지 */
         & .main_message {
            top: 40vh;
            font-size: 2.5rem;
            opacity: 0;
            &.b {
               top: 50%;
               transform: translate3D(0, -50%, 0);
               margin-top: -22px;
               font-size: 3.5rem;
            }
            /* 메인 메세지 안에 텍스트 */
            & p {
               font-weight: bold;
               text-align: center;
               line-height: 1.2;
            }
         }
         /* 고정 메세지 속성 */
         & .sticky_elem {
            display: none;
            position: fixed;
            left: 0;
            width: 100%;
         }
      }
   }
   /* 해당 애니메이션 씬일 때, 해당 컨텐츠 보이게 처리 */

   &#show_scene_0 .scroll_section_0 .sticky_elem {
      display: block;
      will-change: transform, opacity;
   }
   &#show_scene_1 .scroll_section_1 .sticky_elem {
      display: block;
      will-change: transform, opacity;
   }
   &#show_scene_2 .scroll_section_2 .sticky_elem {
      display: block;
      will-change: transform, opacity;
   }

   @media (min-width: 1024px) {
      & .main {
         & .scroll_section {
            & h2 {
               font-size: 9vw !important;
            }
            &.scroll_section_1 {
            }
            & .main_message {
               font-size: 4vw;
               &.b {
                  font-size: 7vw;
               }
            }
         }
      }
   }
   @media (max-width: 600px) {
      & .main {
         & .scroll_section_2 {
            & .btn_wrap {
               position: absolute;
               left: 50%;
               top: 50%;
               transform: translate3D(-50%, -50%, 0);
               max-width: 440px;
               width: 100% !important;
               height: auto !important;
               margin: 0 auto;
            }
         }
      }
   }
`;

export default Wrapper;
