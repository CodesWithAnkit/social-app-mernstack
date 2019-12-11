import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the famous skyscraper in the world",
    imageUrl:
      "https://lh5.googleusercontent.com/p/AF1QipOn2xg7XCQwOdELUrBpgCTXv7TmpVTPXOKQhNeA=w480-h240-k-no",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: "40.7484405",
      lng: "-73.9856644"
    },
    creator: "u1"
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the famous skyscraper in the world",
    imageUrl:
      "https://lh5.googleusercontent.com/p/AF1QipOn2xg7XCQwOdELUrBpgCTXv7TmpVTPXOKQhNeA=w480-h240-k-no",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: "40.7484405",
      lng: "-73.9856644"
    },
    creator: "u2"
  },
  {
    id: "p3",
    title: "Empire State Building",
    description: "One of the famous skyscraper in the world",
    imageUrl:
      "https://lh5.googleusercontent.com/p/AF1QipOn2xg7XCQwOdELUrBpgCTXv7TmpVTPXOKQhNeA=w480-h240-k-no",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: "40.7484405",
      lng: "-73.9856644"
    },
    creator: "u3"
  }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loaded = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loaded} />;
};

export default UserPlaces;
