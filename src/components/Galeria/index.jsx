
import styled from 'styled-components';
//import promo1 from '../src/assets/img/promocional1.jpg';

const Section = styled.section`
  background-color: #f9f9f9;
  padding: 4rem 1rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const HeadTitle = styled.h2`
  width: 100%;
  text-align: center;
  color: #000000;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Item = styled.div`
  flex: 1 1 calc(33.333% - 1rem);

  @media (max-width: 768px) {
    flex: 1 1 50%;
  }

  position: relative;
  overflow: hidden;
  border-radius: 6px;
`;

const Img = styled.img`
  width: 100%;
  height: 30vh;
  display: block;
`;

const Title = styled.h4`
  text-align: center;
  margin-top: 0.5rem;
  font-weight: 500;
`;

const imagenes = [
  { id: 1, src: './img/promocional1.jpg', titulo: 'Dia de la Amistad' },
  { id: 2, src: './img/promocional2.jpg', titulo: 'Festividades Decembrinas' },
  { id: 3, src: './img/promocional3.jpg', titulo: 'Apoyo al medio ambiente' },
  /*{ id: 4, src: '../src/assets/img/servicio4.jpg', titulo: 'Imagen 4' },
  { id: 5, src: '../src/assets/img/servicio5.jpg', titulo: 'Imagen 5' },
  { id: 6, src: '../src/assets/img/servicio6.jpg', titulo: 'Imagen 6' },*/
];

const Galeria = () => {
  return (
    <Section id="galeria" aria-labelledby="galeria-heading">
      <Container>
        <HeadTitle id="galeria-heading">
          Galería de participacion con la comunidad
        </HeadTitle>
        <Grid>
          {imagenes.map(({ id, src, titulo }) => (
            <Item key={id}>
              <Img src={src} alt={titulo} />
              <Title>{titulo}</Title>
            </Item>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Galeria;
