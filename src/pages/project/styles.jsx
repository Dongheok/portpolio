import styled from 'styled-components';

// 로딩 시, 보이는 스켈레톤 컴포넌트
export const SkeletonWrap = styled.div`
    margin: ${(props) => props.margin};
    padding: ${(props) => props.padding};
`;

// 각 프로젝트 이미지 영역 및 애니메이션
export const Mask = styled.div`
    display: none;
    height: ${(props) => `${props.height}`};
    background: url(${(props) => `${props.bgUrl}`}) no-repeat center top;
    background-size: cover;
    transition: background-position ${(props) => props.speed}s!important;
    &.main_mask {
        height: 600px;
    }
    &.sub_mask {
        height: 400px;
    }
    &:hover {
        background-position: center bottom;
    }
    &.on {
        display: block;
    }
    @media (max-width: 960px) {
        &.main_mask {
            height: 400px;
        }
    }
    @media (max-width: 600px) {
        &.main_mask {
            height: 300px;
        }
        &.sub_mask {
            height: 300px;
        }
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    padding: 80px 32px;
    background: ${(props) => props.theme.bg};
    word-break: keep-all;
    & .project_wrap {
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
        padding: 40px 0;
        & .project {
            /* 각 프로젝트 아이템 공통 */
            & .project_container {
                & .project_item {
                    width: 100%;
                    padding: 32px;
                    transition: all 0.4s;
                    &:hover {
                        box-shadow: ${(props) => props.theme.shadow};
                    }
                    & .title {
                        padding: 24px 0;
                        font-weight: 500;
                        color: ${(props) => props.theme.main};
                        & .link {
                            display: inline-block;
                            vertical-align: middle;
                            &.url {
                                margin-left: 24px;
                            }
                            & a {
                                color: ${(props) => props.theme.main};
                            }
                        }
                    }
                    & .text {
                        color: ${(props) => props.theme.main};
                        &.text_1 {
                            line-height: 1.3;
                        }
                        &.text_2 {
                            line-height: 1.6;
                        }
                    }
                }
            }
            /* 메인 프로젝트 */
            &.main_project {
                margin-bottom: 60px;
                & .project_container {
                    & .project_item {
                        & .title {
                            font-size: 36px;
                            & .link {
                                & svg {
                                    width: 36px;
                                    height: 36px;
                                }
                                & a {
                                    font-size: 36px;
                                }
                            }
                        }
                        & .text {
                            &.text_1 {
                                font-size: 24px;
                            }
                            &.text_2 {
                                margin-top: 16px;
                            }
                        }
                    }
                }
            }
            /* 서브 프로젝트 */
            &.sub_project {
                & .project_container {
                    & .project_item {
                        & .title {
                            font-size: 24px;
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
                        & .text {
                            &.text_1 {
                                padding-bottom: 8px;
                            }
                            &.text_2 {
                            }
                        }
                    }
                }
            }
        }
    }
    @media (max-width: 960px) {
        & .project_wrap {
            & .project {
                /* 각 프로젝트 아이템 공통 */
                & .project_container {
                    & .project_item {
                        & .title {
                            font-size: 24px !important;
                        }
                        & .text {
                            font-size: 16px !important;
                        }
                    }
                }
                /* 메인 프로젝트 */
                &.main_project {
                    & .project_container {
                        & .project_item {
                            & .title {
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
                        }
                    }
                }
            }
        }
    }
    @media (max-width: 960px) {
        & .project_wrap {
            & .main_project {
                margin: 0 !important;
            }
        }
    }
    @media (max-width: 600px) {
        & .project_wrap {
            & .project {
                & .project_container {
                    & .project_item {
                        padding: 16px;
                        & .title {
                            font-size: 20px !important;
                            & .link {
                                &.url {
                                    margin-left: 16px !important;
                                }
                                & svg {
                                    width: 20px !important;
                                    height: 20px !important;
                                }
                                & a {
                                    font-size: 20px !important;
                                }
                            }
                        }
                        & .text {
                            font-size: 14px !important;
                        }
                    }
                }
            }
        }
    }
`;
