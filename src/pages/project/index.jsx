/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Slider from 'react-slick';
import { Helmet } from 'react-helmet';

import { Wrapper, Mask } from './styles';
import { UserContext } from '../../context';
import Layout from '../../layout';

const MainProjectComponent = () => {
   const { state, isLoadingFunction } = useContext(UserContext);

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
      // fade: true,
   };

   useEffect(() => {
      isLoadingFunction(true);

      setTimeout(() => {
         isLoadingFunction(false);
      }, 2000);
   }, []);
   return (
      <Grid className="main_project">
         <Slider {...settings}>
            {state.main_project_data.map((x, index) => {
               return (
                  <Grid key={index} className="slide">
                     <Mask height="600px" speed={x.speed} bgUrl={`${x.img}`} />
                     <Grid container justify="space-between" className="title">
                        <Grid item>{x.project_title}</Grid>
                        <Grid item>
                           {x.link !== '' && (
                              <Grid className={state.modeDark ? 'link on' : 'link'}>
                                 <a href={x.link} target="blank">
                                    &nbsp;
                                 </a>
                              </Grid>
                           )}
                        </Grid>
                     </Grid>
                     <Grid className="text_1">{x.project_text_1}</Grid>
                     <Grid className="text_2">{x.project_text_2}</Grid>
                  </Grid>
               );
            })}
         </Slider>
      </Grid>
   );
};

const SubProjectComponent = () => {
   const { state } = useContext(UserContext);

   return (
      <Grid className="sub_project">
         <Grid container className="project">
            {state.sub_project_data.map((x, index) => {
               return (
                  <Grid key={index} item sm={12} md={6} className="project_item">
                     <Grid className="item_wrap">
                        <Mask height="300px" speed={x.speed} bgUrl={`${x.img}`} />
                        <Grid container justify="space-between" className="title">
                           <Grid item>{x.project_title}</Grid>
                           <Grid item>
                              {x.link !== '' && (
                                 <Grid className={state.modeDark ? 'link on' : 'link'}>
                                    <a href={x.link} target="blank">
                                       &nbsp;
                                    </a>
                                 </Grid>
                              )}
                           </Grid>
                        </Grid>
                        <Grid className="text_1 text">{x.project_text_1}</Grid>
                        <Grid className="text_2 text">{x.project_text_2}</Grid>
                     </Grid>
                  </Grid>
               );
            })}
         </Grid>
      </Grid>
   );
};

const Project = () => {
   return (
      <Wrapper>
         <Helmet>
            <title>DongHyuk Project</title>
         </Helmet>
         <Layout>
            <Grid className="project_wrap">
               {/* 메인프로젝트 */}
               <MainProjectComponent />
               {/* 서브프로젝트 */}
               <SubProjectComponent />
            </Grid>
         </Layout>
      </Wrapper>
   );
};

export default Project;
