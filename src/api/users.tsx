import React from "react";
import usersData from "../database/users.json";
const UsersParse: React.FC = () => {
  function fetchUser() {
    /* const response = await (
      //await fetch("http://127.0.0.1:5500/src/database/users.json")).json();
    console.log(response); */
    return Promise.resolve(usersData);
  }
  fetchUser().then((res) => console.log(res));
  //Promise.resolve(usersData).then((response) => console.log(response));

  return <></>;
};
export default UsersParse;
