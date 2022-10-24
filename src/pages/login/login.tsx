import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import Card from "../../components/card/card";
import "./styles.scss";


export function Login() {
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
          type="password"
          id="outlined-required"
          label="senha"
          placeholder="senha"
        />
        <div className="login__password">
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Salvar senha" />
          </FormGroup>
          <span>Esqueceu sua senha?</span>
        </div>
        <div className="login__button">
          <Button variant="outlined">Entrar</Button>
          <Button variant="outlined">Cadastre-se</Button>
        </div>
      </form>
      <div className="login__line"></div>
    </section>
    
  );
}
export default Login;
