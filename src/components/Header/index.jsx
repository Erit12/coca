import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
//import logo from '/src/assets/logo.svg';

const HeaderWrapper = styled.header`
  width: 99%;
  background-color: #fff;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
  padding: 1rem 0;
  position: fixed;
  z-index: 1;
`;

const Container = styled.div`
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

const Logo = styled.img`
  height: 40px;
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  a {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    position: relative;

    &:hover {
      color: #d50000;
    }
  }
`;

const Badge = styled.span`
  background-color: #d50000;
  color: white;
  font-size: 0.75rem;
  box-sizing: border-box;
  padding: 2px 6px;
  border-radius: 50%;
  position: absolute;
  top: -8px;
  right: -12px;
`;

const Header = () => {
  const location = useLocation();
  const totalItems = useSelector((state) =>
    state.carrito.items.reduce((acc, item) => acc + item.cantidad, 0)
  );

  const soloInicio = location.pathname === '/productos' || location.pathname === '/carrito';

  return (
    <HeaderWrapper>
      <Container>
        <ScrollLink to="inicio" aria-label="Inicio" >
          <Logo src='./img/logo.svg' alt="Logo" />
        </ScrollLink>
        <Nav role="navigation" aria-label="Main navigation">
          <ScrollLink to="inicio">Inicio</ScrollLink>
          {!soloInicio && (
            <>
              <ScrollLink to="nosotros" smooth={true} duration={500}>Nosotros</ScrollLink >
              <ScrollLink to="servicios" smooth={true} duration={500}>Servicios</ScrollLink >
              <ScrollLink to="galeria" smooth={true} duration={500}>Galería</ScrollLink >
              <ScrollLink to="contactenos" smooth={true} duration={500}>Contacto</ScrollLink >
              <Link to="/productos">Productos</Link>
              
            </>
          )}
          <Link to="/carrito" style={{ position: 'relative' }}>
            🛒 Carrito
            {totalItems > 0 && <Badge>{totalItems}</Badge>}
          </Link>
        </Nav>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
