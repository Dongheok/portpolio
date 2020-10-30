/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Wrapper, SkillItem } from './styles';
import Layout from './../../layout/';
import Slider from 'react-slick';

var settings = {
   dots: false,
   arrows: false,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
   swipeToSlide: true,
};

const picture_data = [
   { key: 0, value: '/portpolio/images/profile/profile_picture_1.jpg' },
   { key: 1, value: '/portpolio/images/profile/profile_picture_2.jpg' },
];

const skill_data = [
   { keyword: 'HM', lang: 'HTML5', color: 'green', explanation: 'HTML5등 DOCTYPE을 이해하고 문서에 맞춰 작업이 가능합니다.' },
   { keyword: 'CS', lang: 'CSS3', color: 'blue', explanation: '어떤 디자인 시안이 와도 CSS3를 이용하여 100% 퀄리티로 구현할 수 있습니다.' },
   {
      keyword: 'SC',
      lang: 'SCSS',
      color: 'blue',
      explanation: 'SCSS를 이용하여 효율적이며 코드의 재사용성을 높고 가독성이 높은 CSS를 작성할 수 있습니다.',
   },
   {
      keyword: 'JS',
      lang: 'Javascript',
      color: 'green',
      explanation: 'Javascript 언어의 기본문법과 사용법, 함수, 객체 등의 개념을 이해하여 동적인 프로그래밍을 할 수 있습니다.',
   },
   { keyword: 'JQ', lang: 'Jquery', color: 'red', explanation: '다양한 메소드를 사용해 기능을 구현할 수 있습니다..' },
   { keyword: 'ES', lang: 'ES6', color: 'green', explanation: 'let, const, 스프레드 연산자, Arrow Function과 같은 ES6 기초를 이해합니다.' },
   {
      keyword: 'NJ',
      lang: 'Node Js',
      color: 'yellow',
      explanation: 'Node JS의 기초를 이해하고, Node JS를 이용하여 프론트엔드 개발환경을 구축해 코로나맵 클론을 만들 수 있습니다.',
   },
   {
      keyword: 'EX',
      lang: 'Express',
      color: 'red',
      explanation: 'Express의 기초를 이해하고, Express를 이용하여 코로나맵 클론을 만들 수 있습니다.',
   },
   {
      keyword: 'WP',
      lang: 'Webpack',
      color: 'yellow',
      explanation: '웹팩의 동작 원리를 이해하고 직접 개발환경을 구성해봤습니다. 로더를 직접 구현해 보았습니다.',
   },
   {
      keyword: 'BB',
      lang: 'Babel',
      color: 'yellow',
      explanation: '바벨의 원리를 이해하고 직접 사용해 보아 프로젝트에 최적화된 환경을 구축해봤습니다.',
   },
   {
      keyword: 'RT',
      lang: 'React',
      color: 'green',
      explanation: 'React를 이용하여 정적페이지, CMS페이지, 플랫폼 등 여러 React 프로젝트 경험이 있습니다.',
   },
   { keyword: 'RD', lang: 'Redux', color: 'red', explanation: 'Redux를 이용하여 효율적으로 형상관리를 할 수 있습니다.' },
   {
      keyword: 'TS',
      lang: 'Typescript',
      color: 'yellow',
      explanation: 'Typescript 기초를 이해하여 넷플릭스 클론 사이트를 만들 수 있습니다.',
   },
   { keyword: 'NJ', lang: 'Next Js', color: 'green', explanation: 'Next JS를 이용하여 프로젝트를 구현할 수 있습니다.' },
   {
      keyword: 'ST',
      lang: 'Styled components',
      color: 'blue',
      explanation: 'Styled Component를 주로 사용하며, 보다 효율적으로 CSS를 작성할 수 있습니다.',
   },
   { keyword: 'MU', lang: 'Material UI', color: 'blue', explanation: 'Material UI라는 UI 프레임워크를 자주 씁니다.' },
   { keyword: 'RW', lang: 'Responsive Web', color: 'red', explanation: '반응형 웹을 구현할 수 있습니다.' },
   { keyword: 'RW', lang: 'Interactive Web', color: 'green', explanation: 'Javascript를 이용하여 애플 클론 페이지를 구현할 수 있습니다.' },
   { keyword: 'WS', lang: 'Web Standards', color: 'yellow', explanation: '웹 표준을 지키며 코딩할 수 있습니다.' },
   {
      keyword: 'CB',
      lang: 'Cross Browsing',
      color: 'red',
      explanation: '모든 브라우저에서 제가 맡은 프로젝트가 크로스 브라우징이 잘 되게 할 수 있습니다.',
   },
   { keyword: 'GT', lang: 'Git', color: 'yellow', explanation: 'Git을 이용하여 형상관리를 할 수 있습니다.' },
   {
      keyword: 'JR',
      lang: 'Jira',
      color: 'yellow',
      explanation: '칸반과 스크럼을 이해하고 Jira를 이용하여 프로젝트 관리를 할 수 있습니다.',
   },
   { keyword: 'PS', lang: 'Photoshop', color: 'blue', explanation: '포토샵을 이용하여 프로젝트 시안을 만들 수 있습니다.' },
   { keyword: 'IL', lang: 'Illustrator', color: 'red', explanation: '일러스트를 이용하여 간단한 아이콘, 로고 등을 만들 수 있습니다.' },
];

const history_data = [
   { years: '2018', history_1: '송곡고등학교 졸업', history_2: '' },
   {
      years: '2019',
      history_1: '이젠컴퓨터학원(상봉) - 하이브리드 UI UI 웹 퍼블리셔 교육 이수',
      history_2: 'SV GROUP 입사',
   },
   {
      years: '2020',
      history_1: 'SV VIBA 홈페이지 UI 구현',
      history_2: 'SV DATA UI 구현',
      history_3: 'SV DATA UI 구현',
      history_4: 'SAMSUNG SSAFY UI구현',
      history_5: '파이어니 이벤트 페이지 UI 구현',
      history_6: 'XY UI 구현',
      history_7: 'ULTRA PRIVACY CMS UI 구현',
      history_8: 'YOUR CERTY CMS UI 구현',
      history_9: '셔틀비 CMS 프론트엔드 작업',
      history_10: '에그플레너 UI 구현',
      history_11: '플레이조커 UI 구현',
   },
];

const Profile = () => {
   return (
      <Wrapper>
         <Layout>
            <Grid className="profile">
               <Grid className="about">
                  <Grid className="title">
                     <span>About</span>
                  </Grid>
                  <Grid container className="info">
                     <Grid item xs={12} sm={5} md={3} className="picture_wrap">
                        <Slider {...settings}>
                           <Grid className="slide text">
                              <span>
                                 프로필 사진이 궁금하시면
                                 <br />
                                 옆으로 넘겨주세요.
                              </span>
                           </Grid>
                           {picture_data.map((x, index) => {
                              return (
                                 <Grid className="slide picture">
                                    <img src={`${x.value}`} alt="" />
                                 </Grid>
                              );
                           })}
                        </Slider>
                     </Grid>
                     <Grid item xs={12} sm={7} md={9} className="info">
                        {/* 이름 */}
                        <Grid container direction="column" className="">
                           <Grid item className="title">
                              #이름
                           </Grid>
                           <Grid item className="text">
                              김동혁
                           </Grid>
                        </Grid>
                        {/* 생년월일 */}
                        <Grid container direction="column" className="">
                           <Grid item className="title">
                              생년월일
                           </Grid>
                           <Grid item className="text">
                              1999.06.27
                           </Grid>
                        </Grid>
                        {/* 간단소개 */}
                        <Grid container direction="column" className="">
                           <Grid item className="title">
                              간단소개
                           </Grid>
                           <Grid item className="text">
                              안녕하세요! 산업기능요원 보충역(시력이슈)으로 편입을 준비하는 신입 프론트엔드 개발자 김동혁입니다.
                           </Grid>
                        </Grid>
                     </Grid>
                  </Grid>
               </Grid>
               <Grid className="skill">
                  <Grid className="title">
                     <span>Ability</span>
                  </Grid>
                  <Grid className="skill_item_wrap">
                     {skill_data.map((x, index) => {
                        return (
                           <SkillItem key={index} className={x.color}>
                              {/*  */}
                              <Grid className="skill_item">
                                 <Grid className="title">{x.keyword}</Grid>
                                 <Grid className="text">{x.lang}</Grid>
                              </Grid>
                              <Grid className="skill_text">{x.explanation}</Grid>
                           </SkillItem>
                        );
                     })}
                  </Grid>
               </Grid>
               <Grid className="education">
                  <Grid className="title">
                     <span>Education</span>
                  </Grid>
               </Grid>
               <Grid className="career">
                  <Grid className="title">
                     <span>Career</span>
                  </Grid>
               </Grid>
            </Grid>
         </Layout>
      </Wrapper>
   );
};

export default Profile;
