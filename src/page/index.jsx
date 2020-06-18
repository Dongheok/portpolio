import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Wrapper from './styles';
import MainSection from './main';
import ProjectSection from './project';
import ProfileSection from './profile';

import { useSelector, useDispatch } from 'react-redux';

const useTabs = (TabValue, Content) => {
    const [currentIndex, setCurrentIndex] = useState(TabValue);
    return {
        currentItem: Content[currentIndex],
        changeItem: setCurrentIndex,
    };
};

const Portpolio = () => {
    const state = useSelector((state) => state.common);
    const { currentItem, changeItem } = useTabs(0, state.data);
    const [currentPage, setCurrentPage] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: 'IS_LOADING',
            input: {
                isLoading: false,
            },
        });
    }, [dispatch]);
    return (
        <Wrapper>
            {state.isLoading === true && (
                <Grid className="Loading_Bar">
                    <Grid></Grid>
                </Grid>
            )}
            <Grid className="Header">
                <span className="Logo">로고</span>
            </Grid>
            {currentPage == '' && <MainSection />}
            {currentPage == 'project' && <ProjectSection />}
            {currentPage == 'profile' && <ProfileSection />}
            <Grid className={currentPage == 'project' ? 'Pagination On' : 'Pagination '}>
                <ul>
                    {state.data.map((x, index) => {
                        return (
                            <li
                                onClick={() => {
                                    changeItem(index);
                                    setCurrentPage(x.value);
                                    window.scrollTo(0, 0);
                                }}
                            >
                                <span className={x.value === currentItem.value ? 'On' : ''}></span>
                            </li>
                        );
                    })}
                </ul>
            </Grid>
        </Wrapper>
    );
};

export default Portpolio;
