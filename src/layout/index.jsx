import React from "react";
import { Grid } from "@material-ui/core";
import Wrapper from "./styles";

import { useHistory } from "react-router";
import { useContext } from "react";
import { UserContext } from "../context";

const Layout = ({ children }) => {
  const history = useHistory();
  const { state } = useContext(UserContext);
  return (
    <Wrapper>
      <Grid className="header">
        <span className="logo">로고</span>
        <ul className="gnb">
          {state.sidebar.map((x, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  history.push(`/${x.key}`);
                }}
              >
                <span>{x.value}</span>
              </li>
            );
          })}
        </ul>
      </Grid>
      {children}
    </Wrapper>
  );
};

export default Layout;
