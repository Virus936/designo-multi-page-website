import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import WebDesignItem from '../webdesign/WebDesignItem';
import { size } from '../../settings';

const designs = [
  {
    to: 'web',
    title: 'web design',
    img: 'image-web-design.jpg',
  },
  {
    to: 'app',
    title: 'app design',
    img: 'image-graphic-design.jpg',
  },
  {
    to: 'graphic',
    title: 'graphic design',
    img: 'image-app-design.jpg',
  },
];

const WebDesign = () => {
  const params = useParams();

  return (
    <Container>
      {designs
        .filter((design) => design.to !== params.design)
        .map((design, _index) => (
          <WebDesignItem key={_index} {...design}>
            {design.title}{' '}
          </WebDesignItem>
        ))}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 90px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--location-gap);

  margin-top: 90px;
  @media (min-width: ${size.small}) {
    margin: 90px calc(max(2em, (100vw - var(--max-width))/2));
  }
`;

export default WebDesign;
