// src/components/Header.jsx
import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import logo from '/src/assets/logo.svg';

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

  console.log(location.pathname);
  const soloInicio = location.pathname === '/productos' || location.pathname === '/carrito';

  //console.log(soloInicio);

  return (
    <HeaderWrapper>
      <Container>
        <Link to="/" aria-label="Inicio">
          <Logo src={logo} alt="Logo" />
        </Link>
        <Nav>
          <Link to="/">Inicio</Link>
          {!soloInicio && (
            <>
              <a href="#nosotros">Nosotros</a>
              <a href="#servicios">Servicios</a>
              <a href="#galeria">Galería</a>
              <a href="#contactenos">Contacto</a>
              <Link to="/productos">Productos</Link>
              <Link to="/carrito" style={{ position: 'relative' }}>
                🛒 Carrito
                {totalItems > 0 && <Badge>{totalItems}</Badge>}
              </Link>
            </>
          )}
        </Nav>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
