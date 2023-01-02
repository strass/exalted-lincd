import React from "react";
import { linkedComponent } from "../../package";
import CharacterClass from "../../shapes/CharacterClass";

const Character = linkedComponent<CharacterClass>(
  CharacterClass,
  ({ source }) => {
    console.log(source);
    return <div>{source.name}</div>;
  }
);

export default Character;
