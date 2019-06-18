import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css';
import Precios from "./components/Precios";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/" component={Precios} exact/>
          <Route path="/proyectosrealizados" component={Proyectos} />
          <Route path="/contacto" component={Contacto} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
