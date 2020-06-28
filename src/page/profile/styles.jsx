import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: #fff;
    background-size: cover;
    padding: 80px 0 40px;
    box-sizing: border-box;
    & .Profile {
        max-width: 1280px;
        height: 100%;
        margin: 0 auto;
        padding: 40px 0 60px;
        & > div {
            width: 100%;
            padding: 32px;
            box-sizing: border-box;
            transition: all 0.4s;
            & .Title {
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
            &:hover .Title span::before {
                width: 100%;
            }
        }
        & .About {
            & .Info {
                padding-top: 24px;
                & .Picture {
                    & > div {
                        max-width: 200px;
                        width: 100%;
                        height: 200px;
                        background: #444;
                    }
                }
                & .Text {
                    background: #ccc;
                }
            }
        }
        & .Skill {
            padding-top: 60px;
        }
    }
`;

export default Wrapper;
