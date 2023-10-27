import imageRickMorty from "./img/rick-morty.png";
import "./App.css";
import { useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState(null);

  const redApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();

    setCharacters(characterApi.results);
  };

  console.log(characters);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="tilte"> Rick & Morty </h1>

        {characters ? (
          <Characters characters={characters} />
        ) : (
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className="img-home" />
            <button onClick={redApi} className="btn-search">
              Buscar personanje
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
