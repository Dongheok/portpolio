/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import Wrapper from "./styles";
import Layout from "./../../layout/";
import Slider from "react-slick";

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
  { key: 0, value: "/portpolio/images/profile/profile_picture_1.jpg" },
  { key: 1, value: "/portpolio/images/profile/profile_picture_2.jpg" },
];

const main_skill_data = [
  { lang: "HTML5" },
  { lang: "CSS3" },
  { lang: "SCSS" },
  { lang: "Javascript(ES6)" },
  { lang: "Jquery" },
  { lang: "Node-Js" },
  { lang: "Webpack" },
  { lang: "Babel" },
  { lang: "Next-Js" },
  { lang: "React(Hook)" },
  { lang: "Redux" },
  { lang: "Styled-components" },
  { lang: "Material-UI" },
];
const etc_skill_data = [
  { lang: "Express" },
  { lang: "Responsive-Web" },
  { lang: "Web-Standards" },
  { lang: "Cross-Browsing" },
  { lang: "Git" },
  { lang: "Jira" },
  { lang: "Photoshop" },
  { lang: "Illustrator" },
];

const history_data = [
  { years: "2018", history_1: "송곡고등학교 졸업", history_2: "" },
  {
    years: "2019",
    history_1: "이젠컴퓨터학원(상봉) - 하이브리드 UI UI 웹 퍼블리셔 교육 이수",
    history_2: "SV GROUP 입사",
  },
  {
    years: "2020",
    history_1: "SV VIBA 홈페이지 UI 구현",
    history_2: "SV DATA UI 구현",
    history_3: "SV DATA UI 구현",
    history_4: "SAMSUNG SSAFY UI구현",
    history_5: "파이어니 이벤트 페이지 UI 구현",
    history_6: "XY UI 구현",
    history_7: "ULTRA PRIVACY CMS UI 구현",
    history_8: "YOUR CERTY CMS UI 구현",
    history_9: "셔틀비 CMS 프론트엔드 작업",
    history_10: "에그플레너 UI 구현",
    history_11: "플레이조커 UI 구현",
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
                    안녕하세요! 산업기능요원으로 편입을 준비하는 신입 프론트엔드
                    개발자 김동혁입니다.
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid className="skill">
            <Grid className="title">
              <span>Ability</span>
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
