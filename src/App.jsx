import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/index.jsx'
import Banner from './components/Banner/index.jsx';
import Nosotros from './components/Nosotros/index.jsx';
import Servicios from './components/Servicios/index.jsx';
import Galeria from './components/Galeria/index.jsx';
import Contacto from './components/Contacto/index.jsx';
import Footer from './components/Footer/index.jsx';
import Productos from './components/Productos/index.jsx';
import Carrito from './components/Carrito/index.jsx';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <main>
                <Banner />
                <Nosotros />
                <Servicios />
                <Galeria />
                <Contacto />
              </main>
              <Footer />
            </>
          }
        />
        <Route path="/productos" element={<Productos />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </Router>
  );
};

export default App;
