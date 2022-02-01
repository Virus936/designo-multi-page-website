import styled from 'styled-components'

const Contact = ({title, content, to}) => {
  return <Container>
    <h1>{title}</h1>
    <p>{content}</p>
    {to&& <button>{to}</button> }
    </Container>
}
const Container = styled.div`
  background:url('${document.location.origin}/asset/svg/bg-pattern-hero-home.svg') var(--color-peach);
  margin:2em calc(max(2em, ( 100vw - var(--max-width) )/2 ));
  margin-top:-5em;
  border-radius:var(--border-radius);
  padding:3em;
  text-align:center;
  color:white;
  h1{
    font-weight:lighter;
  }
  p{
    font-size:.8em;
    margin-top:.8em;
    line-height:2em;

  }
`
export default Contact
