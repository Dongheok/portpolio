import React, { createContext, useState } from 'react';
import { mainData } from 'data/main';
import { layoutData } from 'data/layout';
import { profileData } from 'data/profile';
import { projectData } from 'data/project';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [state, setState] = useState({
        isLoading: false,
        modeDark: false,
        // 메인
        btn_wrap: mainData.btn_wrap,
        // 레이아웃
        sidebar: layoutData.nav,
        // 프로필
        picture_data: profileData.picture_data,
        skill_data: profileData.skill_data,
        history_data: profileData.history_data,
        certificate_data: profileData.certificate_data,
        contact_data: profileData.contact_data,
        // 프로젝트
        main_project_data: projectData.main_project_data,
        sub_project_data: projectData.sub_project_data,
    });
    // 다크모드 전역 상태 함수
    const modeDarkFunction = (boolen) => {
        setState({ ...state, modeDark: boolen });
    };
    // 로딩 전역 상태 함수
    const isLoadingFunction = (boolen) => {
        setState({ ...state, isLoading: boolen });
    };
    return (
        <UserContext.Provider
            value={{
                state,
                modeDarkFunction,
                isLoadingFunction,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
