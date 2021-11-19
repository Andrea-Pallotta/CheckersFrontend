import { Divider, Grid, List, TextField } from "@mui/material";
import React from "react";

const UserList = ({ list }) => {
  return (
    <Grid item xs={3} style={{ borderRight: "1px solid #E0E0E0" }}>
      <Divider />
      <Grid item xs={12} style={{ padding: "10px" }}>
        <TextField
          id="outlined-basic-email"
          label="Search"
          variant="outlined"
          fullWidth
        />
      </Grid>
      <Divider />
      <List>{list}</List>
    </Grid>
  );
};

export default UserList;

/**
 * <Grid item xs={3} style={{ borderRight: "1px solid #E0E0E0" }}>
          <Divider />
          <Grid item xs={12} style={{ padding: "10px" }}>
            <TextField
              id="outlined-basic-email"
              label="Search"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Divider />
          <List>{listOfPlayers}</List>
        </Grid>
 */
