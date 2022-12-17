import Button from "@mui/material/Button";
import { Pagination } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
//import SaveIcon from '@mui/icons-material/Save';
//import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { Stack } from "@mui/system";
import Typography from "@material-ui/core/Typography";
import "./styles.scss";


function createData(
  imagemAnunciante: string,
  nameAnuciante: string,
  dias: string,
  horarios: string,
  chats: string,
) {
  return { imagemAnunciante, nameAnuciante, dias, horarios, chats};
}

const rows = [
  createData('Avatar','John Wesley', '17/12/2022, 15/01/2023', '15h a 22h', 'Imagem/Chats'),
  createData('Avatar','Natacha', '30/12/2022, 30/01/2023', '10h a 00h', 'Imagem/Chats'),
  createData('Avatar','Denise', '05/01/2023, 09/02/2023', '13h a 16h', 'Imagem/Chats'),
  createData('Avatar','Ricardo', '03/03/2023, 03/04/2023', '1h a 3h', 'Imagem/Chats'),
  createData('Avatar','Eduarda', '07/01/2023, 26/01/2023', '20h a 22h', 'Imagem/Chats'),
];

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
//  { icon: <SaveIcon />, name: 'Save' },
//  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];


export  function Advertiser() {
    return (
        <section className="advertiser__form">
            <form action="post" className="advertiser__action">
            <Typography variant="h5" component="div">
                Lista de Anúncios Disponíveis
            </Typography>
            <div className="advertiser__line_horizontal"></div>
            <div className="advertiser__table">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.imagemAnunciante}>
                                    <TableCell component="th" scope="row">
                                        {row.imagemAnunciante}
                                    </TableCell>
                                    <TableCell align="left">{row.nameAnuciante}</TableCell>
                                    <TableCell align="center">{row.dias}</TableCell>
                                    <TableCell align="left">{row.horarios}</TableCell>
                                    <TableCell align="left">{row.chats}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                </div>
                <div className="advertiser__paginacao">
                  <Stack spacing={2} >
                    <Pagination count={3} color="primary" />
                  </Stack>
                </div>
                <div className="advertiser__button">
                    <Button variant="outlined">Novo Anunciante</Button>
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
            <div className="advertiser__line"></div>
    </section>    
    )
}
export default Advertiser;