import "./App.css";
import {useState, useEffect} from "react";
import {useFetch} from './hooks/useFetch';

const url = "http://localhost:3000/products";

function App() {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const {data: items, httpConfig, loading, error} = useFetch(url);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const product = {name, price};
        httpConfig(product, 'POST');

        setName("");
        setPrice("");

    };

    const handleRemove = (id) => {
        httpConfig(id, "DELETE");
    }

    return (
        <div className="App">
            <h1>Lista de produtos</h1>
            {loading && <p>Carregando dados...</p>}
            {error && <p>{error}</p>}
            {!error && (
                <ul>
                    {items && items.map((product) => (
                        <li key={product.id}>
                            Produto - {product.name} R$: {product.price}
                            <button onClick={() => handleRemove(product.id)}>Excluir</button>
                        </li>
                    ))}
                </ul>
            )}
            <div className="add-product">
                <form onSubmit={handleSubmit}>
                    Nome:
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    Preço:
                    <input
                        type="text"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    {loading &&  <input type="submit" value="Aguarde..." disabled/>}
                    {!loading &&  <input type="submit" value="Criar"/>}
                </form>
            </div>
        </div>
    );
}

export default App;
