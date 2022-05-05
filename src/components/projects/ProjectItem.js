import styled from 'styled-components';
import { size } from '../../settings';

const ProjectItem = ({ img, title, desc }) => {
  return (
    <Container>
      <img src={img} alt={img} />
      <div>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 100%;
  background: #fdf4f2;
  border-radius: var(--border-radius);
  overflow: hidden;
  &:hover {
    background: var(--color-peach);
    color: white;
    transition: 0.2s;
    h1 {
      color: white;
      transition: 0.2s;
    }
  }
  img {
    display: block;
    background-color: dodgerblue;
    width: 100%;
    aspect-ratio: 1;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1em;
    * {
      max-width: 300px;
    }

    h1 {
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--color-peach);
      font-size: 1.3em;
    }
    p {
      line-height: 2em;
      font-size: small;
    }
  }
  @media (min-width: 470px) and (max-width: ${size.medium}) {
    flex-direction: row;

    img {
      order: 2;
      flex: 1;
      width: 300px;
    }
    div {
      flex: 1;
    }
  }
  @media (min-width: ${size.medium}) {
    flex: 270px;
  }
`;

export default ProjectItem;
