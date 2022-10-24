import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import { Cadaster } from "./pages/cadaster/cadaster";
import Login from "./pages/login/login";
import { Theme } from './assets/palette/theme';
import { ThemeProvider } from "@emotion/react";

function App() {
  return (
    <ThemeProvider theme={ Theme }>
    <BrowserRouter>
      <Routes>
        <Route path="/cadaster" element={ <Cadaster/> }></Route>
        <Route path="/login" element={ <Login/> }></Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
