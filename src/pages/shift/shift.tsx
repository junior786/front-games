import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./styles.scss";

export  function Shift() {
    return (
        <section className="shift__form">
            <form action="post" className="shift__action">
                <TextField
                    className="input"
                    required
                    type="password"
                    id="outlined-required"
                    label="Nova Senha"
                    placeholder="Nova Senha"
                />
                <TextField
                    className="input"
                    required
                    type="password"
                    id="outlined-required"
                    label="Confirmar Senha"
                    placeholder="Confirmar Senha"
                />
                <div className="shift__button">
                    <Button color="secondary" variant="outlined">Cancelar</Button>
                    <Button variant="outlined">Atualizar</Button>
                </div>
            </form>
            <div className="shift__line"></div>
        </section> 
  )
}
export default Shift;