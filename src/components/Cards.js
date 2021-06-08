import React, { useEffect, useState } from "react";
import { getUserDetails } from "../apicalls/getUserDetails";
import Grid from '@material-ui/core/Grid';
import UserInfoCard from "./UserInfoCard";

const Cards = () => {
    const [users, setUsers] = useState([]);
    const getUserInfo = () => {
      getUserDetails()
        .then((data) => {
          setUsers(data.results);
          console.log("user deatils", data);
        })
        .catch((err) => {
          console.log("error", err);
        });
    };
    useEffect(() => {
      getUserInfo();
    }, []);
  return (
    <Grid container  style={{display: 'flex'}} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={1}>
          {users.map((user, index) => (
            <Grid item style={{width: "345px"}}>
              <UserInfoCard key={index} firstname={user.name.first} lastname={user.name.last} profilePic={user.picture.medium}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
      </Grid>
    // <div>
    //   {users.map((user, index) => (
    //     <UserInfoCard key={index} firstname={user.name.first} lastname={user.name.last} profilePic={user.picture.medium}/>
    //   ))}
    // </div>
  );
};

export default Cards;
