import { Grid } from "@material-ui/core";
import React from "react";
import BottomBar from "./components/BottomBar";
import Cards from "./components/Cards";
import UserInfoCard from "./components/UserInfoCard";

const App = () => {
  return (
    <div className="App">
      <Grid>
        <Grid item>
          <Cards />
        </Grid>
        <Grid item>
          <BottomBar />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
