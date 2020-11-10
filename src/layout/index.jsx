import React, { useContext, useState } from "react";
import { Grid } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Wrapper from "./styles";

import { useHistory } from "react-router";
import { UserContext } from "../context";

const Layout = ({ children }) => {
  const history = useHistory();
  const { state, modeDarkFunction } = useContext(UserContext);
  const [modeDark, setModeDark] = useState(false);
  return (
    <Wrapper>
      <Grid container justify="space-between" className="header">
        <Grid
          item
          className={state.modeDark ? "logo on" : "logo"}
          onClick={() => {
            history.push("/portpolio/");
            window.scrollTo(0, 0);
            window.location.reload();
          }}
        >
          로고
        </Grid>
        <Grid item className="nav">
          <ul className="gnb">
            {state.sidebar.map((x, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    history.push(`${x.key}`);
                  }}
                >
                  <span>{x.value}</span>
                </li>
              );
            })}
          </ul>
          <ul className="util">
            <li>
              <button
                onClick={() => {
                  modeDarkFunction(!modeDark);
                  setModeDark(!modeDark);
                }}
              >
                <Brightness4Icon />
              </button>
            </li>
            <li>
              <a href="https://github.com/dev-donghyuk" target="_blank">
                <GitHubIcon />
              </a>
            </li>
          </ul>
        </Grid>
      </Grid>
      {children}
    </Wrapper>
  );
};

export default Layout;
