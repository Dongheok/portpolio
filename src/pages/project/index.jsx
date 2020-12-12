/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import { Skeleton } from '@material-ui/lab';
import GitHubIcon from '@material-ui/icons/GitHub';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import BackgroundImageOnLoad from 'background-image-on-load';

import { Wrapper, Mask, SkeletonWrap } from './styles';
import { UserContext } from 'context';
import Layout from 'layout';

const MainProjectComponent = (props) => {
   const { setMainLoading } = props;
   const { state } = useContext(UserContext);

   // 메인 프로젝트 이미지
   const [mainProjectData, setMainProjectData] = useState([]);

   // 메인 프로젝트 딜레이
   const [mainProjectDelay, setMainProjectDelay] = useState(false);

   useEffect(() => {
      setMainProjectData(state.main_project_data);
      setTimeout(() => {
         setMainProjectDelay(true);
      }, 2000);
   }, []);

   return (
      <Grid className="main_project project">
         <Grid className="project_container">
            {mainProjectData.map((x, index) => {
               return (
                  <Grid key={index} className="project_item">
                     <Mask className={x.loading ? '' : 'on'} height="600px" speed={x.speed} bgUrl={`${x.img}`}>
                        <BackgroundImageOnLoad
                           src={mainProjectDelay ? x.img : ''}
                           onLoadBg={() => {
                              let tempData = [...mainProjectData];
                              tempData[index].loading = false;
                              setMainProjectData(tempData);
                              setMainLoading(false);
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
                        <Grid container justify="space-between" alignItems="center" className="title">
                           <Grid item>{x.project_title}</Grid>
                           <Grid item>
                              {x.git !== '' && (
                                 <Grid className="link git">
                                    <a href={x.git} target="blank">
                                       <GitHubIcon />
                                    </a>
                                 </Grid>
                              )}
                              {x.link !== '' && (
                                 <Grid className="link url">
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
         </Grid>
      </Grid>
   );
};

const SubProjectComponent = (props) => {
   const { mainLoading } = props;

   const { state } = useContext(UserContext);
   // 서브 프로젝트 데이터
   const [subProjectData, setSubProjectData] = useState([]);

   // 서브 프로젝트 딜레이
   const [subProjectDelay, setSubProjectDelay] = useState(false);

   useEffect(() => {
      setSubProjectData(state.sub_project_data);
      setTimeout(() => {
         setSubProjectDelay(true);
      }, 4000);
   }, []);
   return (
      <Grid className="sub_project project">
         <Grid container className="project_container">
            {subProjectData.map((x, index) => {
               return (
                  <Grid key={index} item sm={12} md={6} className="project_item">
                     <Mask className={x.loading ? '' : 'on'} height="300px" speed={x.speed} bgUrl={`${x.img}`}>
                        <BackgroundImageOnLoad
                           src={!mainLoading && subProjectDelay ? x.img : ''}
                           onLoadBg={() => {
                              let tempData = [...subProjectData];
                              tempData[index].loading = false;
                              setSubProjectData(tempData);
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
                        <Grid container justify="space-between" alignItems="center" className="title">
                           <Grid item>{x.project_title}</Grid>
                           <Grid item>
                              {x.git !== '' && (
                                 <Grid className="link git">
                                    <a href={x.git} target="blank">
                                       <GitHubIcon />
                                    </a>
                                 </Grid>
                              )}
                              {x.link !== '' && (
                                 <Grid className="link url">
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
            <title>김동혁 프로젝트</title>
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
