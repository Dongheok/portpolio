import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: #fff;
    background-size: cover;
    padding: 120px 0 40px;
    box-sizing: border-box;
    & .Profile {
        max-width: 1280px;
        height: 100%;
        margin: 0 auto;
        padding: 0 32px;
        box-sizing: border-box;
        & .Info {
            width: 100%;
            & .Picture {
                & .Picture_Box {
                    width: 210px;
                    height: 280px;
                    margin: 0 auto;
                    /* background: url('/portpolio/images/profile_picture.jpg') no-repeat center top -10px; */
                    background: #444;
                    background-size: cover;
                }
            }
            & .Title {
                color: #444;
                & > div {
                    padding-bottom: 10px;
                    &:last-child {
                        padding-bottom: 0;
                    }
                    & h2 {
                        line-height: 28px;
                        padding-bottom: 10px;
                        font-size: 20px;
                        font-weight: bold;
                    }
                    & h3 {
                        line-height: 24px;
                    }
                    & ul {
                        overflow: hidden;
                        & li {
                            float: left;
                            padding-right: 10px;
                        }
                    }
                }
            }
        }
        & .Ability {
            padding: 40px 20px;
            box-sizing: border-box;
            & ul {
                text-align: center;
                & > li {
                    position: relative;
                    display: inline-block;
                    width: 100px;
                    height: 100px;
                    line-height: 22px;
                    margin: 10px;
                    border: 2px solid #ccc;
                    border-radius: 100px;
                    box-sizing: border-box;
                    transition: all 0.4s ease;
                    &:hover {
                        box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
                    }
                    & span {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        color: #ccc;
                        font-size: 14px;
                        font-weight: bold;
                    }
                }
            }
        }
        & .History {
            & > div {
                padding-bottom: 20px;
                & h2 {
                    padding-bottom: 10px;
                    color: #444;
                    font-size: 18px;
                    font-weight: bold;
                }
                & > ul {
                    & li {
                        color: #444;
                        padding-bottom: 10px;
                        &:last-child {
                            padding-bottom: 0;
                        }
                    }
                }
            }
        }
    }
    @media (max-width: 960px) {
        height: 100%;
    }
    @media (max-width: 600px) {
        & .Profile {
            & .Info {
                & .Picture {
                    padding-bottom: 40px;
                }
            }
        }
    }
`;

export default Wrapper;
