import styled from 'styled-components';
import { size } from '../../settings';
import { useNavigate } from 'react-router-dom';

const src = document.location.origin;
const SkillItem = ({ title, img, to }) => {
  const navigate = useNavigate();
  const handleNavigate = (goto) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    navigate('/design' + goto);
  };
  return (
    <Container>
      <img
        src={`${src}/asset/skill/bigscreen/${img}`}
        srcSet={`${src}/asset/skill/mobile/${img} 450w, ./asset/skill/tablet/${img} 900w, ${src}/asset/skill/bigscreen/${img} 1900w `}
        alt=""
      />
      <h1> {title} </h1>
      <span onClick={() => handleNavigate(to)}>view projects</span>
    </Container>
  );
};
const Container = styled.article`
  position: relative;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  user-select: none;

  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius);
  color: white;
  font-size: 18px;
  text-transform: uppercase;
  &:hover {
    background-color: rgba(232, 128, 105, 0.8);
  }
  h1 {
    font-weight: 700;
    letter-spacing: 5px;
    font-size: 1em;
  }
  span {
    font-weight: 700;
    letter-spacing: 2px;
    color: white;
    font-size: 0.8em;
    cursor: pointer;
    text-decoration: none;
  }
  img {
    position: absolute;
    object-fit: cover;
    z-index: -1;
    width: 100%;
    height: 100%;
    @media (min-width: 450px) {
      height: 110%;
      width: auto;
    }
  }

  &:first-child {
    @media (min-width: ${size.medium}) {
      grid-row: 1/3;
    }
  }
  &:nth-child(2) {
  }
  &:nth-child(3) {
  }
`;
export default SkillItem;
