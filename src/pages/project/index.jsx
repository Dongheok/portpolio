/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import { Skeleton } from '@material-ui/lab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
// import Slider from 'react-slick';
import BackgroundImageOnLoad from 'background-image-on-load';

import { Wrapper, Mask, SkeletonWrap } from './styles';
import { UserContext } from '../../context';
import Layout from '../../layout';

// var settings = {
//    dots: true,
//    arrows: false,
//    infinite: true,
//    speed: 500,
//    slidesToShow: 1,
//    slidesToScroll: 1,
//    swipeToSlide: true,
//    autoplay: true,
//    autoplaySpeed: 5000,
//    // fade: true,
// };

const MainProjectComponent = (props) => {
   const { setMainLoading } = props;
   const { state } = useContext(UserContext);

   const [mainProjectData, setMainProjectData] = useState([]);

   useEffect(() => {
      setMainProjectData(state.main_project_data);
   }, []);

   return (
      <Grid className="main_project">
         {/* <Slider {...settings}> */}
         {mainProjectData.map((x, index) => {
            return (
               <Grid key={index} className="slide">
                  <Mask className={x.loading ? '' : 'on'} height="600px" speed={x.speed} bgUrl={`${x.img}`}>
                     <BackgroundImageOnLoad
                        src={x.img}
                        onLoadBg={() => {
                           let tempData = [...mainProjectData];
                           tempData[index].loading = false;
                           setMainProjectData(tempData);
                           setMainLoading(false);
                           console.log('메인 프로젝트 로드 완료');
                        }}
                     />
                  </Mask>
                  {x.loading && (
                     <SkeletonWrap>
                        <Skeleton variant="rect" animation="wave" height={600} />
                     </SkeletonWrap>
                  )}
                  {x.loading ? (
                     <SkeletonWrap margin="24px 0">
                        <Skeleton variant="rect" animation="wave" height={32} />
                     </SkeletonWrap>
                  ) : (
                     <Grid container justify="space-between" className="title">
                        <Grid item>{x.project_title}</Grid>
                        <Grid item>
                           {x.link !== '' && (
                              <Grid className="link">
                                 <a href={x.link} target="blank">
                                    <FontAwesomeIcon icon={faLink} />
                                 </a>
                              </Grid>
                           )}
                        </Grid>
                     </Grid>
                  )}
                  {x.loading ? (
                     <SkeletonWrap>
                        <Skeleton variant="rect" animation="wave" height={32} />
                     </SkeletonWrap>
                  ) : (
                     <Grid className="text_1 text">{x.project_text_1}</Grid>
                  )}
                  {x.loading ? (
                     <SkeletonWrap margin="16px 0 0 0">
                        <Skeleton variant="rect" animation="wave" height={40} />
                     </SkeletonWrap>
                  ) : (
                     <Grid className="text_2 text">{x.project_text_2}</Grid>
                  )}
               </Grid>
            );
         })}
         {/* </Slider> */}
      </Grid>
   );
};

const SubProjectComponent = (props) => {
   const { mainLoading } = props;

   const { state } = useContext(UserContext);
   const [subProjectData, setSubProjectData] = useState([]);
   // let cnt = 0;
   useEffect(() => {
      setSubProjectData(state.sub_project_data);
   }, []);
   return (
      <Grid className="sub_project">
         <Grid container className="project">
            {subProjectData.map((x, index) => {
               return (
                  <Grid key={index} item sm={12} md={6} className="project_item">
                     <Grid className="item_wrap">
                        <Mask className={x.loading ? '' : 'on'} height="300px" speed={x.speed} bgUrl={`${x.img}`}>
                           <BackgroundImageOnLoad
                              src={!mainLoading ? x.img : ''}
                              onLoadBg={() => {
                                 let tempData = [...subProjectData];
                                 tempData[index].loading = false;
                                 console.log(`서브 프로젝트${index} 로드 완료`);
                                 setSubProjectData(tempData);
                                 // cnt += 1;
                                 // if (cnt === tempData.length) {
                                 // setSubProjectData(tempData);
                                 // }
                              }}
                           />
                        </Mask>
                        {x.loading && (
                           <SkeletonWrap>
                              <Skeleton variant="rect" animation="wave" height={300} />
                           </SkeletonWrap>
                        )}
                        {x.loading ? (
                           <SkeletonWrap margin="24px 0">
                              <Skeleton variant="rect" animation="wave" height={24} />
                           </SkeletonWrap>
                        ) : (
                           <Grid container justify="space-between" className="title">
                              <Grid item>{x.project_title}</Grid>
                              <Grid item>
                                 {x.link !== '' && (
                                    <Grid className="link">
                                       <a href={x.link} target="blank">
                                          <FontAwesomeIcon icon={faLink} />
                                       </a>
                                    </Grid>
                                 )}
                              </Grid>
                           </Grid>
                        )}
                        {x.loading ? (
                           <SkeletonWrap margin="0 0 8px 0">
                              <Skeleton variant="rect" animation="wave" height={24} />
                           </SkeletonWrap>
                        ) : (
                           <Grid className="text_1 text">{x.project_text_1}</Grid>
                        )}
                        {x.loading ? (
                           <SkeletonWrap>
                              <Skeleton variant="rect" animation="wave" height={50} />
                           </SkeletonWrap>
                        ) : (
                           <Grid className="text_2 text">{x.project_text_2}</Grid>
                        )}
                     </Grid>
                  </Grid>
               );
            })}
         </Grid>
      </Grid>
   );
};

const Project = () => {
   const [mainLoading, setMainLoading] = useState(true);
   return (
      <Wrapper>
         <Helmet>
            <title>DongHyuk Project</title>
         </Helmet>
         <Layout>
            <Grid className="project_wrap">
               {/* 메인프로젝트 */}
               <MainProjectComponent setMainLoading={setMainLoading} />
               {/* 서브프로젝트 */}
               <SubProjectComponent mainLoading={mainLoading} />
            </Grid>
         </Layout>
      </Wrapper>
   );
};

export default Project;
