import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";
import "./styles.scss";



export  function Cadaster() {
    return (
        <section className="cadaster__form">
            <form action="post" className="cadaster__action">
                <TextField
                    className="input"
                    required
                    id="outlined-required"
                    label="Nome completo"
                    placeholder="Nome completo"
                 />
                <TextField
                    className="input"
                    required
                    id="outlined-required"
                    label="Nome de usuário"
                    placeholder="Nome de usuário"
                />
                <TextField
                    className="input"
                    required
                    id="outlined-required"
                    label="E-mail"
                        placeholder="Email@gmail.com"
                />
                <TextField
                    className="input"
                    required
                    type="password"
                    id="outlined-required"
                    label="Senha"
                    placeholder="Senha"
                />
                <TextField
                    className="input"
                    required
                    type="password"
                    id="outlined-required"
                    label="Confirmar Senha"
                    placeholder="Confirmar Senha"
                />
                <div className="cadaster__password">
                    <FormGroup>
                        <FormControlLabel control={<Checkbox  />} label="Concordo com os" />
                    </FormGroup>
                    <Link href="#" underline="hover" rel="noopener"> {'Termos de uso'} </Link> 
                </div>
                <div className="cadaster__button">
                    <Button variant="outlined">Cadastrar</Button>
                </div>
            </form>
            <div className="cadaster__line"></div>
    </section>    
    )
}
export default Cadaster;