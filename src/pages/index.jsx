/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import Wrapper from "./styles";

import { useHistory } from "react-router";

const Portpolio = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <Grid className="Main">
        <Grid className="Info">
          <h2>PORTPOLIO</h2>
          <Grid>
            <button
              className="Btn_Project"
              onClick={() => {
                history.push("/project");
              }}
            >
              Project
            </button>
            <button
              className="Btn_Profile"
              onClick={() => {
                history.push("/profile");
              }}
            >
              Profile
            </button>
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Portpolio;