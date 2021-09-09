import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacter] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((response) => setCharacter(response.result))
      .catch((err) => alert(err));
  }, []);
  console.log(characters);
  return <> </>;
}

export default App;
