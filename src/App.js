import './App.css';
import Layout from './components/layout/layout';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ListaCards from './components/ListaCards/ListaCards';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductoFiltrado from './components/ListaCards/ProductoFiltrado';
import Prueba from './components/NavBar/prueba';
import CardDetalle from './components/Card/CardDetalle';

function App() {
  return (
    <BrowserRouter>
       <Layout>
        <Routes>
          <Route path='/' element={<ListaCards/>}/>
          <Route path='/ProductoFiltrado/:title' element={<ProductoFiltrado/>}/>
          <Route path='/DetalleProducto/:id' element={<CardDetalle/>}/>

        </Routes>
      </Layout>
    </BrowserRouter>
   
  );
}

export default App;
