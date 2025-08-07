// src/components/Productos.jsx
import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { agregarAlCarrito } from '../../store/carritoSlice';


const productos = [
  { id: 1, nombre: 'Coca-Cola 200ml', precio: 10, imagen: './img/producto1.jpg' },
  { id: 2, nombre: 'Coca-Cola Light 600ml', precio: 22, imagen: './img/producto2.jpg' },
  { id: 3, nombre: 'Coca-Cola Energy 350ml', precio: 26, imagen: './img/producto3.jpg' },
  { id: 4, nombre: 'Coca-Cola Life 350ml', precio: 21, imagen: './img/producto4.jpg' },
  { id: 5, nombre: 'Coca-Cola Promocion 500ml', precio: 29, imagen: './img/producto5.jpg' },
  { id: 6, nombre: 'Coca-Cola Retornable 500ml', precio: 25, imagen: './img/producto6.jpg' },
  { id: 7, nombre: 'Coca-Cola Pack 6pz 3 lts', precio: 228, imagen: './img/producto7.jpg' },
  { id: 8, nombre: 'Coca-Cola Pack Mini 250ml', precio: 105, imagen: './img/producto8.jpg' },
  { id: 9, nombre: 'Coca-Cola Pack 6pz 220ml', precio: 103, imagen: './img/producto9.jpg' },
  { id: 10, nombre: 'Promo Jugo Cajita ', precio: 48, imagen: './img/producto10.jpg' },
  { id: 11, nombre: 'Agua Mineral Topo Chico 350ml', precio: 85.50, imagen: './img/producto11.jpg' },
  { id: 12, nombre: 'Pack Fresca-Coca-Cola 2 .5 lts', precio: 99.99, imagen: './img/producto12.jpg' },
];

const Section = styled.section`
  padding: 4rem 1rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const Title = styled.h2`
  color: #fff;
  text-align: center;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex: 1 1 300px;
  border: 1px solid #eee;
  padding: 1rem;
  border-radius: 6px;
  background-color: #fff;
  text-align: center;
`;

const Img = styled.img`
  max-width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Product = styled.h3`
  width: 100%;
  text-align: center;
  color: #000000;  
`;

const Price = styled.p`
  color: #000000;  
`;

const Boton = styled.button`
  margin-top: 1rem;
  background-color: #d50000;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: #b71c1c;
  }
`;

const Productos = () => {
  const dispatch = useDispatch();

  

  return (
    <Section aria-labelledby="productos-heading">
      <Container>
        <Title id="productos-heading">
          Productos a la Venta
        </Title>
        <Grid>
          {productos.map(producto => (
            <Card key={producto.id}>
              <Img src={producto.imagen} alt={producto.nombre} />
              <Product>{producto.nombre}</Product>
              <Price>${producto.precio.toFixed(2)}</Price>
              <Boton onClick={() => dispatch(agregarAlCarrito(producto))}>
                Agregar al carrito
              </Boton>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Productos;
