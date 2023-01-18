import { Pagination } from "@mui/material";
import Button from "@mui/material/Button";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import CadasterGameDialog from "../../components/cadasterGame/cadasterGame";
import { GameRequest } from "../../model/game.request";
import { gameService } from "../../service/game.service";
import "./styles.scss";

function createData(
  imagemJogo: string,
  nameJogo: string,
  qntAnunciantes: number,
) {
  return { imagemJogo, nameJogo, qntAnunciantes};
}

const rows = [
  createData('ImagemJogo1','Nome Jogo 1', 5),
  createData('ImagemJogo2','Nome Jogo 2', 3),
  createData('ImagemJogo3','Nome Jogo 3', 2),
  createData('ImagemJogo4','Nome Jogo 4', 4),
  createData('ImagemJogo5','Nome Jogo 5', 1),
];

export function Games() {
  const [games, setGames] = useState<GameRequest[]>([]);
  const [recovery, setRecovery] = useState<GameRequest[]>();
  const [open, setOpen] = useState<boolean>(false);

  const doFilter = (value: string) => {
    if (value === '' && recovery) {
      setGames(recovery);
    } else {
      const filtered = games?.filter(name => name.nomeGame.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
      setGames(filtered);
    }
  }

  const handleOpen = () => {
    setOpen(true);
  } 

  const handleOff = () => {    
    setOpen(false);
  }

  const redirectGame = (id: number) => {
    window.location.href = `/gamesDetails/${id}`
  }

  useEffect(() => {
    gameService().then(data =>  {
      setGames(data!.data);
      setRecovery(data!.data);
    });
  }, [])

    return (
        <section className="games__form">
          { open ? <CadasterGameDialog status={ open } event={handleOff} /> : null }
            <form action="post" className="games__action">
                <TextField
                    className="input"
                    id="standard-search"
                    variant="standard"
                    label="Pesquisar jogo"
                    onChange={e => doFilter(e.target.value)}
                    //placeholder="Pesquisar jogo"
                />
                { 
                  ( games!.length > 0 ? <div className="games__table">
                  <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 700 }} aria-label="customized table">
                          <TableHead>
                              <TableRow className="games__tableRow">
                                  <TableCell colSpan="3" >Lista de Jogos Disponíveis</TableCell>
                              </TableRow>
                          </TableHead>
                          <TableBody>
                              {games?.map((row: GameRequest) => (
                                  <TableRow key={row.idGame} className="games__card" onClick={() => redirectGame(row.idGame)}>
                                      <TableCell component="th" scope="row">
                                          <img height="192" width="144" src={row.image} alt="Imagem" />
                                      </TableCell>
                                      <TableCell align="left">{row.nomeGame}</TableCell>
                                      <TableCell align="left">{row.anuncios.length} Anuncios</TableCell>
                                  </TableRow>
                              ))}
                          </TableBody>
                      </Table>
                  </TableContainer>
                  </div>
                  : <span>Nada encontrado :( </span>
                  )
                } 
                <div className="games__paginacao">
                  <Stack spacing={2} >
                    <Pagination count={10} color="primary" />
                  </Stack>
                </div>
                <div className="games__button">
                    <Button variant="outlined" onClick={handleOpen}>Novo Jogo</Button>
                </div>
            </form>
            <div className="games__line"></div>
    </section>    
    )
}
export default Games;