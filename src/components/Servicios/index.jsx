// src/components/Servicios.jsx
import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 1rem;
  background-color: #ffffff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Card = styled.div`
  flex: 1 1 calc(33.333% - 2rem);
  background-color: #fafafa;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

const ImageWrapper = styled.div`
  aspect-ratio: 1 / 1;
  overflow: hidden;
`;

const Title = styled.h2`
  width: 100%;
  text-align: center;
  color: #000000;
`;

const Img = styled.img`
  width: 100%;
  height: 75%;
  
`;

const Content = styled.div`
  padding: 1rem;
`;

const SubTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: #d50000;
`;

const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #000000;
`;

const Button = styled.a`
  display: inline-block;
  background-color: #333;
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  &:hover {
    background-color: #000;
  }
`;

const serviciosData = [
  {
    id: 1,
    titulo: 'Entrega de productos',
    texto:
      'Entregamos nuestros productos en cualquier lugar de america latina',
    imagen: '../src/assets/img/servicios4.jpg',
  },
  {
    id: 2,
    titulo: 'Diversidad de Productos',
    texto:
      'Contamos con una amplia diversidad de productos para satisfacer a todos.',
    imagen: '../src/assets/img/servicios2.jpg',
  },
  {
    id: 3,
    titulo: 'Moviliario',
    texto:
      'Contamos con una gran variedad de articulos de moviliario para cada establecimiento.',
    imagen: '../src/assets/img/servicios3.jpg',
  },
];

const Servicios = () => {
  return (
    <Section id="servicios" aria-labelledby="servicios-heading">
      <Container>
        <Title id="servicios-heading" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Nuestros Servicios
        </Title>
        <Grid>
          {serviciosData.map((servicio) => (
            <Card key={servicio.id}>
              <ImageWrapper>
                <Img src={servicio.imagen} alt={servicio.titulo} />
              </ImageWrapper>
              <Content>
                <SubTitle>{servicio.titulo}</SubTitle>
                <Text>{servicio.texto}</Text>
                <Button href="#">Ver más</Button>
              </Content>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Servicios;
