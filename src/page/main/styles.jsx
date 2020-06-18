import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: url('/images/main_bg.jpg') no-repeat;
    background-size: cover;
    box-sizing: border-box;
    & .Main {
        width: 100%;
        height: 100vh;
        & .Title {
            width: 100%;
            color: #fff;
            font-size: 48px;
            letter-spacing: 2px;
            text-align: center;
        }
    }
`;

export default Wrapper;
