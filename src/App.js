import { useEffect, useState } from "react";
import "./App.css";
import Img from "./Img";
import SearchSection from "./SearchSection";

function App() {
  const [searchValue, setSearchValue] = useState("bulbasaur");
  const [name, setName] = useState("");
  const [frontImg, setFrontImg] = useState("");
  const [backImg, setBackImg] = useState("");

  useEffect(() => {
    const getData = async () => {
      let url = `https://pokeapi.co/api/v2/pokemon/${searchValue}`;

      let result = await fetch(url).then((result) => result.json());

      setName(result.name);
      setFrontImg(result.sprites.front_default);
      setBackImg(result.sprites.back_default);
      console.log(result);
    };

    getData();
  }, [searchValue]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>POKEDEX</h2>
        <SearchSection searchValue={setSearchValue} />
        <Img name={name} frontImg={frontImg} backImg={backImg} />
      </header>
    </div>
  );
}

export default App;
