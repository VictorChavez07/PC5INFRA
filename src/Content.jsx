import React from "react";
import { Grid } from "@material-ui/core";
import lectureList from "./mock";
import Sidebar from "./Sidebar";

const Content = () => {
  return (
    <Grid container spacing={2}>
      <Sidebar data={lectureList} />
    </Grid>
  );
};

export default Content;
