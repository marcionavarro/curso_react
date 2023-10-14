import { db } from '../../firebase/config';
import { useEffect, useState } from "react";
import styles from "./Register.module.css";
import { useAuthentication } from '../../hooks/useAuthentication';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!name || !email || !password) {
      setError("Por favor preencha todos os campos!");
      return;
    }

    const user = { name, email, password };

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais");
      return;
    }

    const res = await createUser(user);

    if (res) {
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }

  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError])

  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Nome do usuário"
            required
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="E-mail do usuário"
            required
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Senha do usuário"
            required
          />
        </label>
        <label>
          <span>Confirmar Senha:</span>
          <input
            type="password"
            name="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            placeholder="Confirmar senha do usuário"
            required
          />
        </label>
        {!loading && <button className="btn">Cadastrar</button>}
        {loading && <button className="btn" disabled>Aguarde...</button>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
