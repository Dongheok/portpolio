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
            /* background: ${(props) => props.theme.real_black}; */
            background: ${(props) => props.theme.real_orange};
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
               width: 1000vw;
               transform: translate(-10%, -50%);
            }
            /* 당근 stroke */
            & .ribbon_path {
               left: 50%;
               top: 50%;
               min-width: 850px;
               transform: translate(-50%, -50%);
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
         }
         /* scroll_section 컨텐츠들 */
         /* 이벤트 메세지 */
         & .main_message {
            top: 40vh;
            font-size: 2.5rem;
            opacity: 0;
            &.b {
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
      & .content {
         padding: 20vh 0;
         & p {
            max-width: 1000px;
            margin: 0 auto;
            padding: 0 1rem;
            font-size: 2rem;
            color: #888;
         }
      }
   }
   /* 해당 애니메이션 씬일 때, 해당 컨텐츠 보이게 처리 */
   &#show_scene_0 {
   }
   &#show_scene_1 {
   }
   &#show_scene_2 {
   }
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
         & .content {
            & p {
               width: 1000px;
               padding: 0;
               font-size: 4vw;
            }
         }
      }
   }
`;

export default Wrapper;
