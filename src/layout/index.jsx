import React, { useContext, useState } from 'react';
import { Grid } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Wrapper from './styles';

import { useHistory } from 'react-router';
import { UserContext } from 'context';

const Layout = ({ children }) => {
   const history = useHistory();
   const { state, modeDarkFunction } = useContext(UserContext);
   // 다크모드 상태 값
   const [modeDark, setModeDark] = useState(false);

   return (
      <Wrapper>
         {/* 헤더 */}
         <Grid container justify="space-between" className="header">
            {/* 로고 */}
            <Grid
               item
               className={state.modeDark ? 'logo on' : 'logo'}
               onClick={() => {
                  history.push('/');
                  window.scrollTo(0, 0);
               }}
            >
               로고
            </Grid>
            {/* 네비게이션 */}
            <Grid item className="nav_wrap">
               <Grid container className="nav">
                  {/* 글로벌 네비게이션 바 */}
                  <Grid item className="gnb_wrap">
                     <Grid container alignItems="center" className="gnb">
                        {state.sidebar.map((x, index) => {
                           return (
                              <Grid
                                 item
                                 key={index}
                                 onClick={() => {
                                    history.push(x.key);
                                 }}
                              >
                                 <span>{x.value}</span>
                              </Grid>
                           );
                        })}
                     </Grid>
                  </Grid>
                  {/* 유틸 */}
                  <Grid item className="util_wrap">
                     <Grid container alignItems="center" className="util">
                        <Grid item>
                           <button
                              onClick={() => {
                                 modeDarkFunction(!modeDark);
                                 setModeDark(!modeDark);
                              }}
                           >
                              {state.modeDark ? <Brightness7Icon /> : <Brightness4Icon />}
                           </button>
                        </Grid>
                        <Grid item>
                           <a href="https://github.com/dev-donghyuk" target="_blank" rel="noopener noreferrer">
                              <GitHubIcon />
                           </a>
                        </Grid>
                        <Grid item>
                           <a
                              href="https://www.notion.so/Donghyuk-Kim-6585ae54500946daa55004efbdea71c6"
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              <img src="/portpolio/images/notion_icon.png" alt="" />
                           </a>
                        </Grid>
                     </Grid>
                  </Grid>
               </Grid>
            </Grid>
         </Grid>
         {children}
      </Wrapper>
   );
};

export default Layout;
