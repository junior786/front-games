import {
  Button,
  Dialog,
  DialogActions, DialogTitle, TextField
} from "@mui/material";
import { useState } from "react";
import { postGameService } from "../../service/game.service";
import "./styles.scss";

interface CadasterGameProps {
  status: boolean;
  event: any;
}
export function CadasterGameDialog({ status, event }: CadasterGameProps ) {
  const [game, setGame] = useState<{nomeGame?: string, image?: string}>({ image: '', nomeGame: ''});


  function saveGame() {    
    if (game) postGameService(game).then(() => event);
    window.location.reload();
  }

  return (
    <div>
      <Dialog
        open={status}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Cadastrar novo jogo"}
        </DialogTitle>
        <form className="form-inputs" autoComplete="off">
          <TextField
            autoComplete="off"
            className="input"
            required
            onChange={ event => setGame({image: game?.image, nomeGame: event.target.value})}
            id="outlined-required"
            label="Nome do jogo"
            placeholder="The sims 5"
          />
          <TextField
            autoComplete="off"
            className="input"
            required
            onChange={event => setGame({image: event.target.value, nomeGame: game?.nomeGame})}
            id="outlined-required"
            label="Link da imagem"
            placeholder="http://google.images.com"
          />
        </form>
        <DialogActions>
          <Button onClick={event}>Cancelar</Button>
          <Button onClick={saveGame} autoFocus>
            Cadastrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CadasterGameDialog;
