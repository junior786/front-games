import {
    Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  TextField,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import "./styles.scss";

interface CadasterGameProps {
  status: boolean;
}
export function CadasterGameDialog({ status }: CadasterGameProps) {
  console.log("component", status);

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

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
            id="outlined-required"
            label="Nome do jogo"
            placeholder="The sims 5"
          />
          <TextField
            autoComplete="off"
            className="input"
            required
            id="outlined-required"
            label="Link da imagem"
            placeholder="http://google.images.com"
          />
        </form>
        <DialogActions>
          <Button>Cancelar</Button>
          <Button autoFocus>
            Cadastrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CadasterGameDialog;
