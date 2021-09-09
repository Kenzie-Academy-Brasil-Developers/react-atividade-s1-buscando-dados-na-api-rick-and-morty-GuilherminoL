import { useEffect, useState } from "react";
import CharCard from "../CharCard";
import "./style.css";
const Characters = ({ characters }) => {
  console.log(characters);
  return (
    <ul className="charactersList">
      {characters.map((character, index) => {
        console.log(character);
        return (
          <li className="character" key={index}>
            <CharCard character={character} />
          </li>
        );
      })}
    </ul>
  );
};
export default Characters;
