import styled from 'styled-components';

const Wrapper = styled.div`
    position: relative;
    & .Main {
        width: 100%;
        height: 100vh;
        padding: 0 32px;
        background: #fff url('/portpolio/images/pngwing.com.png') no-repeat center center;
        box-sizing: border-box;
        & .Info {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            & h2 {
                color: #fff;
                font-size: 48px;
                letter-spacing: 2px;
                text-align: center;
            }
            & > div {
                padding: 64px 32px 32px;
                & button {
                    width: 200px;
                    height: 50px;
                    color: #fff;
                    font-size: 14px;
                    font-family: 'Noto Sans KR', 'AppleSDGothicNeoR00', sans-serif !important;
                    border: 2px solid #fff;
                    background: none;
                    outline: none;
                    cursor: pointer;
                    &.Btn_Project {
                        margin-right: 12px;
                    }
                    &.Btn_Profile {
                    }
                }
            }
        }
    }
`;

export default Wrapper;
