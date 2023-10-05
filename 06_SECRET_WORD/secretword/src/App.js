// CSS
import "./App.css";

// REACT
import { useCallback, useEffect, useState } from "react";

// data
import { wordsList } from "./data/words";

// component
import StartScreen from "./componentes/StartScreen";
import Game from "./componentes/Game";
import GameOver from "./componentes/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const pickAndCategory = () => {
    // escolha uma categoria aleatória
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];
    
      // escolha uma palavra aleatória
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

      return {word, category};

  };

  // inicia o jogo de palavras secretas
  const startGame = () => {
    // escolha a palavra e escolha a categoria
    const {word, category} = pickAndCategory();

    // crie uma matriz de letras
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((wl) => wl.toLowerCase());

    console.log(wordLetters);

    // preencher estados
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  };

  // processar a entrada da letra
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  // reinicia o jogo
  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
