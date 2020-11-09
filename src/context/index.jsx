import React, { createContext, useState } from 'react';
import { portPolioData } from '../data';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
   const [state, setState] = useState({
      isLoading: true,
      modalOverflow: false,
      modeDark: false,
      // 사이드 바
      btn_wrap: portPolioData.btn_wrap,
      // 사이드 바
      sidebar: portPolioData.sidebar,
      // 프로필
      picture_data: portPolioData.picture_data,
      skill_data: portPolioData.skill_data,
      history_data: portPolioData.history_data,
      certificate_data: portPolioData.certificate_data,
      contact_data: portPolioData.contact_data,
      // 프로젝트
      main_project_data: portPolioData.main_project_data,
      sub_project_data: portPolioData.sub_project_data,
   });
   const modeDarkFunction = (boolen) => {
      setState({ ...state, modeDark: boolen });
   };
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
