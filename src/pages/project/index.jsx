/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Wrapper, Mask } from './styles';
import Layout from '../../layout';

import Slider from 'react-slick';

var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5000,
};

const main_project_data = [
    {
        project_title: 'Donflix',
        project_text_1: 'React를 이용한 외국 영화 사이트 클론 구현',
        link: 'https://dongheok.github.io/dongflix/',
    },
    {
        project_title: '플레이 조커',
        project_text_1: 'React를 이용한 플랫폼 사이트 구현',
        link: 'http://www.playjoker.kr',
    },
];

const sub_project_data = [
    // 배달의딜러CMS
    {
        project_title: '배달의딜러CMS',
        project_text_1: 'React를 이용한 홈페이지의 전체 UI 완벽 구현',
        project_text_2: 'Redux를 이용한 전역 상태 관리와 Api 통신 구현',
        // 임시
        link: '',
    },
    // 동네선수CMS
    {
        project_title: '동네선수CMS',
        project_text_1: 'React를 이용한 홈페이지의 전체 UI 완벽 구현',
        project_text_2: 'Redux를 이용한 전역 상태 관리와 Api 통신 구현',
        // 임시
        link: 'http://as-prod-cms.s3-website-ap-northeast-1.amazonaws.com/post-list',
    },
    // 손사찾기
    {
        project_title: '손사찾기',
        project_text_1: 'Nextjs를 이용한 홈페이지의 전체 UI 완벽 구현',
        project_text_2: '반응형 웹과 크로스 브라우징 완벽 구현',
        link: 'https://www.sonsafind.com',
    },
    // 에그플래너
    {
        project_title: '애그플래너',
        project_text_1: '홈페이지의 전체 UI 구현',
        project_text_2: '반응형 웹과 크로스 브라우징 완벽 구현',
        link: 'https://www.eggteachers.com',
    },
    // SV VIBA
    {
        project_title: 'SV VIBA',
        project_text_1: '홈페이지의 전체 UI 구현',
        project_text_2: '반응형 웹과 크로스 브라우징 완벽 구현',
        link: 'http://www.svviba.com/',
    },
    // SV Data
    {
        project_title: 'SV DATA',
        project_text_1: 'React를 이용한 홈페이지의 전체 UI 완벽 구현',
        project_text_2: '반응형 웹과 크로스 브라우징 완벽 구현',
        link: 'http://www.sv-data.com/',
    },
    // SSAFY
    {
        project_title: 'SSAFY',
        project_text_1: '프로젝트 UI 전체 구현',
        // project_text_2: '',
        link: '',
    },
    // SHUTTLEB
    {
        project_title: 'SHUTTLE_B CMS',
        project_text_1: 'React로 CMS페이지 프론트엔드 작업 완벽 구현',
        project_text_2: 'Redux를 이용한 전역 상태 관리와 Api 통신 구현',
        link: '',
    },
    // XY
    {
        project_title: 'XY Web',
        project_text_1: 'React를 이용한 홈페이지의 전체 UI 완벽 구현',
        project_text_2: '반응형 웹과 크로스 브라우징 완벽 구현',
        link: 'https://www.xydating.app/',
    },
    // 파이어니
    {
        project_title: 'PION',
        project_text_1: '직접 디자인하여 이벤트 페이지 완벽 구현',
        // project_text_2: '',
        link: '',
    },
    {
        project_title: '맥도날드',
        project_text_1: '(메인,서브)페이지를 디자인하여 시안을 직접 제작해서 UI를 구현할 수 있습니다.',
        // project_text_2: '',
        link: 'http://sn237x.cafe24.com/web/personal-project/mcdonald/index.html',
    },
    {
        project_title: '서브웨이',
        project_text_1: '(메인,서브)페이지를 디자인하여 시안을 직접 제작해서 UI를 구현할 수 있습니다.',
        // project_text_2: '',
        link: 'http://sn237x.cafe24.com/web/personal-project/subway/index.html',
    },
    {
        project_title: 'CJ Hello',
        project_text_1: '메인페이지 시안을 제작하여 구현할 수 있습니다.',
        // project_text_2: '',
        link: 'http://sn237x.cafe24.com/web/personal-project/cj-hello/index.html',
    },
    {
        project_title: '현대글로비스',
        project_text_1: '반응형 웹을 직접 구현할 수 있습니다.',
        project_text_2: '비디오 슬라이드를 구현할 수 있고, 모달 팝업을 구현할 수 있습니다.',
        link: 'http://myvtr1000sp1.dothome.co.kr/hyundai/index.html',
    },
    {
        project_title: '캐논',
        project_text_1: '(메인,배너)슬라이드 구현,',
        project_text_2: '(재생,일시정지)버튼 구현',
        link: 'http://sn237x.cafe24.com/web/personal-project/canon/index.html',
    },
    {
        project_title: '삼양식품',
        project_text_1: '(메인,배너)슬라이드 구현,',
        project_text_2: '(유튜브)모달팝업 구현',
        link: 'http://sn237x.cafe24.com/web/personal-project/samyang/index.html',
    },
    {
        project_title: '넷마블',
        project_text_1: '직접 디자인, (메인,배너)슬라이드 구현,',
        project_text_2: '왼쪽 상단 퀵 메뉴 구현, 탭 메뉴 구현',
        link: 'http://sn237x.cafe24.com/web/personal-project/netmarble/index.html',
    },
    {
        project_title: '커핀그루나루',
        project_text_1: '(메인,배너)슬라이드 구현,',
        project_text_2: '탭(버튼,메뉴) 구현',
        link: 'http://sn237x.cafe24.com/web/personal-project/coffine-gurunaru/index.html',
    },
    {
        project_title: '도미노',
        project_text_1: '메인 슬라이더 구현, 퀵 메뉴 버튼 구현',
        // project_text_2: '',
        link: 'http://sn237x.cafe24.com/web/personal-project/domino/index.html',
    },
    {
        project_title: '포스코 사회공헌',
        project_text_1: '원 페이지 스크롤 구현, 슬라이드 구현,',
        project_text_2: '퀵 메뉴 버튼 구현, (유튜브)모달팝업 구현',
        link: `http://sn237x.cafe24.com//web/personal-project/posco/index.html`,
    },
    {
        project_title: '포도팟',
        project_text_1: '10개 이상의 애니메이션을 제이쿼리로 구현',
        // project_text_2: '',
        link: 'http://sn237x.cafe24.com/web/personal-project/podopod/index.html',
    },
    {
        project_title: '레스포삭',
        project_text_1: '(광고)모달 팝업 구현,',
        project_text_2: '슬라이드 구현, 애니메이션 구현',
        link: 'http://sn237x.cafe24.com/web/personal-project/lesportsac/index.html',
    },
];

const Project = () => {
    return (
        <Wrapper>
            <Layout>
                <Grid className="project_wrap">
                    <Grid className="main_project">
                        <Slider {...settings}>
                            {main_project_data.map((x, index) => {
                                return (
                                    <Grid className="slide">
                                        <Mask height="600px" bgUrl={`/portpolio/images/project/main_project_${index + 1}.png`} />
                                        <Grid className="link">
                                            <a href={x.link} target="blank">
                                                &nbsp;
                                            </a>
                                        </Grid>
                                        <Grid className="title">{x.project_title}</Grid>
                                        <Grid className="text">{x.project_text_1}</Grid>
                                    </Grid>
                                );
                            })}
                        </Slider>
                    </Grid>
                    <Grid className="sub_project">
                        <Grid container className="project">
                            {sub_project_data.map((x, index) => {
                                return (
                                    <Grid item xs={12} sm={6} className="project_item" key={index}>
                                        <Grid className="item_wrap">
                                            <Mask
                                                height="380px"
                                                bgUrl={`/portpolio/images/project/project_${sub_project_data.length - index}.png`}
                                            />
                                            <Grid className="text">
                                                <Grid className="link">
                                                    <a href={x.link} target="blank">
                                                        &nbsp;
                                                    </a>
                                                </Grid>
                                                <h2>{x.project_title}</h2>
                                                <h3>
                                                    {x.project_text_1}
                                                    <br />
                                                    {x.project_text_2}
                                                </h3>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Layout>
        </Wrapper>
    );
};

export default Project;
