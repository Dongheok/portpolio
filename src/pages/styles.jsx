import styled from 'styled-components';

const Wrapper = styled.div`
   background: ${(props) => props.theme.main_bg};
   transition: all 0.2s;
   /* 메인 */
   & .main {
      overflow-x: hidden;
      /* 각 섹션 */
      & .scroll_section {
         position: relative;
         padding-top: 50vh;
         color: ${(props) => props.theme.white};
         /* 섹션 0 : 메세지 fade in/out 애니메이션 */
         &.scroll_section_0 {
            & h2 {
               position: relative;
               top: -10vh;
               z-index: 5;
               font-size: 3.5rem;
               line-height: 1.3;
               font-weight: bold;
               text-align: center;
            }
            background: ${(props) => props.theme.main_bg};
         }
         /* 섹션 1 : svg path 및 svg 로고 애니메이션 */
         &.scroll_section_1 {
            & h2 {
               position: relative;
               top: -10vh;
               z-index: 5;
               line-height: 1.3;
               font-size: 2.5rem;
               text-align: center;
               font-weight: bold;
            }
            /* logo svg */
            & .logo {
               left: 50%;
               top: 50%;
               width: 1000vw;
               transform: translate(-10%, -50%);
            }
            /* stroke svg */
            & .ribbon_path {
               left: 50%;
               top: 50%;
               min-width: 850px;
               transform: translate3D(-50%, -50%, 0);
               & svg {
                  & path {
                     fill: none;
                     /* stroke: ${(props) => props.theme.black}; */
                     stroke: ${(props) => props.theme.main_color};
                     stroke-width: 70;
                     stroke-linecap: round;
                     stroke-linejoin: round;
                     stroke-dasharray: 1401;
                     stroke-dashoffset: 1401;
                  }
               }
            }
         }
         /* 섹션 2 : link button_wrap 및 밑 배경  */
         &.scroll_section_2 {
            position: relative;
            width: 100%;
            margin: 0 auto;
            padding: 0 20px;
            transition: all 0.4s;
            & > .btn_wrap {
               width: auto;
               height: 100%;
               margin: 0 auto;
               & > div {
                  display: inline-block;
                  & button,
                  & a {
                     overflow: hidden;
                     position: relative;
                     display: inline-block;
                     width: 100%;
                     height: 100px;
                     border: 4px solid ${(props) => props.theme.main_bg};
                     border-radius: 8px;
                     text-transform: uppercase;
                     & em {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        z-index: 1200;
                        transform: translate3D(-50%, -50%, 0);
                        font-weight: bold;
                        font-size: 24px;
                        color: ${(props) => props.theme.main_bg};
                        transition: 0.4s;
                     }
                     & span {
                        position: absolute;
                        z-index: 1100;
                        width: 25%;
                        height: 100%;
                        border-radius: 50%;
                        background: ${(props) => props.theme.main_bg};
                        transition: 0.4s;
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
                        & em {
                           color: ${(props) => props.theme.white};
                        }
                        & span {
                           transform: translateY(0) scale(2.5);
                        }
                     }
                  }
               }
            }
         }
         /* scroll_section 공통 컨텐츠들 */
         /* 이벤트 메세지 */
         & .main_message {
            top: 40vh;
            font-size: 2.5rem;
            opacity: 0;
            &.logo_text {
               top: 50%;
               transform: translate3D(0, -50%, 0);
               margin-top: -28px;
               font-size: 3.5rem;
            }
            /* 메인 메세지 안에 텍스트 */
            & p {
               font-weight: bold;
               text-align: center;
            }
         }
         /* 고정 메세지 속성 */
         & .sticky_elem {
            display: none;
            position: fixed;
            /* z-index: 4; */
            left: 0;
            width: 100%;
         }
      }
   }
   /* 해당 애니메이션 씬일 때, 해당하는 컨텐츠 보이게 처리 */

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
      /* 메인 */
      & .main {
         /* 각 섹션 */
         & .scroll_section {
            &.scroll_section_0 {
               & h2 {
                  font-size: 7vw !important;
               }
            }
            &.scroll_section_1 {
               & h2 {
                  font-size: 4vw;
               }
            }
            /* 이벤트 메세지 */
            & .main_message {
               font-size: 4vw;
               &.logo_text {
                  font-size: 7vw;
               }
            }
         }
      }
   }
   @media (max-width: 600px) {
      /* 메인 */
      & .main {
         /* 섹션 2 */
         & .scroll_section_2 {
            background-size: 200% !important;
            & .btn_wrap {
               position: absolute;
               left: 50%;
               top: 50%;
               transform: translate3D(-50%, -50%, 0);
               max-width: 320px;
               width: 100% !important;
               height: auto !important;
               margin: 0 auto;
            }
         }
      }
   }
`;

export default Wrapper;
