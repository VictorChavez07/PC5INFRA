import React from "react";
import { Grid } from "@material-ui/core";
import Header from "./Header";
import Content from "./Content";

const App = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container style={{ paddingTop: "32px" }}>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8} spacing={3}>
          <Content />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
};

export default App;
