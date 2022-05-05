import styled from 'styled-components';
import { size } from '../../settings';

const WebDesignHero = ({ title, desc }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <p>{desc}</p>
    </Container>
  );
};

const Container = styled.div`
  background:url('${document.location.origin}/asset/svg/bg-pattern-hero-home.svg') var(--color-peach) ;
  background-size:490px;
  background-position:50% 95%;
  background-repeat:no-repeat;
  max-width:var(--max-width);
  color:white;
  text-align:center;
  padding:90px max(40px, calc((min(100%, var(--max-width)) - 500px)/2));
  h1{
    text-transform:capitalize;
    letter-spacing:.15em;
  }
  p{
    font-size:small;
    margin-top:2em;
  }
  @media(min-width:${size.small}){
    margin:0 max(2em, calc((100vw - var(--max-width)) /2) );
  }
  @media(min-width:${size.medium}){
    border-radius:var(--border-radius);
  }

`;

export default WebDesignHero;
