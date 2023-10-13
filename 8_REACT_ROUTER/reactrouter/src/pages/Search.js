import { Link, useSearchParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';

const Search = () => {
  const [searchParams] = useSearchParams();

  const url = "http://localhost:3000/products?" + searchParams;

  const { data: items, loading, error } = useFetch(url);


  return (
    <div>
      <h1>Resultados disponiveis</h1>
      {error && <p>Error ao buscar items</p>}
      {loading && <p>Carregando</p>}
      {items && items.map((item) => (
        <div>
          <h1>{item.name}</h1>
          <p>R$: {item.price}</p>
          {/* 6 - nested routes */}
          <Link to={`/products/${item.id}/info`} >Mais informações</Link>
        </div>
      ))}
    </div>
  )
}

export default Search