
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setCampo, limpiarFormulario } from '../../store/contactoSlice';

const Section = styled.section`
  padding: 4rem 1rem;
  background-color: #f5f5f5;
`;


const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

const Mapa = styled.iframe`
  width: 100%;
  height: 400px;
  border: 0;
  margin-bottom: 2rem;

  @media (min-width: 992px) {
    width: 50%;
    height: 500px;
    margin-bottom: 0;
  }
`;

const Formulario = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Campo = styled.div`
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 0.75rem;
  font-size: 1rem;
`;

const Boton = styled.button`
  background-color: #d50000;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    background-color: #b71c1c;
    font-style: italic;
  }
`;

const Contacto = () => {
  const dispatch = useDispatch();
  const { nombre, email, mensaje } = useSelector((state) => state.contacto);

  const handleChange = (e) => {
    dispatch(setCampo({ campo: e.target.name, valor: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', { nombre, email, mensaje });
    dispatch(limpiarFormulario());
  };

  return (
    <Section id="contactenos" aria-labelledby="contacto-heading">
      <Container>
        <Mapa
          title="Mapa de ubicación"
          src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Puebla%20City+(mexico)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          allowFullScreen
          loading="lazy"
        />
        <Formulario onSubmit={handleSubmit}>
          <h2 id="contacto-heading">Contáctanos</h2>
          <Campo>
            <label htmlFor="nombre">Nombre</label>
            <Input
              type="text"
              id="nombre"
              name="nombre"
              value={nombre}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </Campo>
          <Campo>
            <label htmlFor="email">Correo electrónico</label>
            <Input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </Campo>
          <Campo>
            <label htmlFor="mensaje">Mensaje</label>
            <Textarea
              id="mensaje"
              name="mensaje"
              value={mensaje}
              onChange={handleChange}
              required
              aria-required="true"
            />
          </Campo>
          <Campo>
            <Boton type="submit">Enviar</Boton>
          </Campo>
        </Formulario>
      </Container>
    </Section>
  );
};

export default Contacto;
