// - 4 importação de componentes
import FirstComponent from "./components/FirstComponent";

// 5 - desestruturando props
import SecondComponent from "./components/SecondComponent";
import Destruturing, { Category } from "./components/Destruturing";

// 6 - useState
import State from "./components/State";
import { createContext } from "react";

// 10 - utilizando contexto
import Context from "./components/Contentx";

// 8 - type
type textOrNull = string | null;
type fixed = "Isso" | "ou" | "Aquilo";

// 9 - context
interface IAppContext {
  language: string;
  framework: string;
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - variaveis
  const name: string = "Marcio";
  const age: number = 40;
  const isWorking: boolean = false;

  // 2 - funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`;
  }

  // 8 - type
  const myText: textOrNull = "Tem algum texto aqui";
  let mySecondText: textOrNull = null;
  // mySecondText = "Opa";

  const testandoFixed: fixed = "Isso";

  // 9 - context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5
  }

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>React com Typescript</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && (
          <div>
            <p>Está trabalhando!</p>
          </div>
        )}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name="Segundo" />
        <Destruturing
          title="Primeiro Post"
          content="Algum conteudo"
          commentsQty={10}
          tags={["Js", "Ts"]}
          category={Category.TS}
        />

        <Destruturing
          title="Segundo Post"
          content="Algum conteudo 2"
          commentsQty={10}
          tags={["PHP"]}
          category={Category.P}
        />
        <State />
        {myText && <p>Tem texto na variável</p>}
        {mySecondText}
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
