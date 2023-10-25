import './App.css';
import Layout from './components/layout/layout';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ListaCards from './components/ListaCards/ListaCards';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductoFiltrado from './components/ListaCards/ProductoFiltrado';
import Prueba from './components/NavBar/prueba';
import CardDetalle from './components/Card/CardDetalle';
import ContextProvider from './components/ContextProvider/ContextProvider';
import ResumenProductos from './components/ResumenProductos/ResumenProductos';

function App() {

  return (
    <ContextProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<ListaCards/>} />
            <Route path='/ProductoFiltrado/:title' element={<ProductoFiltrado/>} />
            <Route path='/DetalleProducto/:id' element={<CardDetalle/>} />
            <Route path='/ResumenProductos' element={<ResumenProductos/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
