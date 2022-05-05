import styled from 'styled-components';
import AboutLocation from './AboutLocation';
import { size } from '../../settings';

const dests = [
  {
    img: 'asset/about/svg/illustration-canada.svg',
    link: '',
    title: 'canada',
  },
  {
    img: 'asset/about/svg/illustration-australia.svg',
    link: '',
    title: 'australia',
  },
  {
    img: 'asset/about/svg/illustration-united-kingdom.svg',
    link: '',
    title: 'united kingdom',
  },
];
const AboutVoyage = () => {
  return (
    <Container>
      {dests.map((dest, _index) => (
        <AboutLocation key={_index} {...dest} />
      ))}
    </Container>
  );
};
const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: ${size.small}) {
    flex-direction: row;
    gap: 30px;
    align-items: flex-end;
  }
`;
export default AboutVoyage;
