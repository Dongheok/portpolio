import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Wrapper, Mask } from './styles';
import Layout from './../../layout/';

import { useDispatch } from 'react-redux';

const project_data = [
    // // Dongflix 개인프로젝트
    // {
    //     project_title: 'SV VIBA',
    //     project_text_1: '홈페이지의 전체 UI 구현',
    //     project_text_2: '반응형 웹과 크로스 브라우징 완벽 구현',
    // project_img:'',
    //     link: 'http://www.svviba.com/',
    // },
    // SV VIBA
    {
        project_title: 'SV VIBA',
        project_text_1: '홈페이지의 전체 UI 구현',
        project_text_2: '반응형 웹과 크로스 브라우징 완벽 구현',
        project_img: '/portpolio/images/project/project_1.png',
        link: 'http://www.svviba.com/',
    },
    // SV Data
    {
        project_title: 'SV DATA',
        project_text_1: 'React를 이용한 홈페이지의 전체 UI 완벽 구현',
        project_text_2: '반응형 웹과 크로스 브라우징 완벽 구현',
        project_img: '/portpolio/images/project/project_2.png',
        link: 'http://www.sv-data.com/',
    },
    // SSAFY
    {
        project_title: 'SSAFY',
        project_text_1: '프로젝트 UI 전체 구현',
        // project_text_2: '',
        project_img: '/portpolio/images/project/project_3.png',
        link: '',
    },
    // SHUTTLEB
    {
        project_title: 'SHUTTLE_B CMS',
        project_text_1: 'React로 CMS페이지 프론트엔드 작업 완벽 구현',
        project_text_2: 'Redux를 이용한 전역 상태 관리와 Api 통신 구현',
        project_img: '/portpolio/images/project/project_4.jpg',
        link: '',
    },
    // XY
    {
        project_title: 'XY Web',
        project_text_1: 'React를 이용한 홈페이지의 전체 UI 완벽 구현',
        project_text_2: '반응형 웹과 크로스 브라우징 완벽 구현',
        project_img: '/portpolio/images/project/project_5.jpg',
        link: 'https://www.xydating.app/',
    },
    // 파이어니
    {
        project_title: 'PION',
        project_text_1: '직접 디자인하여 이벤트 페이지 완벽 구현',
        // project_text_2: '',
        project_img: '/portpolio/images/project/project_6.png',
        link: '',
    },
    {
        project_title: '맥도날드',
        project_text_1: '(메인,서브)페이지를 디자인하여 시안을 직접 제작해서 UI를 구현할 수 있습니다.',
        // project_text_2: '',
        project_img: '/portpolio/images/project/project_7.png',
        link: 'http://sn237x.cafe24.com/web/mobile/10_mcdonald/index.html',
    },
    {
        project_title: '서브웨이',
        project_text_1: '(메인,서브)페이지를 디자인하여 시안을 직접 제작해서 UI를 구현할 수 있습니다.',
        // project_text_2: '',
        project_img: '/portpolio/images/project/project_8.png',
        link: 'http://sn237x.cafe24.com/web/mobile/7_subway(moblie)/index.html',
    },
    {
        project_title: 'CJ Hello',
        project_text_1: '메인페이지 시안을 제작하여 구현할 수 있습니다.',
        // project_text_2: '',
        project_img: '/portpolio/images/project/project_9.png',
        link: 'http://sn237x.cafe24.com/web/mobile/6_cjhello/index.html',
    },
    {
        project_title: '현대글로비스',
        project_text_1: '반응형 웹을 직접 구현할 수 있습니다.',
        project_text_2: '비디오 슬라이드를 구현할 수 있고, 모달 팝업을 구현할 수 있습니다.',
        project_img: '/portpolio/images/project/project_10.png',
        link: 'http://myvtr1000sp1.dothome.co.kr/4_hyundai(rwd)/index.html',
    },
    {
        project_title: '캐논',
        project_text_1: '(메인,배너)슬라이드 구현,',
        project_text_2: '(재생,일시정지)버튼 구현',
        project_img: '/portpolio/images/project/project_11.jpg',
        link: 'http://sn237x.cafe24.com/web/css/49_slick_slide_banner/index.html',
    },
    {
        project_title: '삼양식품',
        project_text_1: '(메인,배너)슬라이드 구현,',
        project_text_2: '(유튜브)모달팝업 구현',
        project_img: '/portpolio/images/project/project_12.jpg',
        link: 'http://sn237x.cafe24.com/web/css/13_test/index.html',
    },
    {
        project_title: '넷마블',
        project_text_1: '직접 디자인, (메인,배너)슬라이드 구현,',
        project_text_2: '왼쪽 상단 퀵 메뉴 구현, 탭 메뉴 구현',
        project_img: '/portpolio/images/project/project_13.jpg',
        link: 'http://sn237x.cafe24.com/web/pc/netmarble/index.html',
    },
    {
        project_title: '커핀그루나루',
        project_text_1: '(메인,배너)슬라이드 구현,',
        project_text_2: '탭(버튼,메뉴) 구현',
        project_img: '/portpolio/images/project/project_14.jpg',
        link: 'http://sn237x.cafe24.com/web/css/37_coffine/index.html',
    },
    {
        project_title: '도미노',
        project_text_1: '메인 슬라이더 구현, 퀵 메뉴 버튼 구현',
        // project_text_2: '',
        project_img: '/portpolio/images/project/project_15.jpg',
        link: 'http://sn237x.cafe24.com/web/css3/13_domino/index.html',
    },
    {
        project_title: '포스코 사회공헌',
        project_text_1: '원 페이지 스크롤 구현, 슬라이드 구현,',
        project_text_2: '퀵 메뉴 버튼 구현, (유튜브)모달팝업 구현',
        project_img: '/portpolio/images/project/project_16.jpg',
        link: `http://sn237x.cafe24.com//web/jquery/15_modal(popupyoutube%EC%97%B0%EA%B2%B0%EA%B0%80%EB%B3%80%EB%86%92%EC%9D%B4(vh)%EB%A7%8C%ED%81%BC%EC%9D%B4%EB%8F%99))%ED%8F%AC%EC%8A%A4%EC%BD%94%EC%82%AC%ED%9A%8C%EA%B3%B5%ED%97%8C/index.html`,
    },
    {
        project_title: '포도팟',
        project_text_1: '10개 이상의 애니메이션을 제이쿼리로 구현',
        // project_text_2: '',
        project_img: '/portpolio/images/project/project_17.jpg',
        link: 'http://sn237x.cafe24.com/web/css3/10_animation/indexr.html',
    },
    {
        project_title: '레스포삭',
        project_text_1: '(광고)모달 팝업 구현,',
        project_text_2: '슬라이드 구현, 애니메이션 구현',
        project_img: '/portpolio/images/project/project_18.jpg',
        link: 'http://sn237x.cafe24.com/web/css/16_respos/index.html',
    },
    {
        project_title: '미스터스트릿',
        project_text_1: 'Cafe24로 반응형 웹 구현',
        project_text_2: '슬라이드 구현, 유튜브 구현',
        project_img: '/portpolio/images/project/project_19.jpg',
        link: 'http://myvtr1000sp10904.cafe24.com/',
    },
];

const Project = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: 'CURRENT_PAGE',
            input: {
                pageKey: 'project',
            },
        });
    }, [dispatch]);
    return (
        <Wrapper>
            <Layout>
                <Grid className="Project_Wrap">
                    <Grid className="Main_Project">
                        <Grid className="Project_Img" />
                        <Grid className="Title">Dongflix</Grid>
                        <Grid className="Text">Dongflix_Text</Grid>
                    </Grid>
                    <Grid className="Sub_Project">
                        <Grid container className="Project">
                            {project_data.map((x, index) => {
                                return (
                                    <Grid item xs={12} sm={6} className="Project_Item" key={index}>
                                        <Grid className="Item_Wrap">
                                            <Mask bgUrl={x.project_img} />
                                            <Grid className="Text">
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
