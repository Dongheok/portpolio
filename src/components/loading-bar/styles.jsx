import styled, { keyframes } from 'styled-components';

const loadingLeft = keyframes`
   0%{left:20%;}
	50%{left:50%;}
	100%{left:20%;}
`;
const loadingRight = keyframes`
   0%{left:80%;}
	50%{left:50%;}
	100%{left:80%;}
`;

const Wrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2500;
    width: 100%;
    height: 100vh;
    background: ${(props) => props.theme.white};
    visibility: hidden;
    opacity: 0;
    transition: all 0.4s;
    &.on {
        visibility: visible;
        opacity: 1;
    }
    & > div {
        width: 400px;
        height: 400px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: ${(props) => props.theme.white};
        filter: blur(10px) contrast(20);
        & > .circle {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            background: #000;
            &.circle_1 {
                left: 20%;
                animation: ${loadingLeft} 2s ease infinite;
            }
            &.circle_2 {
                left: 80%;
                animation: ${loadingRight} 2s ease infinite;
            }
        }
    }
`;

export default Wrapper;
