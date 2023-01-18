import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import Advertiser from "./pages/advertiser/advertiser";
import Cadaster from "./pages/cadaster/cadaster";
import Games from "./pages/games/games"
import Login from "./pages/login/login";
import Recover from "./pages/recover/recover";
import Shift from "./pages/shift/shift";
import { Theme } from './assets/palette/theme';
import { ThemeProvider } from "@emotion/react";
import GameDetails from "./pages/gameDetails/gameDetails";


function App() {
  return (
    <ThemeProvider theme={ Theme }>
    <BrowserRouter>
      <Routes>
        <Route path="/advertiser" element={ <Advertiser/> }></Route>
        <Route path="/cadaster" element={ <Cadaster/> }></Route>
        <Route path="/games" element={ <Games/> }></Route>
        <Route path="/gamesDetails/:id" element={ <GameDetails/> }></Route>
        <Route path="/login" element={ <Login/> }></Route>
        <Route path="/recover" element={ <Recover/> }></Route>
        <Route path="/shift" element={ <Shift/> }></Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
