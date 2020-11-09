/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Slider from 'react-slick';

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

const SubProjectComponent = () => {
   const { state } = useContext(UserContext);

   return (
      <Grid className="sub_project">
         <Grid container className="project">
            {state.sub_project_data.map((x, index) => {
               return (
                  <Grid key={index} item xs={12} sm={6} className="project_item" key={index}>
                     <Grid className="item_wrap">
                        <Mask height="380px" bgUrl={`/portpolio/images/project/project_${state.sub_project_data.length - index}.png`} />
                        <Grid className="text">
                           {x.link !== '' && (
                              <Grid className={state.modeDark ? 'link on' : 'link'}>
                                 <a href={x.link} target="blank">
                                    &nbsp;
                                 </a>
                              </Grid>
                           )}
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
   );
};

const MainProjectComponent = () => {
   const { state } = useContext(UserContext);
   return (
      <Grid className="main_project">
         <Slider {...settings}>
            {state.main_project_data.map((x, index) => {
               return (
                  <Grid key={index} className="slide">
                     <Mask height="600px" bgUrl={`/portpolio/images/project/main_project_${index + 1}.png`} />
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
