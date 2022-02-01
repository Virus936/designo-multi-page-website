import styled from 'styled-components'
import {size} from '../../settings'

const source = `${document.location.origin}/asset/location/`
const LocationItem = ({country, designo, adress, town, portable, mail, map}) => {

  return <Container>
    <img 
      src={source+'desktop/'+map} 
      srcSet={`${source+'mobile/'+map} 500w,
          ${source+'tablet/'+map} 900w,
          ${source+'desktop/'+map} 1900w,

            `}
      alt="" />
    <div>
      <h1>{country}</h1>
      <div className="coord">
        <div >
          <h2>{designo}</h2>
          <p>{adress}</p>
          <p>{town}</p>
        </div>
        <div>
          <h2>contact</h2>
          <p>P: {portable}</p>
          <p>M: {mail}</p>
        </div>
      </div>
    </div>
    </Container>
}

const Container = styled.section`
  display:flex;
  flex-direction:column;
  text-align:center;

  img{
    display:block;
  }
  >div{
    display:flex;
    flex-direction:column;
    gap:22px;
    padding:2em;
    background:#fdf4f2;
    h1{
      text-transform:capitalize;
      letter-spacing:.4em;
      color:var(--color-peach);
    }
    .coord{
      display:flex;
      flex-direction:column;
        gap:12px;
      h2{
        font-size:1em;
        text-transform:capitalize;
      }
      p{
        font-size:.8em;
      }
    }
  }
  @media(min-width:${size.small}){

    gap:var(--location-gap);
    margin:0 calc(max(2em, ( 100vw - var(--max-width) )/2 ));
    >*{ border-radius:var(--border-radius);
    }
  }
  @media(min-width:${size.medium}){
    text-align:left;
    flex-direction:row;
    &:nth-of-type(2){

      img{
        order:2;
      }
    }
    img{ 
      width:500px;
      flex:3;
    }
    >div{
      flex:4;
      justify-content:center;
      .coord{
        flex-direction:row;
        div{
          flex:1;
        }

      }
    }
  }
`

export default LocationItem
