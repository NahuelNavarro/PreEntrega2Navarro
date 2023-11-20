import './App.css';
import Layout from './components/layout/layout';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ListaCards from './components/ListaCards/ListaCards';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductoFiltrado from './components/ListaCards/ProductoFiltrado';
import ContextProvider from './components/ContextProvider/ContextProvider';
import ResumenProductos from './components/ResumenProductos/ResumenProductos';
import CardDetalle from './components/ItemDetail/CardDetalle';
import FinalizarCompra from './components/FinalizarCompra/FinalizarCompra';
import FinalizarCompraFinal from './components/FinalizarCompra/FinalizarCompraFinal';

function App() {

  return (
    <ContextProvider>
      <BrowserRouter>
        <Layout>
          <ItemListContainer greeting={"Bienvenidos"}/>
          <Routes>
            <Route path='/' element={<ListaCards/>} />
            <Route path='/ProductoFiltrado/:title' element={<ProductoFiltrado/>} />
            <Route path='/DetalleProducto/:id' element={<CardDetalle/>} />
            <Route path='/ResumenProductos' element={<ResumenProductos/>}/>
            <Route path='/FinalizarCompra' element={<FinalizarCompra/>}/>
            <Route path='/FinalizarCompraFinal' element={<FinalizarCompraFinal/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
