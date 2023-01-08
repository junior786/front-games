import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { LoginRequest } from "../../model/login.request";
import { loginService } from "../../service/login.service";
import "./styles.scss";
import Cookies from 'universal-cookie';


export function Login() {
  console.log('atyetse');
  const [login, setLogin] = useState<LoginRequest>();
 
  useEffect(() => {
  },[login])
 
  
 const handleChangeUsername = (event: any) => {
  const loginRequest: LoginRequest = { login: event.target.value, password: login?.password } 
  setLogin(loginRequest);
  }

  const handleChangePassword = (event: any) => {
    const loginRequest: LoginRequest = { login: login?.login , password: event.target.value } 
    setLogin(loginRequest);
  }

  const goToGames = (cookie: string) => {
    const cookies = new Cookies();
    cookies.set('token', cookie);
    window.location.href = '/games';
  }

  const submit = () => {

    if (login?.password && login.login) {
      loginService(login)
      .then(resp => resp.data)
      .then(cookie => goToGames(cookie.token))
      .catch()
    }
   
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
          onChange={handleChangeUsername}
        />
        <TextField
          className="input"
          required
          type="password"
          id="outlined-required"
          label="senha"
          placeholder="senha"
          onChange={handleChangePassword}
        />
        <div className="login__password">
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Salvar senha" />
          </FormGroup>
          <span>Esqueceu sua senha?</span>
        </div>
        <div className="login__button">
          <Button variant="outlined" disabled={(!login?.password || !login?.login)} onClick={submit}>Entrar</Button>
          <Button variant="outlined">Cadastre-se</Button>
        </div>
      </form>
      <div className="login__line"></div>
    </section>
    
  );
}
export default Login;
