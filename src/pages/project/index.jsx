/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Slider from 'react-slick';
import { Helmet } from 'react-helmet';

import { Wrapper, Mask } from './styles';
import { UserContext } from '../../context';
import Layout from '../../layout';

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

const MainProjectComponent = () => {
   const { state, isLoadingFunction } = useContext(UserContext);

   useEffect(() => {
      isLoadingFunction(true);

      setTimeout(() => {
         isLoadingFunction(false);
      }, 1000);
   }, []);
   return (
      <Grid className="main_project">
         <Slider {...settings}>
            {state.main_project_data.map((x, index) => {
               return (
                  <Grid key={index} className="slide">
                     <Mask height="600px" bgUrl={`${x.img}`} />
                     {x.link !== '' && (
                        <Grid className={state.modeDark ? 'link on' : 'link'}>
                           <a href={x.link} target="blank">
                              &nbsp;
                           </a>
                        </Grid>
                     )}
                     <Grid className="title">{x.project_title}</Grid>
                     <Grid className="text">{x.project_text_1}</Grid>
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
         <Helmet>
            <title>DongHyuk Project</title>
         </Helmet>
         <Grid container className="project">
            {state.sub_project_data.map((x, index) => {
               return (
                  <Grid key={index} item sm={12} md={6} className="project_item">
                     <Grid className="item_wrap">
                        <Mask height="300px" bgUrl={`${x.img}`} />
                        <Grid className="text">
                           {x.link !== '' && (
                              <Grid className={state.modeDark ? 'link on' : 'link'}>
                                 <a href={x.link} target="blank">
                                    &nbsp;
                                 </a>
                              </Grid>
                           )}
                           <h2>{x.project_title}</h2>
                           <p className="lang">{x.project_text_1}</p>
                           <p className="text">{x.project_text_2}</p>
                        </Grid>
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
