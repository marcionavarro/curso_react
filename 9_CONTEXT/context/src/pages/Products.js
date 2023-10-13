/* import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'; */

import { useCounterContext } from '../hooks/useCounterContext';
import { useTitleColorContext } from '../hooks/usetitleColorContext';

const Products = () => {
  //const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  const { color, dispatch } = useTitleColorContext();

  const setTitleColor = (color) => {
    dispatch({ type: color });
  }

  return (
    <div>
      <h1 style={{ color: color }}>Produtos</h1>
      <p>Valor do contador: {counter}</p>
      <button onClick={() => setTitleColor("RED")}>Vermelho</button>
      <button onClick={() => setTitleColor("BLUE")}>Azul</button>
    </div>
  )
}

export default Products