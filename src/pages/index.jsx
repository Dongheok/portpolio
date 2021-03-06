/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from 'context';

import { Grid } from '@material-ui/core';
// import { imgUrl } from 'config';
import Wrapper from './styles';

const Portpolio = () => {
    const { state, isLoadingFunction } = useContext(UserContext);
    const history = useHistory();

    // DOM을 사용하기 위한 Ref
    const wrapRef = useRef(null);

    // 0번째 애니메이션
    const containerRef0 = useRef(null);
    const messageARef0 = useRef(null);
    const messageBRef0 = useRef(null);
    const messageCRef0 = useRef(null);
    const messageDRef0 = useRef(null);

    // 1번째 애니메이션
    const containerRef1 = useRef(null);
    const messageARef1 = useRef(null);
    const messageBRef1 = useRef(null);
    const logoRef1 = useRef(null);
    const ribbonPathRef1 = useRef(null);
    // 2번째
    const containerRef2 = useRef(null);

    const sceneInfo = [
        {
            type: 'sticky',
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: containerRef0,
                messageA: messageARef0,
                messageB: messageBRef0,
                messageC: messageCRef0,
                messageD: messageDRef0,
            },
            values: {
                // A
                messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
                messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
                messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
                messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
                // B
                messageB_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
                messageB_translateY_in: [20, 0, { start: 0.3, end: 0.4 }],
                messageB_opacity_out: [1, 0, { start: 0.45, end: 0.5 }],
                messageB_translateY_out: [0, -20, { start: 0.45, end: 0.5 }],
                // C
                messageC_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
                messageC_translateY_in: [20, 0, { start: 0.5, end: 0.6 }],
                messageC_opacity_out: [1, 0, { start: 0.65, end: 0.7 }],
                messageC_translateY_out: [0, -20, { start: 0.65, end: 0.7 }],
                // D
                messageD_opacity_in: [0, 1, { start: 0.7, end: 0.8 }],
                messageD_translateY_in: [20, 0, { start: 0.7, end: 0.8 }],
                messageD_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
                messageD_translateY_out: [0, -20, { start: 0.85, end: 0.9 }],
            },
        },
        {
            type: 'sticky',
            heightNum: 3, // 브라우저 높이의 3배로 scrollHeight 세팅
            scrollHeight: 0,
            objs: {
                container: containerRef1,
                messageA: messageARef1,
                messageB: messageBRef1,
                logo: logoRef1,
                ribbonPath: ribbonPathRef1,
            },
            values: {
                // 메세지A 애니메이션
                messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
                messageA_opacity_out: [1, 0, { start: 0.3, end: 0.4 }],
                messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
                messageA_translateY_out: [0, -20, { start: 0.3, end: 0.4 }],
                // 메세지B 애니메이션
                messageB_opacity_in: [0, 1, { start: 0.4, end: 0.5 }],
                messageB_opacity_out: [1, 0, { start: 0.6, end: 0.7 }],
                // 로고 애니메이션
                logo_width_in: [1000, 200, { start: 0.1, end: 0.4 }],
                logo_width_out: [200, 50, { start: 0.4, end: 0.8 }],
                logo_translateX_in: [-10, -20, { start: 0.2, end: 0.4 }],
                logo_translateX_out: [-20, -50, { start: 0.4, end: 0.8 }],
                logo_opacity_out: [1, 0, { start: 0.8, end: 0.9 }],
                // path 애니메이션
                path_dashoffset_in: [1401, 0, { start: 0.2, end: 0.4 }],
                path_dashoffset_out: [0, -1401, { start: 0.6, end: 0.8 }],
            },
        },
        {
            type: 'normal',
            heightNum: 0, // 브라우저 높이의 3배로 scrollHeight 세팅
            scrollHeight: 0,
            objs: {
                container: containerRef2,
            },
        },
    ];

    useEffect(() => {
        isLoadingFunction(true);
        // 메인 애니메이션
        const wrap = wrapRef.current; // body 대용
        let prevScrollHeight = 0; // 현재 스크롤 위치보다 이전에 위치한 스크롤 섹션들의 스크롤 높이의 합
        let currentScene = 0; // 현제 활성화된 씬
        let enterNewScene = false; // 씬이 변경될때 스위치
        // 현재 스크롤 값을 yOffset에 담기

        const setLayout = () => {
            // 각 스크롤 섹션의 높이 세팅
            for (let i = 0; i < sceneInfo.length; i += 1) {
                if (sceneInfo[i].type === 'sticky') {
                    sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
                } else if (sceneInfo[i].type === 'normal') {
                    // !!
                    sceneInfo[i].scrollHeight = window.innerHeight;
                }
                sceneInfo[i].objs.container.current.style.height = `${sceneInfo[i].scrollHeight}px`;
            }
            // 새로고침 시 전 씬 값 세팅
            let totalScrollHeight = 0;
            for (let i = 0; i < sceneInfo.length; i += 1) {
                totalScrollHeight += sceneInfo[i].scrollHeight;
                if (totalScrollHeight >= window.pageYOffset) {
                    currentScene = i;
                    break;
                }
            }
            wrap.setAttribute('id', `show_scene_${currentScene}`);
        };

        // 애니메이션 비율 값 계산 함수
        const calcValues = (values, currentYOffset) => {
            let result;
            // 현재 씬(스크롤섹션)에서 스크롤된 범위를 비율로 구하기
            const { scrollHeight } = sceneInfo[currentScene];
            const scrollRatio = currentYOffset / scrollHeight;

            if (values.length === 3) {
                // start ~ end 사이에 애니메이션 실행
                const partScrollStart = values[2].start * scrollHeight;
                const partScrollEnd = values[2].end * scrollHeight;
                const partScrollHeight = partScrollEnd - partScrollStart;

                if (currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd) {
                    result = ((currentYOffset - partScrollStart) / partScrollHeight) * (values[1] - values[0]) + values[0];
                } else if (currentYOffset < partScrollStart) {
                    const value = values[0];
                    result = value;
                } else if (currentYOffset > partScrollEnd) {
                    const value = values[1];
                    result = value;
                }
            } else {
                result = scrollRatio * (values[1] - values[0]) + values[0];
            }

            return result;
        };

        // 애니메이션 처리 함수
        const playAnimation = () => {
            const { objs } = sceneInfo[currentScene];
            const { values } = sceneInfo[currentScene];
            const currentYOffset = window.pageYOffset - prevScrollHeight;
            const { scrollHeight } = sceneInfo[currentScene];
            const scrollRatio = currentYOffset / scrollHeight;

            switch (currentScene) {
                case 0:
                    if (scrollRatio <= 0.22) {
                        // in
                        objs.messageA.current.style.opacity = calcValues(values.messageA_opacity_in, currentYOffset);
                        objs.messageA.current.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_in, currentYOffset)}%, 0)`;
                    } else {
                        // out
                        objs.messageA.current.style.opacity = calcValues(values.messageA_opacity_out, currentYOffset);
                        objs.messageA.current.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_out, currentYOffset)}%, 0)`;
                    }

                    if (scrollRatio <= 0.42) {
                        // in
                        objs.messageB.current.style.opacity = calcValues(values.messageB_opacity_in, currentYOffset);
                        objs.messageB.current.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_in, currentYOffset)}%, 0)`;
                    } else {
                        // out
                        objs.messageB.current.style.opacity = calcValues(values.messageB_opacity_out, currentYOffset);
                        objs.messageB.current.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_out, currentYOffset)}%, 0)`;
                        // 백그라운드 세팅
                    }

                    if (scrollRatio <= 0.62) {
                        // in
                        objs.messageC.current.style.opacity = calcValues(values.messageC_opacity_in, currentYOffset);
                        objs.messageC.current.style.transform = `translate3d(0, ${calcValues(values.messageC_translateY_in, currentYOffset)}%, 0)`;
                    } else {
                        // out
                        objs.messageC.current.style.opacity = calcValues(values.messageC_opacity_out, currentYOffset);
                        objs.messageC.current.style.transform = `translate3d(0, ${calcValues(values.messageC_translateY_out, currentYOffset)}%, 0)`;
                    }

                    if (scrollRatio <= 0.82) {
                        // in
                        objs.messageD.current.style.opacity = calcValues(values.messageD_opacity_in, currentYOffset);
                        objs.messageD.current.style.transform = `translate3d(0, ${calcValues(values.messageD_translateY_in, currentYOffset)}%, 0)`;
                    } else {
                        // out
                        objs.messageD.current.style.opacity = calcValues(values.messageD_opacity_out, currentYOffset);
                        objs.messageD.current.style.transform = `translate3d(0, ${calcValues(values.messageD_translateY_out, currentYOffset)}%, 0)`;
                    }
                    break;
                case 1:
                    if (scrollRatio > 0.2) {
                        wrap.style.background = `#fff`;
                    } else {
                        wrap.style.background = `#000`;
                    }
                    if (scrollRatio <= 0.25) {
                        // in
                        objs.messageA.current.style.opacity = calcValues(values.messageA_opacity_in, currentYOffset);
                        objs.messageA.current.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_in, currentYOffset)}%, 0)`;
                    } else {
                        // out
                        objs.messageA.current.style.opacity = calcValues(values.messageA_opacity_out, currentYOffset);
                        objs.messageA.current.style.transform = `translate3d(0, ${calcValues(values.messageA_translateY_out, currentYOffset)}%, 0)`;
                    }

                    if (scrollRatio <= 0.55) {
                        // in
                        objs.messageB.current.style.opacity = calcValues(values.messageB_opacity_in, currentYOffset);
                    } else {
                        // out
                        objs.messageB.current.style.opacity = calcValues(values.messageB_opacity_out, currentYOffset);
                    }

                    // 크기가 커져도 깨지지 않는 SVG의 장점을 살리기 위해 transform scale 대신 width를 조정
                    if (scrollRatio <= 0.4) {
                        objs.logo.current.style.width = `${calcValues(values.logo_width_in, currentYOffset)}vw`;
                        objs.logo.current.style.transform = `translate(${calcValues(values.logo_translateX_in, currentYOffset)}%, -50%)`;
                    } else {
                        objs.logo.current.style.width = `${calcValues(values.logo_width_out, currentYOffset)}vw`;
                        objs.logo.current.style.transform = `translate(${calcValues(values.logo_translateX_out, currentYOffset)}%, -50%)`;
                    }

                    // 빨간 리본 패스(줄 긋기)
                    if (scrollRatio <= 0.5) {
                        objs.ribbonPath.current.style.strokeDashoffset = calcValues(values.path_dashoffset_in, currentYOffset);
                    } else {
                        objs.ribbonPath.current.style.strokeDashoffset = calcValues(values.path_dashoffset_out, currentYOffset);
                    }

                    objs.logo.current.style.opacity = calcValues(values.logo_opacity_out, currentYOffset);

                    break;
                default:
            }
        };

        // 스크롤 시 실행될 함수
        const scrollLoop = () => {
            enterNewScene = false;
            prevScrollHeight = 0;

            for (let i = 0; i < currentScene; i += 1) {
                prevScrollHeight += sceneInfo[i].scrollHeight;
            }

            //   현재 스크롤이 만약 2번이면 2번까지의 높이보다 크냐
            if (window.pageYOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
                enterNewScene = true;

                //  넘어갔으면 현재 씬 값을 ++ 해라
                currentScene += 1;
            }
            //   현재 스크롤이 만약 2번이면 1번까지의 높이보다 작냐
            if (window.pageYOffset < prevScrollHeight) {
                enterNewScene = true;
                //  바운스 효과로 인한 값이-1로 갈 수도 있으니
                if (currentScene === 0) {
                    return;
                }
                currentScene -= 1;
            }
            //   스크롤 값에 따른 currentScene이 정해졌으면 해당 currentScene의 메세지를 보여라
            wrap.setAttribute('id', `show_scene_${currentScene}`);
            // currentScene이 증가하거나 감소할때는 -값이 들어갈 수도 있으니 그때는 애니메이션 잠깐 멈춰라
            if (!enterNewScene) {
                playAnimation();
            }
        };
        // 렌더되면 세팅 처리
        setLayout();
        // 이벤트들
        window.addEventListener('resize', setLayout);
        window.addEventListener('scroll', scrollLoop);
        setTimeout(() => {
            isLoadingFunction(false);
        }, 2000);
        return () => {
            window.removeEventListener('resize', setLayout);
            window.removeEventListener('scroll', scrollLoop);
        };
    }, []);

    return (
        <Wrapper ref={wrapRef}>
            <Grid className="main">
                {/*  */}
                <Grid ref={containerRef0} className="scroll_section scroll_section_0">
                    <h2>김동혁 포트폴리오</h2>
                    {/* <h2>DongHyuk Portpolio</h2> */}
                    <Grid ref={messageARef0} className="sticky_elem main_message">
                        <p>안녕하세요.</p>
                    </Grid>
                    <Grid ref={messageBRef0} className="sticky_elem main_message">
                        <p>새로운 웹 어플리케이션을 만들어 보고 겪으며</p>
                    </Grid>
                    <Grid ref={messageCRef0} className="sticky_elem main_message">
                        <p>함께 성장하고 싶어</p>
                    </Grid>
                    <Grid ref={messageDRef0} className="sticky_elem main_message">
                        <p>
                            산업기능요원 보충역
                            <br />
                            프론트엔드 개발자로 지원한
                        </p>
                    </Grid>
                </Grid>
                {/*  */}
                <Grid ref={containerRef1} className="scroll_section scroll_section_1">
                    <h2>김동혁입니다.</h2>
                    <object ref={logoRef1} className="sticky_elem logo" aria-label="logo" data="/portpolio/images/name_logo.svg" type="image/svg+xml" />
                    {/* 메세지 A */}
                    <Grid ref={messageARef1} className="sticky_elem main_message">
                        <p>!!!</p>
                    </Grid>
                    {/* 메세지 끝난 후 나오는 path 이미지 */}
                    <span className="sticky_elem ribbon_path">
                        <svg id="Layer_1" className="path" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 450">
                            <path
                                ref={ribbonPathRef1}
                                className="stroke"
                                d="M709,41.5c-194,38-387,122-455,159c-64.13,34.89-73.4,42.42,20,26c82.5-14.5,126.34-33.68,185-38 c47.5-3.5,69.22,7.98-11,39c-75,29-251,98-459,169"
                            />
                        </svg>
                    </span>
                    <Grid ref={messageBRef1} className="sticky_elem main_message logo_text">
                        <p>김동혁</p>
                    </Grid>
                </Grid>
                {/*  */}
                <Grid ref={containerRef2} className="scroll_section scroll_section_2">
                    <Grid container alignItems="center" spacing={5} className="btn_wrap">
                        {state.btn_wrap.map((x) => (
                            <Grid key={x.key} item xs={12} sm={4}>
                                {x.key !== '/git' ? (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            history.push(x.key);
                                            window.scrollTo(0, 0);
                                        }}
                                    >
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                        <em>{x.value}</em>
                                    </button>
                                ) : (
                                    <a href="https://github.com/dev-donghyuk" target="_blank" rel="noopener noreferrer">
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                        <em>{x.value}</em>
                                    </a>
                                )}
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Wrapper>
    );
};

export default Portpolio;
