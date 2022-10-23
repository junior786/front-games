import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./App.css";
import { Cadaster } from "./pages/cadaster/cadaster";
import Login from "./pages/login/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadaster" element={ <Cadaster/> }></Route>
        <Route path="/login" element={ <Login/> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
