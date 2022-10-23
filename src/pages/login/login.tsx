import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react'
import "./styles.scss";
import imageEye from '../../assets/password-eye.png'
export function Login() {
    const [ visiblePassword, setvisiblePassword ] = useState<boolean>(false);
    const [ password, setPassword ] = useState<string>('');

    function ChangevisiblePassword () {
        setvisiblePassword(!visiblePassword);
    }


  return (
    <section className="login__form">
      <form action="post" className="login__action">
        <TextField
          className="input"
          required
          id="outlined-required"
          label="usuario"
          placeholder="usuario"
        />
        <TextField
          className="input"
          required
          type={visiblePassword ? 'text' : 'password'}
          id="outlined-required"
          label="senha"
          placeholder="senha"
        />
        <img src={imageEye} onClick={ ChangevisiblePassword } className="login__eye" width="20px" height="20px" /> 
        <div className="login__button">
            <Button variant="outlined">Entrar</Button>
        </div>
      </form>
      

    </section>
  );
}
export default Login;
