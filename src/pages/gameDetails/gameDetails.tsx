import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CadasterAnuncioDialog from "../../components/cadasterAnuncio/cadasterAnuncio";
import InfoModal from "../../components/infoAnuncio/infoAnuncioModal";
import { Anuncio } from "../../model/anuncio.request";
import { GameRequest } from "../../model/game.request";
import { getGameById } from "../../service/game.service";
import "./styles.scss";

export function GameDetails() {
  const [game, setGame] = useState<GameRequest>();
  const [open, setOpen] = useState<boolean>(false);
  const [openInfo, setOpenInfo] = useState<boolean>(false);
  const [anuncio, setAnuncio] = useState<{ player?: string, days?: string[], idDiscord?: string }>({});

  let { id } = useParams();
  const handleOff = () => {    
    setOpen(false);
  }

  useEffect(() => {
    if (id) getGameById(Number(id)).then((resp) => setGame(resp!.data));    
  }, []);

  const handleOffInfo = () => {
    setOpenInfo(false);
  }
  
  function modalInfo (player: string, days: string[], idDiscord: string) {
    setAnuncio({player, days, idDiscord});
    setOpenInfo(true);
    
  }
  return (
    <>
  { open ? <CadasterAnuncioDialog idGame={game!.idGame} status={ open } event={handleOff} /> : null }
  { openInfo ? <InfoModal anuncio={anuncio} status={ openInfo } event={handleOffInfo} /> : null }
  
      <section className="games__form">
      <div className="games__background">
            <h1>{ game?.nomeGame }</h1>
        </div>
        <div className="games__action">
          {
            <div className="games__table">
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow className="games__tableRow">
                      <TableCell colSpan="3">
                        Lista de Anuncios
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {game?.anuncios?.map((row: Anuncio, index: number) => (
                      
                      <TableRow
                        onClick={() => modalInfo(row.player, row.diasSemanas.map(x => x.day), row.idDiscord)}
                        key={index}
                        className="games__card"
                      >
                        <TableCell align="left">{row.player}</TableCell>
                        <TableCell align="left">
                          {row.diasSemanas.length} dias disponiveis
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          }
        </div>
        <div className="games__button">
            <Button variant="outlined" onClick={() => setOpen(true)}>Novo Anuncio</Button>
        </div>
      </section>
    </>
  );
}
export default GameDetails;
