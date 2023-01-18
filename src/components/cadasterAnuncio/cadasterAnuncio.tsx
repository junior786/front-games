import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { postGameService, saveAnuncio } from "../../service/game.service";
import "./styles.scss";

interface CadasterGameProps {
  status: boolean;
  event: any;
  idGame: number;
}
export function CadasterAnuncioDialog({
  status,
  event,
  idGame,
}: CadasterGameProps) {
  const [days, setDays] = useState<{ day: string; status: boolean }[]>([
    { day: "Segunda-feira", status: false },
    { day: "Terca-feira", status: false },
    { day: "Quarta-feira", status: false },
    { day: "Quinta-feira", status: false },
    { day: "Sexta-feira", status: false },
    { day: "Sabado", status: false },
    { day: "Domingo", status: false },
  ]);

  function saveGame() {
    const daysOn = days.filter((x) => x.status).map((x) => x.day.toUpperCase().replace('-', '_'));
    
    if (idGame) saveAnuncio(daysOn, idGame).then(() => event);
    window.location.reload();
  }

  function changeStatus(day: string) {
    let daySelected = days.map((dayMap) => {
      if (dayMap.day === day) dayMap!.status = !dayMap?.status;
      return dayMap;
    });
    setDays(daySelected);
  }

  return (
    <div>
      <Dialog
        open={status}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Cadastrar novo anuncio"}
        </DialogTitle>
        <form className="form-inputs" autoComplete="off">
          <div style={{ width: "100%" }}>
            {days.map((daySelected, index) => (
              <div
                className="cadaster"
                onClick={() => changeStatus(daySelected.day)}
                key={index}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>{daySelected.day}</span>
                <Checkbox checked={daySelected.status} />
              </div>
              // <Checkbox tabIndex={-1} disableRipple />
            ))}
          </div>
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

export default CadasterAnuncioDialog;
