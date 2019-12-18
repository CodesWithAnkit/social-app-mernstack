import React from "react";
import Input from "../../shared/components/FormELement/Input/Input";
import "./NewPlace.css";

const NewPlaces = () => {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[]}
        errorText="Please enter a valid title"
      />
    </form>
  );
};

export default NewPlaces;
