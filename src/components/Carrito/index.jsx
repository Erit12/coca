
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { vaciarCarrito, quitarDelCarrito } from '../../store/carritoSlice';


const Wrapper = styled.aside`
  background-color: #fff;
  padding: 2rem 1rem;
  max-width: 400px;
  margin: 0 auto;
  padding: 150px;
`;

const Titulo = styled.h2`
  text-align: center;
`;

const Lista = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Boton = styled.button`
  background-color: #d50000;
  color: white;
  border: none;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;

  &:hover {
    background-color: #b71c1c;
  }
`;

const Total = styled.p`
  font-weight: bold;
  text-align: right;
`;

const Carrito = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.carrito);

  

  const total = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <Wrapper aria-labelledby="carrito-heading">
      <Titulo id="carrito-heading">Carrito de Compras</Titulo>
      <Lista>
        {items.map(item => (
          <Item key={item.id}>
            <span>
              {item.nombre} x{item.cantidad}
            </span>
            <span>
              ${item.precio * item.cantidad}
              <Boton onClick={() => dispatch(quitarDelCarrito(item.id))}>X</Boton>
            </span>
          </Item>
        ))}
      </Lista>
      <Total>Total: ${total.toFixed(2)}</Total>
      {items.length > 0 && (
        <Boton onClick={() => dispatch(vaciarCarrito())} style={{ marginTop: '1rem' }}>
          Vaciar carrito
        </Boton>
      )}
    </Wrapper>
  );
};

export default Carrito;
