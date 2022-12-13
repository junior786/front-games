import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { FilledInput, FormControl, InputAdornment, InputLabel, Link, Pagination } from "@mui/material";
import "./styles.scss";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Theme } from "../../assets/palette/theme";
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { Stack } from "@mui/system";
/*
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
*/

function createData(
  imagemJogo: string,
  nameJogo: string,
) {
  return { imagemJogo, nameJogo};
}

const rows = [
  createData('ImagemJogo1','Nome Jogo 1'),
  createData('ImagemJogo2','Nome Jogo 2'),
  createData('ImagemJogo3','Nome Jogo 3'),
  createData('ImagemJogo4','Nome Jogo 4'),
  createData('ImagemJogo5','Nome Jogo 5'),
];

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];


export  function Games() {
    return (
        <section className="games__form">
            <form action="post" className="games__action">
                <TextField
                    className="input"
                    id="standard-search"
                    variant="standard"
                    label="Pesquisar jogo"
                    //placeholder="Pesquisar jogo"
                />
                <div className="games__table">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow className="games__tableRow">
                                <TableCell Style="font-size:20px;font-weight:600;" colspan="2" >Lista de Jogos Disponíveis</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.imagemJogo}>
                                    <TableCell component="th" scope="row">
                                        {row.imagemJogo}
                                    </TableCell>
                                    <TableCell align="left">{row.nameJogo}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                </div>
                <div className="games__paginacao">
                  <Stack spacing={2} >
                    <Pagination count={10} color="primary" />
                  </Stack>
                </div>
                <div className="games__button">
                    <Button variant="outlined">Novo Jogo</Button>
                </div>
                <div>
                  <Box sx={{ height: 110, transform: 'translateZ(0px)', flexGrow: 1 }}>
                    <SpeedDial
                      ariaLabel="SpeedDial basic example"
                      sx={{ position: 'absolute', bottom: 16, right: 16 }}
                      icon={<SpeedDialIcon />}
                      >
                      {actions.map((action) => (
                        <SpeedDialAction
                          key={action.name}
                          icon={action.icon}
                          tooltipTitle={action.name}
                        />
                      ))}
                    </SpeedDial>
                  </Box>
                </div>
            </form>
            <div className="games__line"></div>
    </section>    
    )
}
export default Games;