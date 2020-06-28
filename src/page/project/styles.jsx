import styled from 'styled-components';

export const Mask = styled.div`
    height: 380px;
    background: url(${(props) => `${props.bgUrl}`}) no-repeat center top;
    background-size: cover;
    transition: all 10s;
    &:hover {
        background-position: center bottom;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    padding: 80px 32px;
    background: #fff;
    word-break: keep-all;
    box-sizing: border-box;

    & .Project_Wrap {
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
        padding: 40px 0;
        & .Main_Project {
            padding: 32px;
            margin-bottom: 60px;
            box-sizing: border-box;
            transition: all 0.4s;
            &:hover {
                box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
            }
            & .Project_Img {
                width: 100%;
                height: 600px;
                background: url('/portpolio/images/project/main_project.png') no-repeat center top;
                background-size: cover;
                transition: all 4s;
                cursor: pointer;
                &:hover {
                    background-position: center bottom;
                }
            }
            & .Title {
                padding: 24px 0;
                font-size: 36px;
                font-weight: 500;
                color: #444;
            }
            & .Text {
                font-size: 24px;
                color: #444;
            }
        }
        & .Sub_Project {
            width: 100%;
            box-sizing: border-box;
            & > .Project {
                & > .Project_Item {
                    height: 580px;
                    padding: 32px;
                    box-sizing: border-box;
                    transition: all 0.4s;
                    &:hover {
                        box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
                    }
                    & > .Item_Wrap {
                        & .Text {
                            & h2 {
                                padding: 24px 0;
                                font-size: 24px;
                                color: #444;
                            }
                            & h3 {
                                line-height: 24px;
                                font-size: 16px;
                                color: #444;
                            }
                        }
                    }
                }
            }
        }
    }
`;
