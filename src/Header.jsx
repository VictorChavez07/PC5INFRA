import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography align="center" variant="h5">
          Lecturas para Niños
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
