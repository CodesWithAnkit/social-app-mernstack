import React from 'react';
import { useParams } from 'react-router-dom';
import Input from '../../shared/components/FormELement/Input/Input';
import Button from '../../shared/components/FormELement/Button/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/utils/validators';

// Dummy places
const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the famous skyscraper in the world',
    imageUrl:
      'https://lh5.googleusercontent.com/p/AF1QipOn2xg7XCQwOdELUrBpgCTXv7TmpVTPXOKQhNeA=w480-h240-k-no',
    address: '20 W 34th St, New York, NY 10001, United States',
    location: {
      lat: '40.7484405',
      lng: '-73.9856644'
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the famous skyscraper in the world',
    imageUrl:
      'https://lh5.googleusercontent.com/p/AF1QipOn2xg7XCQwOdELUrBpgCTXv7TmpVTPXOKQhNeA=w480-h240-k-no',
    address: '20 W 34th St, New York, NY 10001, United States',
    location: {
      lat: '40.7484405',
      lng: '-73.9856644'
    },
    creator: 'u2'
  },
  {
    id: 'p3',
    title: 'Empire State Building',
    description: 'One of the famous skyscraper in the world',
    imageUrl:
      'https://lh5.googleusercontent.com/p/AF1QipOn2xg7XCQwOdELUrBpgCTXv7TmpVTPXOKQhNeA=w480-h240-k-no',
    address: '20 W 34th St, New York, NY 10001, United States',
    location: {
      lat: '40.7484405',
      lng: '-73.9856644'
    },
    creator: 'u3'
  }
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifyPlace = DUMMY_PLACES.find(p => p.id === placeId);

  if (!identifyPlace) {
    return (
      <div className="center">
        <h1>Conuld Not find Place</h1>
      </div>
    );
  }
  return (
    <form>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please Enter a valid Title"
        onInput={() => {}}
        value={identifyPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid Description (at least 5 characters"
        onInput={() => {}}
        value={identifyPlace.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
