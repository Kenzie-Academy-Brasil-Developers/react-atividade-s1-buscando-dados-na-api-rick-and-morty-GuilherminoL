import { useEffect, useState } from "react";
import CharCard from "../CharCard";
const Characters = ({ characters }) => {
  console.log(characters);
  return (
    <ul>
      {characters.map((character, index) => {
        console.log(character);
        return (
          <li key={index}>
            <CharCard character={character} />
          </li>
        );
      })}
    </ul>
  );
};
export default Characters;
