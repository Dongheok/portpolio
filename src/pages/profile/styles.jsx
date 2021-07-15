import styled, { css } from 'styled-components';
// 공통 텍스트 그라디언트 CSS 변수화
const FnText = css`
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
`;

// 스킬 애니메이션 아이템
export const SkillItem = styled.div`
   display: inline-block;
   position: relative;
   width: 100px;
   height: 100px;
   padding: 4px;
   margin: 0 5px 10px;
   z-index: 1;
   transition: all 0.3s ease !important;
   /* 스킬 아이템 */
   & .skill_item {
      background: #202e38;
      padding: 10px 15px;
      width: 100%;
      height: 100%;
      transition: inherit !important;
      & > div {
         text-align: left;
         &.title {
            font-size: 34px;
            font-weight: 700;
            margin: 0.3em 0 0;
            transition: 0.8s ease 600ms !important;
         }
         &.text {
            font-size: 12px;
            margin-left: 2px;
         }
      }
   }
   /* 스킬 메세지 */
   & .skill_text {
      position: absolute;
      left: 50%;
      top: 80%;
      z-index: 10;
      transform: translateX(-50%);
      width: 240px;
      height: auto;
      line-height: 1.3;
      padding: 10px;
      text-align: center;
      font-size: 12px;
      color: ${(props) => props.theme.black};
      border-radius: 6px;
      border: 1px solid ${(props) => props.theme.main};
      background: ${(props) => props.theme.bg};
      opacity: 0;
      transition: opacity 0.3s ease 0.3s, top 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s !important;
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
   @media (max-width: 600px) {
      & .skill_text {
         width: 180px !important;
      }
   }
`;

export const Wrapper = styled.div`
   width: 100%;
   height: 100vh;
   background: ${(props) => props.theme.bg};
   background-size: cover;
   padding: 80px 20px 40px;
   /* 프로필 전체 */
   & .profile {
      max-width: 1280px;
      height: 100%;
      margin: 0 auto;
      padding: 40px 0 60px;
      /* 프로필 공통 */
      & > div {
         width: 100%;
         padding: 32px;
         margin-bottom: 64px;
         transition: all 0.4s;
         & > .title {
            text-align: center;
            & span {
               position: relative;
               display: inline-block;
               padding: 24px 0;
               font-size: 36px;
               font-weight: 500;
               color: ${(props) => props.theme.main};
               text-align: center;
               &::before {
                  content: '';
                  position: absolute;
                  left: 0;
                  right: 0;
                  width: 0;
                  bottom: 0;
                  height: 4px;
                  background: ${(props) => props.theme.main};
                  transition: all 0.4s;
               }
            }
         }
         &:hover {
            box-shadow: ${(props) => props.theme.shadow};
         }
         &:hover .title span::before {
            width: 100%;
         }
      }
      /* 소개 */
      & .about_wrap {
         & .about {
            padding: 48px 0;
            /* 사진 슬라이더 부분 */
            & .picture_wrap {
               width: 200px;
               & .slide {
                  position: relative;
                  width: 100%;
                  height: 250px;
                  &.picture {
                     & img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                     }
                  }
                  &.text {
                     background: ${(props) => props.theme.main};
                     & span {
                        display: inline-block;
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        width: 100%;
                        line-height: 22px;
                        text-align: center;
                        font-size: 14px;
                        color: ${(props) => props.theme.bg};
                        transform: translate(-50%, -50%);
                     }
                  }
               }
            }
            & > .info {
               padding-left: 60px;
               max-width: calc(100% - 200px);
               & > div {
                  padding-bottom: 40px;
                  color: ${(props) => props.theme.black};
                  &:last-child {
                     padding-bottom: 0;
                  }
                  & .title {
                     padding-bottom: 8px;
                     font-size: 20px;
                     font-weight: bold;
                  }
                  & .text {
                     font-size: 18px;
                     line-height: 26px;
                     & b {
                        font-weight: 500;
                     }
                  }
               }
            }
         }
      }
      /* 스킬 */
      & .skill_wrap {
         & .skill {
            padding: 48px 0;
            text-align: center;
         }
      }
      /* 교육 */
      & .education_wrap {
         & .education {
            padding: 48px 0;
            & > div {
               & > h2 {
                  padding-bottom: 48px;
                  font-size: 20px;
                  font-weight: bold;
                  color: ${(props) => props.theme.black};
               }
               & > div {
               }
               &.certificate_wrap {
                  padding-bottom: 32px;
                  & > div {
                     & > div {
                        margin: 0 16px 16px;
                        text-align: center;
                        color: ${(props) => props.theme.black};
                        & .mask {
                           margin: 0 auto;
                           width: 160px;
                           height: 160px;
                           border-radius: 160px;
                           background: ${(props) => props.theme.img_mask};
                           & img {
                              width: 100px;
                              height: 100px;
                              margin-top: 30px;
                           }
                        }
                        & h3 {
                           margin-top: 16px;
                           font-size: 18px;
                           font-weight: bold;
                        }
                        & h4 {
                           margin-top: 8px;
                        }
                     }
                  }
               }
               &.academy {
                  color: ${(props) => props.theme.black};
                  & h3 {
                     & span {
                        display: inline-block;
                        font-size: 18px;
                        line-height: 1.3;
                        vertical-align: middle;
                        &.icon {
                           margin-right: 8px;
                        }
                        &.text {
                           font-weight: 500;
                        }
                     }
                  }
                  & p {
                     padding-top: 16px;
                     line-height: 1.6;
                     & span {
                        &.icon {
                           margin-right: 8px;
                        }
                     }
                  }
               }
            }
         }
      }
      /* 커리어 */
      & .career_wrap {
         & .career {
            padding: 48px 0;
            & > div {
               margin-bottom: 24px;
               color: ${(props) => props.theme.black};
               & h2 {
                  font-size: 20px;
                  font-weight: bold;
               }
               & ul {
                  & li {
                     margin-top: 16px;
                     line-height: 1.3;
                  }
               }
            }
         }
      }
      /* 문의 */
      & .contact_wrap {
         & .contact {
            padding: 48px 0;
            & .info {
               text-align: center;
               word-wrap: break-word;
               & > div {
                  padding: 0 8px;
                  & .icon {
                     padding-bottom: 16px;
                     &.link {
                        cursor: pointer;
                     }
                     & svg {
                        font-size: 48px;
                        color: ${(props) => props.theme.main};
                     }
                     & img {
                        width: 48px;
                     }
                  }
                  & .text {
                     word-break: break-all;
                     font-size: 18px;
                     color: ${(props) => props.theme.main};
                  }
               }
            }
            & .map {
               margin-top: 48px;
            }
         }
      }
   }
   @media (max-width: 600px) {
      /* 프로필 전체 */
      & .profile {
         /* 소개 */
         & .about_wrap {
            & .about {
               /* 사진 슬라이더 부분 */
               & .picture_wrap {
                  max-width: 200px;
                  margin: 0 auto;
               }
               & .info {
                  padding: 48px 0 0;
                  max-width: 100%;
                  width: 100%;
               }
            }
         }
         /* 문의 */
         & .contact_wrap {
            & .contact {
               & .info {
                  & > div {
                     padding-bottom: 16px;
                     &:last-child {
                        padding-bottom: 0;
                     }
                     & .icon {
                     }
                  }
               }
               & .map {
                  margin-top: 32px;
               }
            }
         }
      }
   }
`;
