/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
// import { CallIcon, MailIcon, GitHubIcon, CheckCircleIcon } from '@material-ui/icons';
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Slider from "react-slick";
import { Helmet } from "react-helmet";

import { Wrapper, SkillItem } from "./styles";
import { UserContext } from "context";
import Layout from "layout";
import { MapApiComponent } from "common";

// 프로필 소개 슬라이드 세팅 값

var settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
};

// 소개 컴포넌트

const AboutComponent = () => {
  const { state } = useContext(UserContext);

  return (
    <Grid className="about_wrap">
      <Grid className="title">
        <span>About</span>
      </Grid>
      <Grid container justify="space-between" direction="row" className="about">
        <Grid item className="picture_wrap">
          <Slider {...settings}>
            <Grid className="slide text">
              <span>
                프로필 사진이 궁금하시면
                <br />
                옆으로 넘겨주세요.
              </span>
            </Grid>
            {state.picture_data.map((x, index) => {
              return (
                <Grid key={index} className="slide picture">
                  <img src={`${x.value}`} alt="" />
                </Grid>
              );
            })}
          </Slider>
        </Grid>
        <Grid item className="info">
          {/* 이름 */}
          <Grid container direction="column" className="">
            <Grid item className="title">
              # 이름
            </Grid>
            <Grid item className="text">
              김동혁
            </Grid>
          </Grid>
          {/* 생년월일 */}
          <Grid container direction="column" className="">
            <Grid item className="title">
              # 생년월일
            </Grid>
            <Grid item className="text">
              1999.06.27
            </Grid>
          </Grid>
          {/* 간단소개 */}
          <Grid container direction="column" className="">
            <Grid item className="title">
              # 간단소개
            </Grid>
            <Grid item className="text">
              안녕하세요! 산업기능요원 보충역(시력이슈)으로 편입을 준비하는 신입
              프론트엔드 개발자 김동혁입니다.
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

// 스킬 컴포넌트

const SkillComponent = () => {
  const { state } = useContext(UserContext);
  return (
    <Grid className="skill_wrap">
      <Grid className="title">
        <span>Ability</span>
      </Grid>
      <Grid className="skill">
        {state.skill_data.map((x, index) => {
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
  );
};

// 교육 컴포넌트

const EducationComponent = () => {
  const { state } = useContext(UserContext);
  return (
    <Grid className="education_wrap">
      <Grid className="title">
        <span>Education</span>
      </Grid>
      <Grid container className="education">
        <Grid item xs={12} className="certificate_wrap">
          <h2># 자격증</h2>
          <Grid container justify="center" direction="row">
            {state.certificate_data.map((x, index) => {
              return (
                <Grid item key={index}>
                  <Grid className="mask">
                    <img src={`${x.img}`} alt="" />
                  </Grid>
                  <h3>{x.title}</h3>
                  <h4>{x.date}</h4>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={12} className="academy">
          <h2># 교육수료</h2>
          <h3>
            <span className="icon">
              <CheckCircleIcon />
            </span>
            <span className="text">
              2019.04 ~ 2019.09 이젠컴퓨터학원(상봉) - 하이브리드 UIUX 웹
              퍼블리셔 교육 이수
            </span>
          </h3>
          <p>
            - 기획 및 Pt -≫PowerPoint
            <br />
            - 포토샵 , 일러스트
            <br />
            - 웹표준 기반 HTML5.0 & CSS3전반, 텍스트와 하이퍼링크, 멀티미디어,
            폼 태그
            <br />
            - 웹접근성 기반 Javascript & jQuery (정적, 동적, 반응형 그리드
            시스템)
            <br />
            - 디자인 콘셉트 전략을 기획, 개발, 디자인하여 제작
            <br />- 반응형 웹사이트의 메인/서브페이지 작업, 스타일 코드 분리,
            메뉴 영역 작업
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

// 커리어 컴포넌트

const CareerComponent = () => {
  const { state } = useContext(UserContext);
  return (
    <Grid className="career_wrap">
      <Grid className="title">
        <span>Career</span>
      </Grid>
      <Grid className="career">
        {state.history_data.map((x, index) => {
          return (
            <Grid key={index}>
              <h2>{x.years}</h2>
              <ul>
                {x.history.map((x, i) => {
                  return <li key={i}>- {x}</li>;
                })}
              </ul>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

// 문의하기 컴포넌트

const ContactComponent = () => {
  const { state } = useContext(UserContext);
  return (
    <Grid className="contact_wrap">
      <Grid className="title">
        <span>Contact Us</span>
      </Grid>
      <Grid className="contact">
        <Grid container className="info">
          {/*  */}
          {state.contact_data.map((x, index) => {
            return (
              <Grid key={index} item xs={12} sm={4}>
                <Grid
                  className={index === 2 ? "icon git" : "icon"}
                  onClick={() => {
                    if (index === 2) {
                      window.location.href = "https://github.com/dev-donghyuk";
                    }
                  }}
                >
                  {index === 0 && <CallIcon />}
                  {index === 1 && <MailIcon />}
                  {index === 2 && <GitHubIcon />}
                </Grid>
                <p className="text">{x.value}</p>
              </Grid>
            );
          })}
          {/*  */}
        </Grid>
        <Grid className="map">
          <MapApiComponent />
        </Grid>
      </Grid>
    </Grid>
  );
};

const Profile = () => {
  return (
    <Wrapper>
      <Layout>
        <Grid className="profile">
          <Helmet>
            <title>DongHyuk Profile</title>
          </Helmet>
          {/* About */}
          <AboutComponent />
          {/* Skill */}
          <SkillComponent />
          {/* Education */}
          <EducationComponent />
          {/* Career */}
          <CareerComponent />
          {/* Contact Us */}
          <ContactComponent />
        </Grid>
      </Layout>
    </Wrapper>
  );
};

export default Profile;
