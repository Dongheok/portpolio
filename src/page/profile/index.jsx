/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Wrapper from './styles';
import Layout from './../../layout/';

import { useDispatch } from 'react-redux';

const lang_data = [
    { lang: 'HTML5' },
    { lang: 'CSS3' },
    { lang: 'SCSS' },
    { lang: 'Javascript' },
    { lang: 'Jquery' },
    { lang: 'Responsive-Web' },
    { lang: 'Cross-Browsing' },
    { lang: 'React' },
    { lang: 'Redux' },
    { lang: 'Styled-components' },
    { lang: 'Material-UI' },
    { lang: 'Git' },
    { lang: 'Jira' },
    { lang: 'Photoshop' },
    { lang: 'Illustrator' },
];

const history_data = [
    { years: '2018', history_1: '송곡고등학교 졸업', history_2: '' },
    { years: '2019', history_1: '이젠컴퓨터학원(상봉) - 하이브리드 UI UI 웹 퍼블리셔 교육 이수', history_2: 'SV GROUP 입사' },
    {
        years: '2020',
        history_1: 'SV VIBA 홈페이지 UI 구현',
        history_2: 'SV DATA UI 구현',
        history_3: 'SV DATA UI 구현',
        history_4: 'SAMSUNG SSAFY UI구현',
        history_5: '파이어니 이벤트 페이지 UI 구현',
        history_9: 'XY UI 구현',
        history_6: 'ULTRA PRIVACY CMS UI 구현',
        history_7: 'YOUR CERTY CMS UI 구현',
        history_8: '셔틀비 CMS 프론트엔드 작업',
    },
];

const Profile = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: 'CURRENT_PAGE',
            input: {
                pageKey: 'profile',
            },
        });
    }, []);
    return (
        <Wrapper>
            <Layout>
                <Grid className="Profile">
                    <Grid className="About">
                        <Grid className="Title">
                            <span>About</span>
                        </Grid>
                        <Grid container className="Info">
                            <Grid item xs={3} className="Picture">
                                <Grid></Grid>
                            </Grid>
                            <Grid item xs={9} className="Text"></Grid>
                        </Grid>
                    </Grid>
                    <Grid className="Skill">
                        <Grid className="Title">
                            <span>Ability</span>
                        </Grid>
                    </Grid>
                    <Grid className="Education">
                        <Grid className="Title">
                            <span>Education</span>
                        </Grid>
                    </Grid>
                    <Grid className="Career">
                        <Grid className="Title">
                            <span>Career</span>
                        </Grid>
                    </Grid>
                </Grid>
            </Layout>
        </Wrapper>
    );
};

export default Profile;
