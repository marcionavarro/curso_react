import styles from './Register.module.css'

const Register = () => {
  return (
    <div>
      <h1>Cadastre-se para postar</h1>
      <form>
        <label>
          <span>Nome:</span>
          <input type='text' name='name' placeholder='Nome do usuário' required />
        </label>
        <label>
          <span>E-mail:</span>
          <input type='email' name='email' placeholder='E-mail do usuário' required />
        </label>
        <label>
          <span>Senha:</span>
          <input type='password' name='password' placeholder='Senha do usuário' required />
        </label>
        <label>
          <span>Confirmar Senha:</span>
          <input type='password' name='confirm-password' placeholder='Confirmar senha do usuário' required />
        </label>
        <button className='btn' >Cadastrar</button>
      </form>
    </div>
  )
}

export default Register