import { useEffect, useState } from "react";
import CharCard from "./CharCard";
const Characters = ({ characters }) => {
  return (
    <ul>
      {characters.map((character, index) => {
        return (
          <li key={index} character={character}>
            <CharCard />
          </li>
        );
      })}
    </ul>
  );
};
