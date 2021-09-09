import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacter] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((response) => setCharacter(response.results))
      .catch((err) => alert(err));
  }, []);
  console.log(characters);
  return (
    <>
      <Characters characters={characters} />
    </>
  );
}

export default App;
