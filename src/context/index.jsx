import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [state, setState] = useState({
    isLoading: false,
    modalOverflow: false,
    sidebar: [
      { key: "profile", value: "Profile" },
      { key: "project", value: "Project" },
      { key: "contact-us", value: "Contact Us" },
    ],
  });

  return (
    <UserContext.Provider
      value={{
        state,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
