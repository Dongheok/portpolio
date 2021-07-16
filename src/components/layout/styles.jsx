import styled from 'styled-components';
import { imgUrl } from 'config';

const Wrapper = styled.div`
    /* 헤더 */
    & .header {
        overflow: hidden;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 80px;
        padding: 0 32px;
        background: ${(props) => props.theme.bg};
        & > div {
            /* 로고 */
            &.logo {
                width: 62px;
                height: 40px;
                margin-top: 20px;
                background: url('${imgUrl}/logo.svg') no-repeat;
                text-indent: -99999px;
                cursor: pointer;
                &.on {
                    background: url('${imgUrl}/logo_w.svg') no-repeat;
                }
            }
            /* 네비게이션 */
            &.nav_wrap {
                & .nav {
                    & > div {
                        /* 글로벌 네비게이션 바 */
                        &.gnb_wrap {
                            & .gnb {
                                height: 80px;
                                & div {
                                    margin-left: 24px;
                                    & span {
                                        color: ${(props) => props.theme.main};
                                        font-weight: 500;
                                        font-size: 18px;
                                        cursor: pointer;
                                    }
                                }
                            }
                        }
                        /* 유틸 */
                        &.util_wrap {
                            & .util {
                                height: 80px;
                                & div {
                                    padding: 0 0 0 24px;
                                    & button {
                                        height: 32px;
                                        & svg {
                                            color: ${(props) => props.theme.main};
                                            font-size: 32px;
                                        }
                                    }
                                    & a {
                                        display: block;
                                        & svg {
                                            color: ${(props) => props.theme.main};
                                            font-size: 32px;
                                        }
                                        & img {
                                            width: 32px;
                                            height: 32px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default Wrapper;
