import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import './styles.scss'
interface CadasterGameProps {
    status: boolean;
    event: any;
    anuncio: { player?: string, days?: string[], idDiscord?: string, }
  }

export function InfoModal({status, event, anuncio}: CadasterGameProps) {
  return (
    <Dialog
      open={status}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Informação do anuncio"}</DialogTitle>
      <form className="form-inputs-info" autoComplete="off">
        <h1>{anuncio.idDiscord}</h1>
        <div className="main">
            {
                anuncio.days?.map((day, index) => (
                    <span key={index}>{day}</span>
                ))
            }
        </div>
      </form>
      <DialogActions>
        <Button onClick={event}>Cancelar</Button>
      </DialogActions>
    </Dialog>
  );
}

export default InfoModal;
