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

const ProfileSection = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: 'CURRENT_PAGE',
            input: {
                pageKey: 'profile',
            },
        });
    }, [dispatch]);
    return (
        <Wrapper>
            <Layout>
                <Grid className="Profile">
                    <Grid container className="Info">
                        <Grid item xs={12} md={4} className="Picture">
                            <Grid className="Picture_Box"></Grid>
                        </Grid>
                        <Grid item xs={12} md={8} className="Title">
                            <Grid>
                                <h2>저는 웹 프론트엔드 개발자 김동혁입니다.</h2>
                                <h3>성실하고 섬세하며 책임감이 강합니다.</h3>
                                <h3>
                                    저의 가장 큰 장점은 호기심이 많고 적극적입니다. 궁금한 것은 귀찮을 정도로 잘 물어보고 답을 찾기
                                    위해서라면 끝까지 쫒아 다닙니다. 그래서인지 관심사가 다양해져 처음 만나는 사람과 대화를 나누는데
                                    공통분모를 많이 가질 수 있어서 대화를 막힘없이 이끌어 갈 수있게 되어서 좋습니다. 어떤 환경에서도 잘
                                    적을할 수 있고 상황 대처능력이 뛰어납니다.
                                </h3>
                                <h3>
                                    디자인을 바탕으로 웹 표준, 웹 접근성을 준수하여 프론트엔드 개발과 동적인 UI·UX를 완벽하게 구현할 수
                                    있습니다.
                                </h3>
                            </Grid>
                            <Grid>
                                <h2>보유자격증</h2>
                                <ul>
                                    <li>· 웹디자인 기능사</li>
                                    <li>· 정보처리 기능사</li>
                                </ul>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className="Ability">
                        <ul>
                            {lang_data.map((x, index) => {
                                return (
                                    <li key={index}>
                                        <span>{x.lang}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </Grid>
                    <Grid container className="History">
                        {history_data.map((x, index) => {
                            return (
                                <Grid item xs={12} key={index}>
                                    <h2>{x.years}</h2>
                                    <ul>
                                        {x.history_1 && <li>{x.history_1}</li>}
                                        {x.history_2 && <li>{x.history_2}</li>}
                                        {x.history_3 && <li>{x.history_3}</li>}
                                        {x.history_4 && <li>{x.history_4}</li>}
                                        {x.history_5 && <li>{x.history_5}</li>}
                                        {x.history_6 && <li>{x.history_6}</li>}
                                        {x.history_7 && <li>{x.history_7}</li>}
                                        {x.history_8 && <li>{x.history_8}</li>}
                                        {x.history_9 && <li>{x.history_9}</li>}
                                    </ul>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </Layout>
        </Wrapper>
    );
};

export default ProfileSection;
