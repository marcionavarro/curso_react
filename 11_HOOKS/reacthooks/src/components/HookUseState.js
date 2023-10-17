import React, { useState } from "react";

const HookUseState = () => {
  // 1 - useState
  var userName = "João";
  const [name, setName] = useState("Marcio");

  const changeNames = () => {
    userName = "João Souza";
    setName("Marcio Navarro");

    console.log(name);
    console.log(userName);
  };

  console.log(name);

  // 2 - useState e input
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();

    // envio a um API
    console.log(age);
  }

  return (
    <div>
      {/* 1 - useState */}
      <h2>useState:</h2>
      <p>Variavel: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes</button>

      {/* 2 - useState e inpur */}
      <p>Digite a sua idade</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Enviar" />
        <p>Voçê tem {age} anos</p>
      </form>
    </div>
  );
};

export default HookUseState;
