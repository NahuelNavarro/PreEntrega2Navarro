import './App.css';
import Layout from './components/layout/layout';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ListaCards from './components/ListaCards/ListaCards';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductoFiltrado from './components/ListaCards/ProductoFiltrado';
import Prueba from './components/NavBar/prueba';
import CardDetalle from './components/Card/CardDetalle';
import { ColeccionContext } from './context/ColeccionContext';
import { useContext, useState } from 'react';

function App() {
  const [coleccion,setColeccion]=useState([])

  return (
    <ColeccionContext.Provider value={{coleccion, setColeccion}}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<ListaCards/>} />
            <Route path='/ProductoFiltrado/:title' element={<ProductoFiltrado/>} />
            <Route path='/DetalleProducto/:id' element={<CardDetalle/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ColeccionContext.Provider>
  );
}

export default App;
