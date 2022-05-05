import styled from 'styled-components';
import { size } from '../../settings';

const Hero = ({ title, desc, img }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{desc}</p>
      <button>learn more</button>

      <img src={img} alt="" />
    </Container>
  );
};

const Container = styled.section`
  display:flex;
  flex-direction:column;
  align-items:center;
  background:url('./asset/svg/bg-pattern-hero-home.svg') var(--color-peach);
  background-repeat:no-repeat;
  background-position:center;
  padding-top:3em;
  text-align:center;
  color:white;
  height:100vh;
  overflow:hidden;
  @media(min-width:${size.small}){
    margin:0 calc(max(2em, ( 100vw - var(--max-width) )/2 ));
    border-radius:var(--border-radius);
  }

  h1{
    margin-top:
    font-weight:500;
    line-height:1.3em;
  }
  p{
    margin:2em;
    font-weight:thin;
    font-size:small;
    line-height:2em;
  }
  button{
    text-transform:uppercase;
    font-weight:500;
    border:none;
    padding:1em 1.4em;
    border-radius:.3em;
  }
  img{
    transform:translateY(-10%);
  }

  @media(min-width:${size.medium}){
    border-radius:var(--border-radius);
    position:relative;
    display:grid;
    grid-template-columns:50% 50%;
    grid-template-rows:repeat(3, min-content);
    grid-auto-flow:column;
    padding-top:0;
    height:auto;
    text-align:left;
    padding-left:43px;
    h1{
      align-self:end;
      font-size:2.4em;
    }
    p{
      margin:0;
    }
    img{
      display:block;
      grid-row:1/4;
      align-self:center;
      justify-self:center;
      width: 500px; 
      height: 600px;
      object-fit: none;
      
      transform:translateY(0%);
    }
    button{
      justify-self:start;
    }
  }
`;

Hero.defaultProps = {
  title: 'default title',
  desc: 'lorem',
};
export default Hero;
