import { useEffect, useState } from "react";
import CharCard from "../CharCard";
import "./style.css";
const Characters = ({ characters }) => {
  const filterCharacterName = (character) => {
    if (character.name.length > 16) {
      console.log(character.name);
      character.name = character.name.slice(0, 16) + " ...";
    }
  };
  return (
    <ul className="charactersList">
      {characters.map((character, index) => {
        return (
          <li className="character" key={index}>
            {filterCharacterName(character)}
            <CharCard character={character} />
          </li>
        );
      })}
    </ul>
  );
};
export default Characters;
