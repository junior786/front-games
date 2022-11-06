import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import "./styles.scss";

export  function Recover() {
    return (
        <section className="recover__form">
            <form action="post" className="recover__action">
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert>
                            <AlertTitle>Sucesso</AlertTitle>
                            E-mail enviado — <strong>confira!</strong>
                        </Alert>
                    </Stack>
                <TextField
                    className="input"
                    required
                    id="outlined-required"
                    label="E-mail"
                    placeholder="Email@gmail.com"
                />
                <div className="recover__button">
                    <Button variant="outlined">Enviar</Button>
                </div>
            </form>
            <div className="recover__line"></div>
    </section>    
    )
}
export default Recover;