// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';
import logoBlanco from '../../assets/img/logo-blanco.png';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background-color: #111;
  color: #fff;
  font-size: 0.95rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Column = styled.div`
  flex: 1 1 calc(25% - 2rem);

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }

  h3 {
    margin-bottom: 1rem;
    color: #f44336;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Logo = styled.img`
  width: 120px;
  margin-bottom: 1rem;
`;

const Redes = styled.ul`
  display: flex;
  gap: 1rem;
  padding-left: 0;

  li {
    list-style: none;
  }

  a {
    color: white;
    font-size: 1.2rem;

    &:hover {
      color: #f44336;
    }
  }
`;

const BarraInferior = styled.div`
  text-align: center;
  padding: 1rem;
  background-color: #000;
  font-size: 0.85rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Column>
          <Logo src={logoBlanco} alt="Logo Coca-Cola Blanco" />
          <p>
            Destapa la Felicidad
          </p>
        </Column>

        <Column>
          <h3>Temas Relacionados</h3>
          <nav aria-label="Temas Relacionados">
            <ul>
              <li><a href="#">Aviso de privacidad</a></li>
              <li><a href="#">Empresa socialmente responsable</a></li>
              <li><a href="#">Bolse de trabajo</a></li>
            </ul>
          </nav>
        </Column>

        <Column>
          <h3>Datos de Contacto</h3>
          <address>
            <ul>
              <li>eric.mor.labastida@gmail.com</li>
              <li>+52 222 222 2222</li>
              <li>
                Domicilio Conocido #3445<br />
                Centro, Puebla, México
              </li>
            </ul>
          </address>
        </Column>

        <Column>
          <h3>Redes Sociales</h3>
          <Redes>
            <li>
              <a href="#"><FaFacebook /></a>
            </li>
            <li>
              <a href="#"><FaTwitter /></a>
            </li>
            <li>
              <a href="#"><FaInstagram /></a>
            </li>
          </Redes>
        </Column>
      </Container>

      <BarraInferior>&copy; Derechos Reservados - 2025</BarraInferior>
    </FooterWrapper>
  );
};

export default Footer;
