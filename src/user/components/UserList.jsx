import React from "react";
import Card from "../../shared/components/UIElemets/Card";
import UserItem from "./UserItem";
import "./UserList.css";

const UserList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h1>No user Found</h1>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map(user => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        );
      })}
    </ul>
  );
};

export default UserList;
