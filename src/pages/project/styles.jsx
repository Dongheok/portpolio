import styled from "styled-components";

export const SkeletonWrap = styled.div`
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
`;

export const Mask = styled.div`
  display: none;
  height: ${(props) => `${props.height}`};
  background: url(${(props) => `${props.bgUrl}`}) no-repeat center top;
  background-size: cover;
  transition: background-position ${(props) => props.speed}s!important;
  &:hover {
    background-position: center bottom;
  }
  &.on {
    display: block;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 80px 32px;
  background: ${(props) => props.theme.bg};
  word-break: keep-all;
  * {
    transition: all 0.3s;
  }
  & .project_wrap {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 40px 0;
    & .main_project {
      padding: 32px;
      /* padding: 32px 32px 56px 32px; */
      margin-bottom: 60px;
      transition: all 0.4s;
      &:hover {
        box-shadow: ${(props) => props.theme.shadow};
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
        & .text {
          line-height: 1.3;
          color: ${(props) => props.theme.main};
          &.text_1 {
            font-size: 24px;
          }
          &.text_2 {
            margin-top: 16px;
            font-size: 16px;
          }
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
      & .link {
        display: inline-block;
        vertical-align: middle;
        &.git {
          margin-right: 24px;
        }
        & svg {
          width: 36px;
          height: 36px;
        }
        & a {
          color: ${(props) => props.theme.main};
          & i {
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
            box-shadow: ${(props) => props.theme.shadow};
          }
          & > .item_wrap {
            & > div {
              &.title {
                & > div {
                  padding: 24px 0;
                  font-size: 24px;
                  font-weight: 500;
                  color: ${(props) => props.theme.main};
                }
              }
              &.text {
                font-size: 16px;
                color: ${(props) => props.theme.main};
                &.text_1 {
                  padding-bottom: 8px;
                  line-height: 1.3;
                }
                &.text_2 {
                  line-height: 1.6;
                }
              }
            }
          }
        }
      }
      & .link {
        display: inline-block;
        &.git {
          margin-right: 24px;
        }
        & svg {
          width: 24px;
          height: 24px;
        }
        & a {
          font-size: 24px;
          color: ${(props) => props.theme.main};
          & i {
          }
        }
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
            line-height: 1.3;
            color: ${(props) => props.theme.main};
            &.text_1 {
              font-size: 20px;
            }
            &.text_2 {
              margin-top: 16px;
              font-size: 14px;
            }
          }
        }
        & .link {
          & svg {
            width: 24px;
            height: 24px;
          }
          & a {
            font-size: 24px;
          }
        }
      }
      & .sub_project {
        & > .project {
          & > .project_item {
            & > .item_wrap {
              & > div {
                &.title {
                  & > div {
                    font-size: 24px;
                  }
                }
                &.text {
                  font-size: 14px;
                }
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 600px) {
    & .project_wrap {
      & .main_project {
        /* padding: 16px 16px 40px 16px; */
        padding: 16px;
        & .slide {
          & .title {
            font-size: 18px;
          }
          & .text {
            font-size: 12px;
          }
        }
      }
      & .sub_project {
        & > .project {
          & > .project_item {
            padding: 16px;
            & > .item_wrap {
              & > div {
                &.title {
                  & > div {
                    font-size: 18px;
                  }
                }
              }
            }
          }
        }
      }
      & .link {
        &.git {
          margin-right: 16px !important;
        }
        & svg {
          width: 18px;
          height: 18px;
        }
        & a {
          font-size: 18px;
        }
      }
    }
  }
`;
