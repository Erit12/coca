
import styled from 'styled-components';
//import bannerImage from '../../assets/img/bannersexto.jpg';

const Section = styled.section`
  position: relative;
`;

const Image = styled.img`
  width: 90%;
  margin: 0 auto;
  display: block;
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  text-align: center;
  color: white;
  padding: 0 1rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  /*color: #b71c1c;*/
  color: #fcf9f9ff;
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Text = styled.p`
  max-width: 600px;
  margin: 0 auto 2rem auto;
  font-size: 1.1rem;
  color: #fcfcfcff;
  /*background-color: #c7c7c7ff;*/
`;

const CTA = styled.a`
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

const Banner = () => {
  return (
    <Section id="inicio">
      <Image src='./img/fondo-coca-refresco.jpg' alt="Banner Coca-Cola" />
      <Overlay>
        <Title>🌟 ¡Bienvenidos a Coca-Cola! 🌟 </Title>
        <Text> #BebidasQueInspiran. </Text>
        <CTA href="#nosotros">Ver más</CTA>
      </Overlay>
    </Section>
  );
};

export default Banner;
