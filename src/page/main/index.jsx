import React from "react";
import { Grid } from "@material-ui/core";
import Wrapper from "./styles";

const MainSection = () => {
  return (
    <Wrapper>
      <Grid container alignItems="center" className="Main">
        <Grid className="Title">PORTPOLIO</Grid>
      </Grid>
    </Wrapper>
  );
};

export default MainSection;
