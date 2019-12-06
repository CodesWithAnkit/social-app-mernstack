import React from "react";
import UserList from "../components/UserList";

const User = props => {
  const USER = [
    {
      id: 1,
      name: "Ankit",
      image:
        "https://pbs.twimg.com/profile_images/949567706704965632/wohJhsTk.jpg",
      places: 3
    }
  ];
  return (
    <div>
      <UserList items={USER} />
    </div>
  );
};

export default User;
