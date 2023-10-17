import React, { useEffect, useState } from "react";

const HookUseEffect = () => {
  // 1 - useEffect, sem dependências
  useEffect(() => {
    console.log("Estou sendo executado!");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  // 2 - array de deps. vazio
  useEffect(() => {
    console.log("Estou sendo executado apenas uma vez!");
  }, []);

  // 3- item no array de deps.
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("Executando apenas quando o anotherNumber muda");
    }
  }, [anotherNumber]);

  // 4 - cleanup do useEffect
  useEffect(() => {
    /* const timer = setTimeout(() => {
      console.log("Olá mundo!");

      setAnotherNumber(anotherNumber + 1);
    }, 2000);

    return () => clearTimeout(timer); */
  }, [anotherNumber]);

  return (
    <div>
      <h2>useEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar!</button>
      <p>Another Number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Mudar Another Number
      </button>
    </div>
  );
};

export default HookUseEffect;
