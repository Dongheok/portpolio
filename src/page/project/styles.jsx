import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  /* height: 100vh; */
  padding: 80px 20px;
  background: #000;
  background-size: cover;
  box-sizing: border-box;
  * {
    word-break: keep-all;
  }
  & .Project_Text {
    width: 100%;
    padding-bottom: 20px;
    text-align: right;
    color: #404040;
    font-size: 14px;
  }
  & .Project_Wrap {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    padding: 20px;
    background: #fff;
    box-sizing: border-box;
    & > .Project {
      & > .Project_Item {
        & > .Item_Wrap {
          height: 420px;
          border: 1px solid #e1e1e1;
          background: #fff;
          box-sizing: border-box;
          & .Mask {
            height: 280px;
          }
          & .Title {
            position: relative;
            height: 40px;
            padding: 10px;
            text-align: center;
            font-weight: bold;
            color: #404040;
            border-top: 1px solid #e1e1e1;
            border-bottom: 1px solid #e1e1e1;
            box-sizing: border-box;
            & a {
              position: absolute;
              right: 20px;
              top: 50%;
              transform: translateY(-50%);
              color: #404040;
              text-decoration: none;
              cursor: pointer;
              &::before {
                content: "";
                position: absolute;
                left: 0;
                bottom: -4px;
                width: 0;
                height: 2px;
                background: #404040;
                transition: all 0.4s ease;
              }
              &:hover::before {
                width: 100%;
              }
            }
          }
          & .Text {
            height: 100px;
            padding: 10px;
            box-sizing: border-box;
            & > div {
              & h2 {
                color: #404040;
                font-weight: bold;
              }
              & h3 {
                line-height: 20px;
                padding-left: 10px;
                font-size: 14px;
                color: #404040;
                box-sizing: border-box;
              }
            }
          }
        }
        /* 프로젝트 이미지 */
        &:nth-child(1) {
          & .Item_Wrap {
            & .Mask {
              background: url("/portpolio/images/project/project_1.png");
              background-size: cover;
              transition: all 10s;
            }
          }
        }
        &:nth-child(2) {
          & .Item_Wrap {
            & .Mask {
              background: url("/portpolio/images/project/project_2.png");
              background-size: cover;
              transition: all 5s;
            }
          }
        }
        &:nth-child(3) {
          & .Item_Wrap {
            & .Mask {
              background: url("/portpolio/images/project/project_3.png");
              background-size: cover;
              transition: all 5s;
            }
          }
        }
        &:nth-child(4) {
          & .Item_Wrap {
            & .Mask {
              background: url("/portpolio/images/project/project_4.jpg");
              background-size: cover;
              transition: all 5s;
            }
          }
        }
        &:nth-child(5) {
          & .Item_Wrap {
            & .Mask {
              background: url("/portpolio/images/project/project_5.jpg");
              background-size: cover;
              transition: all 10s;
            }
          }
        }
        &:nth-child(6) {
          & .Item_Wrap {
            & .Mask {
              background: url("/portpolio/images/project/project_6.png");
              background-size: cover;
              transition: all 10s;
            }
          }
        }
        /* 맥도날드 */
        &:nth-child(7) {
          & .Item_Wrap {
            & .Mask {
              background: url("/portpolio/images/project/project_7.png") center
                top;
              background-size: cover;
              transition: all 10s;
            }
          }
        }
        /* 서브웨이 */
        &:nth-child(8) {
          & .Item_Wrap {
            & .Mask {
              background: url("/portpolio/images/project/project_8.png") center
                top;
              background-size: cover;
              transition: all 10s;
            }
          }
        }
        /* CJ HELLO */
        &:nth-child(9) {
          & .Item_Wrap {
            & .Mask {
              background: url("/portpolio/images/project/project_9.png") center
                top;
              background-size: cover;
              transition: all 10s;
            }
          }
        }
        /* 햔대글로비스 */
        &:nth-child(10) {
          & .Item_Wrap {
            & .Mask {
              background: url("/portpolio/images/project/project_10.png") center
                top;
              background-size: cover;
              transition: all 3s;
            }
          }
        }
        /* 캐논 */
        &:nth-child(11) {
          & .Item_Wrap {
            & .Mask {
              background: url("/portpolio/images/project/project_11.jpg") center
                top;
              background-size: cover;
              transition: all 3s;
            }
          }
        }
        /* 삼양 */
        &:nth-child(12) {
          & .Item_Wrap {
            & .Mask {
              background: url("/portpolio/images/project/project_12.jpg") center
                top;
              background-size: cover;
              transition: all 3s;
            }
          }
        }
        /* 넷마블*/
        &:nth-child(13) {
          & .Item_Wrap {
            & .Mask {
              background: url("/portpolio/images/project/project_13.jpg") center
                top;
              background-size: cover;
              transition: all 3s;
            }
          }
        }
        /*커핀그루나루 */
        &:nth-child(14) {
          & .Item_Wrap {
            & .Mask {
              background: url("/portpolio/images/project/project_14.jpg") center
                top;
              background-size: cover;
              transition: all 3s;
            }
          }
        }
        /* 도미노 */
        &:nth-child(15) {
          & .Item_Wrap {
            & .Mask {
              background: url("/portpolio/images/project/project_15.jpg") center
                top;
              background-size: cover;
              transition: all 3s;
            }
          }
        }
        /* 포스코 사회공헌 */
        &:nth-child(16) {
          & .Item_Wrap {
            & .Mask {
              background: url("/portpolio/images/project/project_16.jpg") center
                top;
              background-size: cover;
              transition: all 3s;
            }
          }
        }
        /* 포도팟 */
        &:nth-child(17) {
          & .Item_Wrap {
            & .Mask {
              background: url("/portpolio/images/project/project_17.jpg") center
                top;
              background-size: cover;
              transition: all 10s;
            }
          }
        }
        /* 레스포삭 */
        &:nth-child(18) {
          & .Item_Wrap {
            & .Mask {
              background: url("/portpolio/images/project/project_18.jpg") center
                top;
              background-size: cover;
              transition: all 10s;
            }
          }
        }
        /* 미스터스트릿 */
        &:nth-child(19) {
          & .Item_Wrap {
            & .Mask {
              background: url("/portpolio/images/project/project_19.jpg") center
                top;
              background-size: cover;
              transition: all 10s;
            }
          }
        }
        /*!!!마우스 오버 시 효과!!!*/
        & .Item_Wrap {
          & .Mask:hover {
            background-position: center bottom;
          }
        }
      }
    }
  }
`;

export default Wrapper;
