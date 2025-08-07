
import styled from 'styled-components';

const Section = styled.section`
  padding: 4rem 1rem;
  background-color: #f5f5f5;
`;

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const Title = styled.h2`
  width: 100%;
  text-align: center;
  color: #000000;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
`;

const ListItem = styled.ul`
  width: 100%;
  text-align: center;
  list-style-type: none;
  padding-left: 0;
  color: #000000;
`;

const Nosotros = () => {
  return (
    <Section id="nosotros" aria-labelledby="nosotros-heading">
      <Container>
        <Title>Nosotros</Title>
        <Text id="nosotros-heading">
          Descubre el placer de las bebidas más deliciosas y refrescantes desde la comodidad de tu hogar. 🍹🥤
            En nuestro catálogo encontrarás desde los clásicos favoritos hasta las últimas novedades en bebidas, pensadas para endulzar tu día, hidratarte con energía o celebrar los mejores momentos.
        </Text>
        <ListItem>
          <li>🚀 Envíos rápidos</li>
          <li>💯 Calidad garantizada</li>
          <li>� Sabor inigualable</li>
        </ListItem> 
      </Container>
    </Section>
  );
};

export default Nosotros;
